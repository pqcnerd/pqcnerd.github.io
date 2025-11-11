// Terminal command handler - modular design
// To add a new command, simply add it to the commands object below

const commands = {
    help: {
        description: 'Show this help message',
        execute: () => {
            return [
                'Available commands:',
                '  help     - Show this help message',
                '  contact  - Contact information',
                '  about    - About me',
                '  projects - My projects',
                '  resume   - Resume/CV'
            ];
        }
    },
    
    contact: {
        description: 'Contact information',
        execute: () => {
            return [
                'Contact Information:',
                '',
                'Email: your.email@example.com',
                'GitHub: github.com/pqcnerd',
                'LinkedIn: linkedin.com/in/pqcnerd',
                '',
                'Feel free to reach out!'
            ];
        }
    },
    
    about: {
        description: 'About me',
        execute: () => {
            return [
                'About pqcnerd:',
                '',
                'I\'m a passionate researcher and student dedicated to exploring',
                'the fascinating field of post-quantum cryptography.',
                '',
                'My work bridges theory and application, ensuring that what I',
                'create has a real-world impact.'
            ];
        }
    },
    
    projects: {
        description: 'My projects',
        execute: () => {
            return [
                'Projects:',
                '',
                '• Post-Quantum Cryptography Research',
                '• Secure Algorithm Implementation',
                '• Machine Learning Applications',
                '',
                'More details coming soon...'
            ];
        }
    },
    
    resume: {
        description: 'Resume/CV',
        execute: () => {
            return [
                'Resume/CV:',
                '',
                'Education:',
                '  • [Your degree and institution]',
                '',
                'Experience:',
                '  • [Your experience]',
                '',
                'Skills:',
                '  • Post-Quantum Cryptography',
                '  • Secure Algorithms',
                '  • Machine Learning',
                '',
                'For a full resume, please contact me.'
            ];
        }
    }
};

// Terminal session for each tab
class TerminalSession {
    constructor(tabId, bodyElement, inputElement) {
        this.tabId = tabId;
        this.body = bodyElement;
        this.input = inputElement;
        this.history = [];
        this.historyIndex = -1;
        
        this.init();
    }
    
    init() {
        // Handle input
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory(-1);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory(1);
            }
        });
        
        // Keep input focused when clicking terminal
        this.body.addEventListener('click', () => {
            this.input.focus();
        });
    }
    
    handleCommand() {
        const command = this.input.value.trim().toLowerCase();
        
        if (command === '') {
            this.addOutput('~$', '');
            this.input.value = '';
            return;
        }
        
        // Add to history
        this.history.push(command);
        this.historyIndex = this.history.length;
        
        // Display command
        this.addOutput('~$', command);
        
        // Execute command
        if (commands[command]) {
            const output = commands[command].execute();
            this.displayOutput(output);
        } else {
            this.displayOutput([`Command not found: ${command}. Type 'help' for available commands.`]);
        }
        
        // Clear input
        this.input.value = '';
        
        // Scroll to bottom
        this.scrollToBottom();
    }
    
    addOutput(prompt, command) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `<span class="prompt">${prompt}</span><span class="command">${command}</span>`;
        
        const output = document.createElement('div');
        output.className = 'terminal-output';
        output.appendChild(line);
        
        this.body.appendChild(output);
    }
    
    displayOutput(lines) {
        const output = document.createElement('div');
        output.className = 'output';
        
        lines.forEach(line => {
            const div = document.createElement('div');
            div.textContent = line;
            output.appendChild(div);
        });
        
        this.body.appendChild(output);
    }
    
    navigateHistory(direction) {
        if (this.history.length === 0) return;
        
        this.historyIndex += direction;
        
        if (this.historyIndex < 0) {
            this.historyIndex = 0;
        } else if (this.historyIndex >= this.history.length) {
            this.historyIndex = this.history.length;
            this.input.value = '';
            return;
        }
        
        this.input.value = this.history[this.historyIndex];
    }
    
    scrollToBottom() {
        this.body.scrollTop = this.body.scrollHeight;
    }
    
    focus() {
        this.input.focus();
    }
}

// Tab manager
class TabManager {
    constructor() {
        this.tabs = new Map();
        this.activeTabId = null;
        this.nextTabId = 3;
        this.tabsContainer = document.querySelector('.terminal-tabs');
        this.terminalContainer = document.querySelector('.terminal-container');
        
        this.init();
    }
    
