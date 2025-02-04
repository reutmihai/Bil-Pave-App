import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "../icons/EmailIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";

export const Navigation = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "primary.yellowTransparent",
          mt: {xs: "13px", sm:"20px", md:"35px"},
          maxHeight: "60px",
          zIndex: 1200,
        }}
      >
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
            {/* <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 600, ml: 1 }}
            >
              CONTACTS
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
              <Typography variant="body1" sx={{ display: {xs: "none", sm: "none", md: "inherit"} }}>
                <a
                  href="https:///wa.me/+0747605936"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  0747605936
                </a>
              </Typography>
            </Box>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon sx={{ pt: 2 }} />
            <Typography variant="body1" sx={{ display: {xs: "none", sm: "none", md: "inherit"} }}>
              <a href="mailto:contact@firma.ro" target="_blank" rel="noopener norefferer">contact@firma.ro</a>
            </Typography>
          </Box>
          </Box>

          {/* Logo */}
          <Box display="flex" alignItems="center" gap={2}>
            <Link to="/">
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  height: { xs: "90px", sm: "100px", md: "130px" },
                  width: "auto",
                  transition: "all 0.3s ease",
                  pt: { xs: "5px", sm: "0px" },
                }}
              />
            </Link>
          </Box>

          {/* Mobile navigation */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: {sm: "3px", md: 3},
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: location.pathname === item.path ? "white" : "inherit",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  fontSize: { xs: "10px", md: "14px"},
                }}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
          }}
        >
          {/* Meniu pentru mobil */}
          {menuItems.map((item) => (
            <Button
              key={item.label}
              sx={{
                color: location.pathname === item.path ? "white" : "inherit",
              }}
              component={Link}
              to={item.path}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};
