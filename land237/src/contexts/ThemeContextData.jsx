// src/context/ThemeContextData.jsx
import { createContext } from "react";

export const ThemeContext = createContext({
  mode: "light", // default theme
  toggleTheme: () => {}, // placeholder function
});
