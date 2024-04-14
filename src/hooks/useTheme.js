import { useState, useEffect } from "react";

const useTheme = (initialTheme = "light") => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || initialTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  return { themeMode, darkTheme, lightTheme };
};

export default useTheme;
