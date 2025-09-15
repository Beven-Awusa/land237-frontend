// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: { main: "#00695c" },  // teal
		secondary: { main: "#f57c00" }, // warm accent
		background: { default: "#fafafa", paper: "#fff" },
	},
	typography: { fontFamily: "Roboto, Arial, sans-serif" },
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: { main: "#00695c" },
		secondary: { main: "#ff9800" },
		background: { default: "#202020FF", paper: "#1e1e1e" },
	},
	typography: { fontFamily: "Roboto, Arial, sans-serif" },
});