    init() {
        // Initialize existing tabs from HTML
        const existingTabs = document.querySelectorAll('.tab[data-tab]');
        existingTabs.forEach(tab => {
            const tabId = tab.getAttribute('data-tab');
            this.createTabSession(tabId);
        });
        
        // Set first tab as active
        if (existingTabs.length > 0) {
            this.switchTab(existingTabs[0].getAttribute('data-tab'));
        }
        
        // Tab click handlers
        this.tabsContainer.addEventListener('click', (e) => {
            const tab = e.target.closest('.tab[data-tab]');
            if (tab) {
                const tabId = tab.getAttribute('data-tab');
                if (e.target.classList.contains('tab-close')) {
                    e.stopPropagation();
                    this.closeTab(tabId);
                } else {
                    this.switchTab(tabId);
                }
            } else if (e.target.id === 'add-tab' || e.target.closest('#add-tab')) {
                this.addTab();
            }
        });
    }
    
    createTabSession(tabId) {
        // Create terminal body and input for this tab
        const body = document.createElement('div');
        body.className = 'terminal-body';
        body.id = `terminal-body-${tabId}`;
        body.style.display = 'none';
        
        const inputContainer = document.createElement('div');
        inputContainer.className = 'terminal-input-container';
        inputContainer.id = `terminal-input-container-${tabId}`;
        inputContainer.style.display = 'none';
        inputContainer.innerHTML = `
            <span class="prompt">~$</span>
            <input type="text" class="terminal-input" id="terminal-input-${tabId}" autofocus autocomplete="off" spellcheck="false">
        `;
        
        // Insert into terminal container (after tabs)
        this.terminalContainer.appendChild(body);
        this.terminalContainer.appendChild(inputContainer);
        
        const input = document.getElementById(`terminal-input-${tabId}`);
        const session = new TerminalSession(tabId, body, input);
        this.tabs.set(tabId, { session, body, inputContainer, tabElement: document.querySelector(`.tab[data-tab="${tabId}"]`) });
        
        // Add initial help output
        body.innerHTML = `
            <div class="terminal-output">
                <div class="terminal-line">
                    <span class="prompt">~$</span>
                    <span class="command">help</span>
                </div>
                <div class="output">
                    <div>Available commands:</div>
                    <div>  help     - Show this help message</div>
                    <div>  contact  - Contact information</div>
                    <div>  about    - About me</div>
                    <div>  projects - My projects</div>
                    <div>  resume   - Resume/CV</div>
                </div>
            </div>
        `;
    }
    
    switchTab(tabId) {
        // Hide current active tab
        if (this.activeTabId) {
            const activeTab = this.tabs.get(this.activeTabId);
            if (activeTab) {
                activeTab.body.style.display = 'none';
                activeTab.inputContainer.style.display = 'none';
                activeTab.tabElement.classList.remove('active');
            }
        }
        
        // Show new active tab
        const newTab = this.tabs.get(tabId);
        if (newTab) {
            newTab.body.style.display = 'flex';
            newTab.inputContainer.style.display = 'flex';
            newTab.tabElement.classList.add('active');
            this.activeTabId = tabId;
            setTimeout(() => newTab.session.focus(), 0);
        }
    }
    
    addTab() {
        const tabId = this.nextTabId.toString();
        this.nextTabId++;
        
        // Create tab element
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.setAttribute('data-tab', tabId);
        tab.innerHTML = `
            <span class="tab-title">Terminal</span>
            <span class="tab-close" data-tab="${tabId}">×</span>
        `;
        
        // Insert before add button
        const addTabBtn = document.getElementById('add-tab');
        this.tabsContainer.insertBefore(tab, addTabBtn);
        
        // Create session
        this.createTabSession(tabId);
        
        // Switch to new tab
        this.switchTab(tabId);
    }
    
    closeTab(tabId) {
        if (this.tabs.size <= 1) {
            return; // Don't close the last tab
        }
        
        const tab = this.tabs.get(tabId);
        if (tab) {
            // Remove elements
            tab.body.remove();
            tab.inputContainer.remove();
            tab.tabElement.remove();
            
            // Remove from map
            this.tabs.delete(tabId);
            
            // Switch to another tab if this was active
            if (this.activeTabId === tabId) {
                const remainingTabs = Array.from(this.tabs.keys());
                if (remainingTabs.length > 0) {
                    this.switchTab(remainingTabs[0]);
                }
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TabManager();
});
