export function getInitialTheme() {
  if (typeof document !== "undefined") {
    if (document.documentElement.dataset.theme === "light") {
      return false;
    }

    if (document.documentElement.dataset.theme === "dark") {
      return true;
    }
  }

  if (typeof window !== "undefined") {
    return window.localStorage.getItem("theme") !== "light";
  }

  return true;
}
