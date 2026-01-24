const HOME_DIR = "/home/guest";
const ABOUT_TEXT = [
  "About Mark (Zeheng) Mu",
  "----------------",
  "Passionate about post-quantum cryptography, low-level systems, and building delightful developer tooling.",
  "I am a student at the University of Toronto, pursuing a Bachelor's degree in Computer Science.",
].join("\n");
const CONTACT_TEXT = [
  "Contact",
  "-------",
  "email: pqcnerd@gmail.com",
  "github: https://github.com/pqcnerd",
  "linkedin: https://www.linkedin.com/in/mark-mu",
  "x: https://x.com/pqcnerd",
].join("\n");
const RESUME_TEXT = [
  "Resume",
  "------",
  "PDF: https://pqcnerd.github.io/Resume%20CV.pdf",
].join("\n");
const PROJECTS_TEXT = [
  "Projects",
  "--------",
  "coming soon!",
].join("\n");

const FILE_SYSTEM = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        guest: {
          type: "dir",
          children: {
            "about.txt": { type: "file", content: ABOUT_TEXT },
            "contact.txt": { type: "file", content: CONTACT_TEXT },
            "resume.pdf": { type: "file", content: RESUME_TEXT },
            projects: {
              type: "dir",
              children: {
                "pqc-terminal.txt": {
                  type: "file",
                  content: "Terminal-inspired personal site.\nStatus: in progress.",
                },
                "pqc-crypto.txt": {
                  type: "file",
                  content: "Post-quantum cryptography explorations.\nStatus: expanding.",
                },
              },
            },
          },
        },
      },
    },
  },
};

const QUOTE_CACHE_KEY = "pqcnerd-daily-quote";
const FALLBACK_QUOTES = [
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
  },
  {
    text: "What we know is a drop, what we do not know is an ocean.",
    author: "Isaac Newton",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
];

const state = {
  nextIndex: 2,
  activeId: "tab-1",
  sessions: new Map(),
};

const visitorState = {
  viewport: null,
  panel: null,
  form: null,
  steps: [],
  currentIndex: 0,
  answers: {
    role: "",
    reason: "",
    rating: "",
    notes: "",
  },
  roleButtons: [],
  reasonInput: null,
  reasonNext: null,
  ratingButtons: [],
  notesInput: null,
};

const ui = {
  tabBar: null,
  panelContainer: null,
  addTabButton: null,
};

const navState = {
  items: [],
  panels: new Map(),
  activeView: "terminal",
};

const settingsState = {
  theme: "dark",
  accent: "cyan",
  fontSize: "medium",
};
const SETTINGS_KEY = "pqcnerd-settings";

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
  initVisitorFlow();
  initTopNav();
  initSettings();
  initQuote();
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
    cwd: HOME_DIR,
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

  const response = executeCommand(command, session);
  if (response && response.length > 0) {
    appendResponse(session, response);
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

function executeCommand(input, session) {
  const args = parseInput(input);
  const command = args.shift()?.toLowerCase();

  if (!command) {
    return null;
  }

  switch (command) {
    case "help":
      return getHelpText();
    case "ls":
      return handleLs(args, session);
    case "cd":
      return handleCd(args, session);
    case "pwd":
      return [session.cwd];
    case "cat":
      return handleCat(args, session);
    case "clear":
      session.output.innerHTML = "";
      return null;
    case "echo":
      return [args.join(" ")];
    case "whoami":
      return ["guest"];
    case "date":
      return [new Date().toString()];
    case "history":
      return session.history.map((entry, index) => `${index + 1}  ${entry}`);
    case "neofetch":
      return getNeofetch();
    case "about":
      return ABOUT_TEXT.split("\n");
    case "contact":
      return CONTACT_TEXT.split("\n");
    case "resume":
      return RESUME_TEXT.split("\n");
    case "projects":
      return PROJECTS_TEXT.split("\n");
    default:
      return [
        `Command not found: ${command}`,
        "Type 'help' to see the list of available commands.",
      ];
  }
}

function parseInput(input) {
  const tokens = [];
  const regex = /"([^"]*)"|'([^']*)'|(\S+)/g;
  let match = regex.exec(input);
  while (match) {
    tokens.push(match[1] ?? match[2] ?? match[3]);
    match = regex.exec(input);
  }
  return tokens;
}

