const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full p-1 transition-all duration-300 hover:scale-105 
                 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        background: "var(--filter-bg)",
        "--tw-ring-color": "var(--button-primary)",
      }}
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 
                    flex items-center justify-center ${
                      theme === "dark" ? "translate-x-8" : "translate-x-0"
                    }`}
        style={{ background: "var(--card-bg)" }}
      >
        {theme === "light" ? (
          <span className="text-yellow-500 text-sm">☀️</span>
        ) : (
          <span className="text-blue-400 text-sm">🌙</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
