import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/alfa-slab-one";
import "@fontsource/inter"; 
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import backgroundImage from "./assets/images/bg.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(229, 192, 32, 0.8)",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 300,
      fontSize: "2.5rem",
      "@media (max-width:900px)": { fontSize: "2rem" },
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h2: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 300,
      fontSize: "2rem",
      "@media (max-width:900px)": { fontSize: "1.8rem" },
      "@media (max-width:600px)": { fontSize: "1.3rem" },
    },
    h3: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 300,
      fontSize: "2rem",
      "@media (max-width:900px)": { fontSize: "1.5rem" },
      "@media (max-width:600px)": { fontSize: "1.2rem" },
    },
    h4: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontWeight: 300,
      fontSize: "2rem",
      "@media (max-width:900px)": { fontSize: "1.3rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    h5: {
      fontFamily: "Alfa Slab One, sans-serif",
      fontSize: "1.5rem",
      margin: "20px 0px 20px 0px",
      "@media (max-width:900px)": { fontSize: "1.3rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    h6: {
      fontFamily: "Inter",
      fontSize: "1.5rem",
      margin: "20px 0px 20px 0px",
      "@media (max-width:900px)": { fontSize: "1.3rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "1rem",
      maxWidth: 'md',
      "@media (max-width:900px)": { fontSize: "0.8rem" },
      "@media (max-width:600px)": { fontSize: "0.7rem" },
    },
    body2: {
      fontFamily: "Inter",
      fontSize: "1rem",
      fontWeight: 800,
      textDecoration: 'underline',
      "@media (max-width:900px)": { fontSize: "0.8rem" },
      "@media (max-width:600px)": { fontSize: "0.7rem" },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
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
        img: {
          // maxHeight: "300px",
          // height: "auto",
          // // width: "100%",
          // maxWidth: "100%",
          border: '1px solid white',
          boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
          borderRadius: "5px",
        },
        picture: {
          display: 'block', 
          margin: '0 auto', 
        },
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
          overflowX: "hidden",
          width: "100%",
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

    MuiList: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          listStyleType: "disc", 
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backdropFilter: 'blur(10px)', 
          boxShadow: 'none', 
        }
      }
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: "16px", 
          display: "list-item",
          "@media (max-width:900px)": { fontSize: "0.8rem" },
          "@media (max-width:600px)": { fontSize: "0.7rem" },
        },
      },
    },
  },
});


const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
} else {
  console.error("⚠️ Root element not found!");
}