function resolvePath(targetPath, cwd) {
  if (!targetPath || targetPath === "~") {
    return HOME_DIR;
  }

  let resolved = targetPath;
  if (resolved.startsWith("~")) {
    resolved = HOME_DIR + resolved.slice(1);
  } else if (!resolved.startsWith("/")) {
    resolved = `${cwd.replace(/\/$/, "")}/${resolved}`;
  }

  const segments = [];
  resolved.split("/").forEach((segment) => {
    if (!segment || segment === ".") {
      return;
    }
    if (segment === "..") {
      segments.pop();
      return;
    }
    segments.push(segment);
  });
  return `/${segments.join("/")}`;
}

function getNode(path) {
  const segments = path.split("/").filter(Boolean);
  let node = FILE_SYSTEM;
  for (const segment of segments) {
    if (!node.children || !node.children[segment]) {
      return null;
    }
    node = node.children[segment];
  }
  return node;
}

function handleLs(args, session) {
  const detailed = args.includes("-la") || args.includes("-l");
  const targetArg = args.find((arg) => !arg.startsWith("-"));
  const targetPath = resolvePath(targetArg ?? "", session.cwd);
  const node = getNode(targetPath);

  if (!node) {
    return [
      `ls: cannot access '${targetArg ?? targetPath}': No such file or directory`,
    ];
  }

  if (node.type !== "dir") {
    return [targetPath.split("/").pop() || targetPath];
  }

  const entries = Object.entries(node.children ?? {});
  const sorted = entries.sort(([aName], [bName]) =>
    aName.localeCompare(bName),
  );

  if (sorted.length === 0) {
    return [];
  }

  if (!detailed) {
    return [sorted.map(([name]) => name).join("  ")];
  }

  return sorted.map(([name, entry]) => {
    const permissions = entry.type === "dir" ? "drwxr-xr-x" : "-rw-r--r--";
    const size = entry.type === "dir" ? 0 : entry.content.length;
    return `${permissions} 1 guest staff ${String(size).padStart(4)} ${name}`;
  });
}

function handleCd(args, session) {
  const target = args[0];
  const nextPath = resolvePath(target ?? "~", session.cwd);
  const node = getNode(nextPath);

  if (!node) {
    return [`cd: no such file or directory: ${target ?? ""}`.trim()];
  }
  if (node.type !== "dir") {
    return [`cd: not a directory: ${target ?? ""}`.trim()];
  }

  session.cwd = nextPath;
  return null;
}

function handleCat(args, session) {
  if (!args[0]) {
    return ["cat: missing file operand"];
  }

  const targetPath = resolvePath(args[0], session.cwd);
  const node = getNode(targetPath);

  if (!node) {
    return [`cat: ${args[0]}: No such file or directory`];
  }
  if (node.type === "dir") {
    return [`cat: ${args[0]}: Is a directory`];
  }

  return node.content.split("\n");
}

function getHelpText() {
  return [
    "Available commands:",
    "  - help       - list available commands",
    "  - ls         - list directory contents",
    "  - ls -la     - detailed list",
    "  - cd         - change directory",
    "  - pwd        - print working directory",
    "  - cat        - show file contents",
    "  - echo       - print text",
    "  - clear      - clear the terminal",
    "  - whoami     - show current user",
    "  - date       - show date and time",
    "  - history    - show command history",
    "  - neofetch   - system snapshot",
    "  - about      - learn more about me",
    "  - contact    - ways to reach out",
    "  - resume     - resume",
    "  - projects   - project highlights",
  ];
}

function getNeofetch() {
  return [
    "pqcnerd@terminal",
    "---------------",
    "OS: PQC Terminal",
    "Host: pqcnerd.github.io",
    "Kernel: 5.0.0",
    "Uptime: 42 days",
    "Shell: pqsh",
    "Resolution: responsive",
    "Theme: custom",
    "CPU: Quantum-Ready",
    "GPU: Neural Render",
    "Memory: 512MB",
  ];
}

function initSettings() {
  const savedSettings = loadSettings();
  settingsState.theme = savedSettings.theme;
  settingsState.accent = savedSettings.accent;
  settingsState.fontSize = savedSettings.fontSize;

  applySettings();
  bindSettingsControls();
}

function loadSettings() {
  if (!window.localStorage) {
    return { ...settingsState };
  }

  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return { ...settingsState };
    }
    const parsed = JSON.parse(raw);
    return {
      theme: parsed.theme ?? settingsState.theme,
      accent: parsed.accent ?? settingsState.accent,
      fontSize: parsed.fontSize ?? settingsState.fontSize,
    };
  } catch (error) {
    return { ...settingsState };
  }
}

