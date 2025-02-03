import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App.jsx';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea", 
    },
    secondary: {
      main: "#03dac6", 
    },
  },

  typography: {
    h1 : {
    fontFamily: "Roboto",
    fontWeight: 600,
    },
    h2 : {
    fontFamily: "Roboto",
    fontWeight: 400,
    }
  }
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
