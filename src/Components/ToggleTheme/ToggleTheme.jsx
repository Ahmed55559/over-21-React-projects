import React, { useState } from "react";
import "./theme.css";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`theme-container`} data-theme={theme}>
      <h1>{`Current Theme: ${theme}`}</h1>
      <button onClick={toggleTheme} className="toggle">
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
