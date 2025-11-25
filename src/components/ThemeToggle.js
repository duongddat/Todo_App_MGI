const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-full p-0.5 sm:p-1 transition-all duration-300 hover:scale-105 
                 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        width: "3.5rem",
        height: "2rem",
        background: "var(--filter-bg)",
        "--tw-ring-color": "var(--button-primary)",
      }}
      aria-label="Toggle theme"
    >
      <div
        className={`rounded-full shadow-md transform transition-all duration-300 
                    flex items-center justify-center ${
                      theme === "dark" ? "translate-x-7" : "translate-x-0"
                    }`}
        style={{
          width: "1.5rem",
          height: "1.5rem",
          background: "var(--card-bg)",
        }}
      >
        {theme === "light" ? (
          <span className="text-xs">☀️</span>
        ) : (
          <span className="text-xs">🌙</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
