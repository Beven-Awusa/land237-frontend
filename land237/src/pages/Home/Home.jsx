import { useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../contexts/ThemeContextData";


export default function Home() {
	  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Tooltip title="Toggle light/dark mode">
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}
