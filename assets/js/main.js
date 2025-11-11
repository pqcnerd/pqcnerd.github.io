const COMMAND_RESPONSES = {
  help: [
    "Available commands:",
    "  - help       - list available commands",
    "  - about      - learn more about me",
    "  - contact    - ways to reach out",
    "  - resume     - resume placeholder",
    "  - projects   - project highlights placeholder",
  ],
  about: [
    "About pqcnerd",
    "----------------",
    "Passionate about post-quantum cryptography, low-level systems, and building delightful developer tooling.",
    "(Replace this block with your actual short bio.)",
  ],
  contact: [
    "Contact",
    "-------",
    "email: your.email@example.com",
    "github: https://github.com/pqcnerd",
    "linkedin: https://www.linkedin.com/in/placeholder",
    "(Update with real contact links.)",
  ],
  resume: [
    "Resume",
    "------",
    "A downloadable resume or PDF link can live here.",
    "For now, imagine a direct link to your up-to-date resume.",
  ],
  projects: [
    "Projects",
    "--------",
    "1. Quantum-Safe Toolkit - Placeholder description.",
    "2. Capture-the-Flag Platform - Placeholder description.",
    "3. Static Site Generator - Placeholder description.",
    "(Swap in real project details when ready.)",
  ],
};

const state = {
  nextIndex: 2,
  activeId: "tab-1",
  sessions: new Map(),
};

const ui = {
  tabBar: null,
  panelContainer: null,
  addTabButton: null,
};

document.addEventListener("DOMContentLoaded", () => {
  ui.tabBar = document.querySelector(".tab-bar");
  ui.panelContainer = document.querySelector(".terminal-body");
  ui.addTabButton = document.querySelector(".add-tab");

  const initialWrapper = ui.tabBar.querySelector('.tab[data-tab-id="tab-1"]');
  const initialTrigger = initialWrapper.querySelector(".tab-trigger");
  const initialClose = initialWrapper.querySelector(".tab-close");
  const initialPanel = document.getElementById("tab-1");
  const initialInput = document.getElementById("input-tab-1");
  const initialForm = initialPanel.querySelector(".terminal-input");
  const initialOutput = initialPanel.querySelector(".terminal-output");

  registerSession({
    id: "tab-1",
    name: "main",
    wrapper: initialWrapper,
    trigger: initialTrigger,
    closeButton: initialClose,
    panel: initialPanel,
    input: initialInput,
    form: initialForm,
    output: initialOutput,
  });

  initialTrigger.addEventListener("click", () => activateTab("tab-1"));
  initialClose.addEventListener("click", () => closeTab("tab-1"));
  initialForm.addEventListener("submit", (event) =>
    handleSubmit(event, "tab-1"),
  );
  initialInput.addEventListener("keydown", (event) =>
    handleHistory(event, "tab-1"),
  );
  printWelcome("tab-1");

  ui.addTabButton.addEventListener("click", () => createTab());
});

function registerSession({
  id,
  name,
  wrapper,
  trigger,
  closeButton,
  panel,
  input,
  form,
  output,
}) {
  state.sessions.set(id, {
    id,
    name,
    wrapper,
    trigger,
    closeButton,
    panel,
    input,
    form,
    output,
    history: [],
    historyIndex: 0,
  });
}

function activateTab(tabId) {
  if (!state.sessions.has(tabId)) {
    return;
  }

  state.activeId = tabId;
  state.sessions.forEach((session, id) => {
    const isActive = id === tabId;
    session.wrapper.classList.toggle("active", isActive);
    session.trigger.setAttribute("aria-selected", String(isActive));
    session.panel.classList.toggle("active", isActive);
  });

  queueMicrotask(() => {
    const activeInput = state.sessions.get(tabId)?.input;
    activeInput?.focus();
  });
}

function handleSubmit(event, tabId) {
  event.preventDefault();
  const session = state.sessions.get(tabId);
  if (!session) {
    return;
  }

  const command = session.input.value.trim();
  if (!command) {
    return;
  }

  appendCommand(session, command);
  session.history.push(command);
  session.historyIndex = session.history.length;

  const normalized = command.toLowerCase();
  const response = COMMAND_RESPONSES[normalized];

  if (response) {
    appendResponse(session, response);
  } else {
    appendResponse(session, [
      `Command not found: ${command}`,
      "Type 'help' to see the list of available commands.",
    ]);
  }

  session.input.value = "";
  scrollToBottom(session.output);
}

