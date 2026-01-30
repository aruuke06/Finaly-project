import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import myRouter from "./router";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Theme toggle */}
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 999,
        }}
      >
        {theme === "light" ? "🌙" : "☀"}
      </button>

      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
