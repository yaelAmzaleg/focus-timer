import { useTheme } from "../ThemeContext";

function ThemeButton() {
  const [theme, setTheme] = useTheme();

  function handleToggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button type="button" onClick={handleToggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeButton;