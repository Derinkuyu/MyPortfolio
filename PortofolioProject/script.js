const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// 1. Check LocalStorage or System Preference on Load
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Apply the initial theme
htmlElement.setAttribute("data-theme", currentTheme);
themeToggle.checked = currentTheme === "dark"; // Sync the toggle button

// 2. Listen for Toggle Changes
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
