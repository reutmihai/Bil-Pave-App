import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Box,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactsIcon from "@mui/icons-material/Contacts";

interface MenuItemType {
  label: string;
  path: string;
}

export const Navigation: React.FC = () => {
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>): void =>
    setAnchorEl(event.currentTarget);
  const handleCloseMenu = (): void => setAnchorEl(null);
  const toggleDrawer = (open: boolean): void => {
    setDrawerOpen(open);
  };

  const menuItems: MenuItemType[] = [
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
          backgroundColor: "primary.main",
          mt: { xs: "13px", sm: "20px", md: "37px" },
          maxHeight: "60px",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* Buton Contact */}
            <IconButton
              onClick={handleOpenMenu}
              color="inherit"
              aria-label="Contact Menu"
            >
              <ContactsIcon />
            </IconButton>

            {/* Meniu Contact */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{
                mt: 1,
                "& .MuiPaper-root": {
                  backgroundColor: "#333",
                  color: "white",
                },
              }}
            >
              <MenuItem
                onClick={handleCloseMenu}
                sx={{ "&:hover": { backgroundColor: "#555" } }}
              >
                <EmailIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a
                    href="mailto:bil.paving98@gmail.com"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    bil.paving98@gmail.com
                  </a>
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseMenu}
                sx={{ "&:hover": { backgroundColor: "#555" } }}
              >
                <WhatsAppIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a
                    href="https://wa.me/40747605936"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    0747605936
                  </a>
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseMenu}
                sx={{ "&:hover": { backgroundColor: "#555" } }}
              >
                <PhoneIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a
                    href="tel:+31687430616"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    +31687430616
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
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
                  border: 'none',
                  boxShadow: "none",
                }}
              />
            </Link>
          </Box>

          {/* Navigație pentru mobil */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navigație pentru desktop */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: { sm: "3px", md: 3 },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: location.pathname === item.path ? "white" : "inherit",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  fontSize: { xs: "10px", md: "14px" },
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

      {/* Drawer pentru navigația mobilă */}
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
