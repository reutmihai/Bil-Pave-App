import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  console.log("Current path:", location.pathname);
  return (
    <AppBar position="fixed" sx={{ padding: "5px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            📞 +40 712 345 678
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            ✉️ contact@firma.ro
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Logo
        </Typography>

        <Box>
          <Button
            sx={{
              color: location.pathname === "/" ? "yellow" : "inherit",
              fontWeight:
                location.pathname === "/" ? "bold" : "normal",
            }}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            sx={{
              color: location.pathname === "/services" ? "yellow" : "inherit",
              fontWeight:
                location.pathname === "/services" ? "bold" : "normal",
            }}
            component={Link}
            to="/services"
          >
            Services
          </Button>
          <Button
            sx={{
              color: location.pathname === "/portfolio" ? "yellow" : "inherit",
              fontWeight:
                location.pathname === "/portfolio" ? "bold" : "normal",
            }}
            component={Link}
            to="/portfolio"
          >
            Portfolio
          </Button>
          <Button
            sx={{
              color: location.pathname === "/about" ? "yellow" : "inherit",
              fontWeight:
                location.pathname === "/about" ? "bold" : "normal",
            }}
            component={Link}
            to="/about"
          >
            About Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