function saveSettings() {
  if (!window.localStorage) {
    return;
  }
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsState));
}

function applySettings() {
  const root = document.documentElement;
  root.classList.remove("theme-light", "theme-contrast");
  root.classList.remove(
    "accent-green",
    "accent-purple",
    "accent-orange",
    "accent-pink",
  );
  root.classList.remove("font-small", "font-medium", "font-large");

  if (settingsState.theme === "light") {
    root.classList.add("theme-light");
  } else if (settingsState.theme === "contrast") {
    root.classList.add("theme-contrast");
  }

  if (settingsState.accent !== "cyan") {
    root.classList.add(`accent-${settingsState.accent}`);
  }

  root.classList.add(`font-${settingsState.fontSize}`);
  updateSettingsUI();
}

function bindSettingsControls() {
  const settingsGroups = document.querySelectorAll(".settings-options");
  settingsGroups.forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-value]");
      if (!button) {
        return;
      }
      const setting = group.dataset.setting;
      const value = button.dataset.value;
      if (!setting || !value) {
        return;
      }
      settingsState[setting] = value;
      applySettings();
      saveSettings();
    });
  });
}

function updateSettingsUI() {
  const settingsGroups = document.querySelectorAll(".settings-options");
  settingsGroups.forEach((group) => {
    const setting = group.dataset.setting;
    const activeValue = settingsState[setting];
    const buttons = group.querySelectorAll("button[data-value]");
    buttons.forEach((button) => {
      const isActive = button.dataset.value === activeValue;
      button.classList.toggle("active", isActive);
    });
  });
}

function initQuote() {
  const cached = getCachedQuote();
  if (cached) {
    displayQuote(cached);
    return;
  }

  fetchDailyQuote()
    .then((quote) => {
      cacheQuote(quote);
      displayQuote(quote);
    })
    .catch(() => {
      const fallback = pickFallbackQuote();
      cacheQuote(fallback);
      displayQuote(fallback);
    });
}

async function fetchDailyQuote() {
  const response = await fetch("https://zenquotes.io/api/today");
  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  const data = await response.json();
  const first = Array.isArray(data) ? data[0] : null;
  if (!first || !first.q) {
    throw new Error("Invalid quote response");
  }

  return {
    text: String(first.q),
    author: first.a ? String(first.a) : "Unknown",
  };
}

function getCachedQuote() {
  if (!window.localStorage) {
    return null;
  }

  try {
    const raw = localStorage.getItem(QUOTE_CACHE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (parsed.dateKey !== getTodayKey() || !parsed.text) {
      return null;
    }
    return {
      text: parsed.text,
      author: parsed.author ?? "Unknown",
    };
  } catch (error) {
    return null;
  }
}

function cacheQuote(quote) {
  if (!window.localStorage) {
    return;
  }
  const payload = {
    dateKey: getTodayKey(),
    text: quote.text,
    author: quote.author,
  };
  localStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(payload));
}

function displayQuote(quote) {
  const quoteText = document.getElementById("daily-quote");
  const quoteAuthor = document.getElementById("quote-author");
  if (!quoteText || !quoteAuthor) {
    return;
  }

  quoteText.textContent = quote.text ?? "";
  quoteAuthor.textContent = quote.author ? `— ${quote.author}` : "";
}

function pickFallbackQuote() {
  const dateKey = getTodayKey();
  let hash = 0;
  for (const char of dateKey) {
    hash = (hash + char.charCodeAt(0)) % 100000;
  }
  const index = hash % FALLBACK_QUOTES.length;
  return FALLBACK_QUOTES[index];
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

function initTopNav() {
  navState.items = Array.from(document.querySelectorAll(".nav-item[data-view]"));
  const panels = Array.from(
    document.querySelectorAll(".view-panel[data-view-id]"),
  );

  if (navState.items.length === 0 || panels.length === 0) {
    return;
  }

  navState.panels = new Map();
  panels.forEach((panel) => {
    const viewId = panel.dataset.viewId;
    if (viewId) {
      navState.panels.set(viewId, panel);
    }
  });

  navState.items.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const viewId = item.dataset.view;
      if (!viewId) {
        return;
      }
      setActiveView(viewId);
    });
  });

  setActiveView(navState.activeView);
}

