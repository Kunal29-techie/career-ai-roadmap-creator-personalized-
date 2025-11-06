const themes = {
  default: {
    "--primary": "#10b981",
    "--primary-dark": "#059669",
    "--accent": "#f59e0b",
  },
  frontend: {
    "--primary": "#3b82f6",
    "--primary-dark": "#2563eb",
    "--accent": "#ec4899",
  },
  backend: {
    "--primary": "#1f2937",
    "--primary-dark": "#111827",
    "--accent": "#f59e0b",
  },
  "data-science": {
    "--primary": "#10b981",
    "--primary-dark": "#059669",
    "--accent": "#10b981",
  },
};

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.default;
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(key, value);
  }
  localStorage.setItem("theme", themeName);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "default";
  applyTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", loadTheme);
