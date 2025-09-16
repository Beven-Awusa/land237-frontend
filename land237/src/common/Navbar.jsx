import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // moon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // sun
import { ThemeContext } from "../contexts/ThemeContextData";

// Structured navigation links
const navLinks = [
  { name: "Home", link: "/" },
  { name: "Properties", link: "/properties" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`shadow-md z-50 sticky top-0 backdrop-blur-lg ${
        mode === "light"
          ? "bg-white bg-opacity-90"
          : "bg-[#002912e1] bg-opacity-90"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Land237
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="text-text hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === "light" ? <Brightness4Icon /> : <WbSunnyIcon />}
            </IconButton>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <IconButton
              onClick={() => setIsOpen(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 backdrop-blur-lg bg-[#002912e1] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl font-bold text-white">Menu</span>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{color: 'white'}} />
          </IconButton>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <IconButton onClick={toggleTheme} sx={{color: 'white', marginRight: 'auto'}}>
            {mode === "light" ? <Brightness4Icon /> : <WbSunnyIcon />}
          </IconButton>
        </div>
      </div>

      {/* Overlay */}
     
    </nav>
  );
}