function setActiveView(viewId) {
  if (!navState.panels.has(viewId)) {
    return;
  }

  navState.activeView = viewId;

  navState.items.forEach((item) => {
    const isActive = item.dataset.view === viewId;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  navState.panels.forEach((panel, id) => {
    panel.classList.toggle("active", id === viewId);
  });

  if (viewId === "terminal") {
    const activeSession = state.sessions.get(state.activeId);
    activeSession?.input.focus();
  }
}

function initVisitorFlow() {
  visitorState.viewport = document.querySelector(".viewport");
  visitorState.panel = document.querySelector(".visitor-panel");
  visitorState.form = document.querySelector("#visitor-form");

  if (!visitorState.viewport || !visitorState.panel || !visitorState.form) {
    return;
  }

  visitorState.steps = Array.from(
    visitorState.form.querySelectorAll(".question"),
  );
  visitorState.roleButtons = Array.from(
    visitorState.form.querySelectorAll("[data-role-option]"),
  );
  visitorState.reasonInput =
    visitorState.form.querySelector("#visitor-reason");
  visitorState.reasonNext = visitorState.form.querySelector(
    '[data-action="next-reason"]',
  );
  visitorState.ratingButtons = Array.from(
    visitorState.form.querySelectorAll("[data-rating-option]"),
  );
  visitorState.notesInput =
    visitorState.form.querySelector("#visitor-notes");
  visitorState.currentIndex = 0;
  visitorState.answers = {
    role: "",
    reason: "",
    rating: "",
    notes: "",
  };

  visitorState.roleButtons.forEach((button) => {
    button.addEventListener("click", () => handleRoleSelect(button));
  });

  if (visitorState.reasonInput && visitorState.reasonNext) {
    visitorState.reasonInput.addEventListener("input", handleReasonInput);
    visitorState.reasonNext.addEventListener("click", handleReasonNext);
    visitorState.reasonNext.disabled =
      visitorState.reasonInput.value.trim().length === 0;
  }

  visitorState.ratingButtons.forEach((button) => {
    button.addEventListener("click", () => handleRatingSelect(button));
  });

  visitorState.form.addEventListener("submit", handleVisitorSubmit);
  showVisitorStep(0);
}

function showVisitorStep(index) {
  visitorState.steps.forEach((step, idx) => {
    step.classList.toggle("active", idx === index);
  });
  visitorState.currentIndex = index;
}

function nextVisitorStep() {
  const nextIndex = Math.min(
    visitorState.currentIndex + 1,
    visitorState.steps.length - 1,
  );
  showVisitorStep(nextIndex);
}

function handleRoleSelect(button) {
  const value = button.dataset.roleOption;
  if (!value) {
    return;
  }

  visitorState.answers.role = value;
  visitorState.roleButtons.forEach((btn) => {
    const isSelected = btn === button;
    btn.classList.toggle("selected", isSelected);
    btn.setAttribute("aria-pressed", String(isSelected));
  });
  nextVisitorStep();
  visitorState.reasonInput?.focus();
}

function handleReasonInput() {
  if (!visitorState.reasonInput || !visitorState.reasonNext) {
    return;
  }

  const hasText = visitorState.reasonInput.value.trim().length > 0;
  visitorState.reasonNext.disabled = !hasText;
}

function handleReasonNext() {
  if (!visitorState.reasonInput) {
    return;
  }

  const value = visitorState.reasonInput.value.trim();
  if (!value) {
    return;
  }

  visitorState.answers.reason = value;
  nextVisitorStep();
  visitorState.ratingButtons[0]?.focus();
}

function handleRatingSelect(button) {
  const value = button.dataset.ratingOption;
  if (!value) {
    return;
  }

  visitorState.answers.rating = value;
  visitorState.ratingButtons.forEach((btn) => {
    const isSelected = btn === button;
    btn.classList.toggle("selected", isSelected);
    btn.setAttribute("aria-pressed", String(isSelected));
  });
  nextVisitorStep();
  visitorState.notesInput?.focus();
}

function handleVisitorSubmit(event) {
  event.preventDefault();
  if (visitorState.notesInput) {
    visitorState.answers.notes = visitorState.notesInput.value.trim();
  }

  visitorState.panel.classList.add("hidden");
  visitorState.panel.setAttribute("aria-hidden", "true");
  visitorState.viewport.classList.add("panel-hidden");

  const activeSession = state.sessions.get(state.activeId);
  activeSession?.input.focus();
}
