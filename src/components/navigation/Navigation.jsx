import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "../icons/EmailIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";

export const Navigation = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ padding: "5px 20px" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            justifyContent: "flex-star",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PhoneIcon />
            <Typography variant="body1" sx={{ fontSize: "14px", ml: 1 }}>
              <a href="https:///wa.me/+40785972259" target="_blank" rel="noopener norefferer">+40 712 345 678</a>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon sx={{ pt: 2 }} />
            <Typography variant="body1" sx={{ fontSize: "14px", ml: 1 }}>
              <a href="mailto:contact@firma.ro" target="_blank" rel="noopener norefferer">contact@firma.ro</a>
            </Typography>
          </Box>
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
              color: location.pathname === "/" ? "white" : "inherit",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            sx={{
              color: location.pathname === "/services" ? "white" : "inherit",
              fontWeight: location.pathname === "/services" ? "bold" : "normal",
            }}
            component={Link}
            to="/services"
          >
            Services
          </Button>
          <Button
            sx={{
              color: location.pathname === "/portfolio" ? "white" : "inherit",
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
              color: location.pathname === "/about" ? "white" : "inherit",
              fontWeight: location.pathname === "/about" ? "bold" : "normal",
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
