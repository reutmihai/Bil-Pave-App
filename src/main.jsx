import { createRoot } from "react-dom/client";
import "@fontsource/alfa-slab-one";
// import "./index.css";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import backgroundImage from "./assets/images/bg.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E5C020",
      yellowTransparent: "rgba(229, 192, 32, 0.8)",
      blackTransparent: "rgba(0, 0, 0, 0.3)",
    },
    secondary: {
      main: "#000000",
      white: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000"
    }
  },

  typography: {
    h1: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem", 
      "@media (max-width:900px)": { fontSize: "2rem" }, 
      "@media (max-width:600px)": { fontSize: "1.5rem" }, 
    },
    h2: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:900px)": { fontSize: "1.8rem" },
      "@media (max-width:600px)": { fontSize: "1.3rem" },
    },
    h3: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 600,
      fontSize: "1.2rem",
      "@media (max-width:900px)": { fontSize: "1.6rem" },
      "@media (max-width:600px)": { fontSize: "1.2rem" },
    },
    h4: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 400,
      fontSize: "1.5rem",
      "@media (max-width:900px)": { fontSize: "1.2rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:900px)": { fontSize: "0.8rem" },
      "@media (max-width:600px)": { fontSize: "0.7rem" },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            // backgroundColor: "transparent",
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
        body: {
          margin: "0",
          display: "flex",
          placeItems: "center",
          minWidth: "320px",
          minHeight: "100vh",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
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
