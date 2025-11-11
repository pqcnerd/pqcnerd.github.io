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

// Terminal functionality
class Terminal {
    constructor() {
        this.input = document.getElementById('terminal-input');
        this.body = document.getElementById('terminal-body');
        this.history = [];
        this.historyIndex = -1;
        
        this.init();
    }
    
    init() {
        // Focus input on load
        this.input.focus();
        
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
            this.addOutput('pqcnerd@Handheld-Compile$', '');
            this.input.value = '';
            return;
        }
        
        // Add to history
        this.history.push(command);
        this.historyIndex = this.history.length;
        
        // Display command
        this.addOutput('pqcnerd@Handheld-Compile$', command);
        
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
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});