function handleHistory(event, tabId) {
  const session = state.sessions.get(tabId);
  if (!session || session.history.length === 0) {
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    session.historyIndex = Math.max(session.historyIndex - 1, 0);
    session.input.value = session.history[session.historyIndex] ?? "";
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    session.historyIndex = Math.min(
      session.historyIndex + 1,
      session.history.length,
    );
    session.input.value =
      session.history[session.historyIndex] ?? "";
  }
}

function appendCommand(session, command) {
  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = `$`;

  const commandSpan = document.createElement("span");
  commandSpan.className = "command";
  commandSpan.textContent = command;

  line.append(prompt, commandSpan);
  session.output.append(line);
}

function appendResponse(session, lines) {
  lines.forEach((text) => {
    const responseLine = document.createElement("div");
    responseLine.className = "terminal-line";

    const responseSpan = document.createElement("span");
    responseSpan.className = "response";
    responseSpan.textContent = text;

    responseLine.append(responseSpan);
    session.output.append(responseLine);
  });
}

function printWelcome(tabId) {
  const session = state.sessions.get(tabId);
  if (!session) {
    return;
  }

  appendResponse(session, [
    `Welcome to ${session.name}!`,
    "Type 'help' to see what you can do.",
  ]);
  scrollToBottom(session.output);
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight;
}

function createTab() {
  if (!ui.tabBar || !ui.panelContainer) {
    return;
  }

  const index = state.nextIndex++;
  const tabId = `tab-${index}`;
  const buttonId = `tab-button-${index}`;
  const inputId = `input-${tabId}`;
  const labelText = `tab-${index}`;

  const wrapper = document.createElement("div");
  wrapper.className = "tab";
  wrapper.dataset.tabId = tabId;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.id = buttonId;
  trigger.className = "tab-trigger";
  trigger.setAttribute("role", "tab");
  trigger.setAttribute("aria-controls", tabId);
  trigger.setAttribute("aria-selected", "false");

  const icon = document.createElement("span");
  icon.className = "tab-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "_";

  const label = document.createElement("span");
  label.className = "tab-label";
  label.textContent = labelText;

  trigger.append(icon, label);

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "tab-close";
  closeButton.setAttribute("aria-label", `Close ${labelText}`);
  closeButton.textContent = "x";

  wrapper.append(trigger, closeButton);
  ui.tabBar.append(wrapper);

  const panel = document.createElement("div");
  panel.className = "tab-panel";
  panel.id = tabId;
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", buttonId);
  panel.dataset.tab = "";

  const output = document.createElement("div");
  output.className = "terminal-output";
  output.setAttribute("aria-live", "polite");
  output.setAttribute("aria-atomic", "false");

  const form = document.createElement("form");
  form.className = "terminal-input";
  form.autocomplete = "off";

  const promptLabel = document.createElement("label");
  promptLabel.className = "prompt";
  promptLabel.setAttribute("for", inputId);
  promptLabel.setAttribute("aria-hidden", "true");
  promptLabel.textContent = "$";

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.spellcheck = false;
  input.inputMode = "text";
  input.setAttribute("aria-label", "Type a command");

  form.append(promptLabel, input);
  panel.append(output, form);
  ui.panelContainer.append(panel);

  registerSession({
    id: tabId,
    name: labelText,
    wrapper,
    trigger,
    closeButton,
    panel,
    input,
    form,
    output,
  });

  trigger.addEventListener("click", () => activateTab(tabId));
  closeButton.addEventListener("click", () => closeTab(tabId));
  form.addEventListener("submit", (event) => handleSubmit(event, tabId));
  input.addEventListener("keydown", (event) => handleHistory(event, tabId));

  activateTab(tabId);
  printWelcome(tabId);
}

function closeTab(tabId) {
  const session = state.sessions.get(tabId);
  if (!session) {
    return;
  }

  const wasActive = state.activeId === tabId;

  session.wrapper.remove();
  session.panel.remove();
  state.sessions.delete(tabId);

  if (state.sessions.size === 0) {
    createTab();
    return;
  }

  if (wasActive) {
    const remaining = Array.from(state.sessions.keys());
    const fallbackId = remaining[remaining.length - 1];
    activateTab(fallbackId);
  }
}

