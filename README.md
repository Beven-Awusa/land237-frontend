# Land237 – Real Estate Platform

A modern, modular, and scalable React real estate web application built with **Vite**, **React 19**, **MUI**, and **TanStack React Query**. Designed with **component-driven development**, **functional components**, and **light/dark mode support**.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Running the Project](#running-the-project)  
- [Theme Management](#theme-management)  
- [State Management & API](#state-management--api)  
- [React Query Devtools](#react-query-devtools)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

Land237 is a real estate platform where users can:  
- Browse property listings  
- Search by location, price, or features  
- View property details  
- Toggle between light and dark mode  
- Filter and sort properties (planned features)  

The project emphasizes:  
- **Modular and reusable components**  
- **Functional programming practices**  
- **Responsive UI using MUI**  
- **Efficient data fetching and caching using TanStack React Query**  

---

## Tech Stack

- **Frontend:** React 19, Vite, MUI 7, Styled Components  
- **Routing:** React Router DOM v7  
- **Data Management:** TanStack React Query (with Devtools)  
- **Styling:** MUI Theme, light/dark mode support  
- **Linting & Formatting:** ESLint, Prettier (optional)  

---
## Setup & Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/land237.git
   cd land237

2. Install dependencies
   ```bash
   npm install

3.Running the Project
    ```bash
      npm run dev
------
## Project Structure

```bash
src/
├── components/        # Reusable UI components
│   ├── common/        # Buttons, Modals, Inputs, ThemeToggle
│   ├── layout/        # Navbar, Footer
│   └── property/      # PropertyCard, PropertyList
├── context/           # ThemeContext, AuthContext (future)
├── hooks/             # Custom hooks (useTheme, useFetch)
├── pages/             # Route pages (Home, Properties, PropertyDetails)
├── services/          # API calls
├── theme/             # Light & Dark theme definitions
├── utils/             # Helpers (formatPrice, constants)
├── App.jsx
└── main.jsx
