import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E5C020",
      yellowTransparent: "rgba(229, 192, 32, 0.8)",
    },
    secondary: {
      main: "#000000",
      white: "#FFFFFF",
    },
  },

  typography: {
    p: {
      fontFamily: "Inter",
    },
    h1: {
      fontFamily: "Alfa Slab One",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Roboto",
      fontWeight: 400,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#aaa9a9",
            transition: "color 0.3s ease",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          textDecoration: "none",
          "&:hover": {
            color: "#aaa9a9",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "#000000",
          textDecoration: "none",
          "&:hover": {
            color: "#aaa9a9",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none", // Elimină conturul la focus
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          backgroundColor: "rgba(2,2,2,0.7)",
          color: "#fff",
          width: "250px",
          padding: "20px",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
