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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactsIcon from "@mui/icons-material/Contacts";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";

interface MenuItemType {
  label: string;
  path: string;
}

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Starea pentru meniul de contact
  const [anchorElContact, setAnchorElContact] = useState<null | HTMLElement>(null);
  const handleOpenContactMenu = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorElContact(event.currentTarget);
  const handleCloseContactMenu = () => setAnchorElContact(null);

  // Starea pentru meniul de limbă
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
  const handleOpenLanguageMenu = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorElLanguage(event.currentTarget);
  const handleCloseLanguageMenu = () => setAnchorElLanguage(null);

  // Starea pentru drawer (meniul mobil)
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => setDrawerOpen(open);

  const menuItems: MenuItemType[] = [
    { label: t("navigation.home"), path: "/" },
    { label: t("navigation.services"), path: "/services" },
    { label: t("navigation.portfolio"), path: "/portfolio" },
    { label: t("navigation.about"), path: "/about" },
  ];

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "primary.main",
          mt: { xs: "23px", sm: "20px", md: "37px" },
          maxHeight: "60px",
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {/* Buton Contact */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <IconButton onClick={handleOpenContactMenu} color="inherit" aria-label="Contact Menu">
              <ContactsIcon />
            </IconButton>

            {/* Meniu Contact */}
            <Menu
              anchorEl={anchorElContact}
              open={Boolean(anchorElContact)}
              onClose={handleCloseContactMenu}
              sx={{
                mt: 1,
                "& .MuiPaper-root": { backgroundColor: "#333", color: "white" },
              }}
            >
              <MenuItem onClick={handleCloseContactMenu} sx={{ "&:hover": { backgroundColor: "#555" } }}>
                <EmailIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a href="mailto:bil.paving98@gmail.com" style={{ textDecoration: "none", color: "white" }}>
                    bil.paving98@gmail.com
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseContactMenu} sx={{ "&:hover": { backgroundColor: "#555" } }}>
                <WhatsAppIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a href="https://wa.me/40747605936" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                    0747605936
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseContactMenu} sx={{ "&:hover": { backgroundColor: "#555" } }}>
                <PhoneIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body1">
                  <a href="tel:+31687430616" style={{ textDecoration: "none", color: "white" }}>
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
                  height: { xs: "110px", sm: "120px", md: "130px" },
                  width: "auto",
                  transition: "all 0.3s ease",
                  pt: { xs: "5px", sm: "0px" },
                  border: "none",
                  boxShadow: "none",
                }}
              />
            </Link>
          </Box>

          {/* Selectare limbă */}
          <Box>
            <Button onClick={handleOpenLanguageMenu} color="inherit">
            {t("flag")} {i18n.language.toUpperCase()} ▼
            </Button>
            <Menu anchorEl={anchorElLanguage} open={Boolean(anchorElLanguage)} onClose={handleCloseLanguageMenu}>
            <MenuItem onClick={() => { i18n.changeLanguage("ro"); handleCloseLanguageMenu(); }}>
                🇷🇴 Romanian
              </MenuItem>
              <MenuItem onClick={() => { i18n.changeLanguage("en"); handleCloseLanguageMenu(); }}>
                🇬🇧 English
              </MenuItem>
              <MenuItem onClick={() => { i18n.changeLanguage("fr"); handleCloseLanguageMenu(); }}>
              🇫🇷 French
              </MenuItem>
              <MenuItem onClick={() => { i18n.changeLanguage("de"); handleCloseLanguageMenu(); }}>
               🇩🇪 German 
              </MenuItem>
              <MenuItem onClick={() => { i18n.changeLanguage("nl"); handleCloseLanguageMenu(); }}>
              🇳🇱 Dutch 
              </MenuItem>
            </Menu>
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
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", gap: { sm: "3px", md: 3 } }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: location.pathname === item.path ? "white" : "inherit",
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                  fontSize: { xs: "10px", md: "14px" },
                }}
                component={Link}
                to={item.path}
                onClick={() => toggleDrawer(false)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer pentru navigația mobilă */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: "auto", display: "flex", flexDirection: "column", gap: 2, p: 4 }}>
          {menuItems.map((item) => (
            <Button key={item.label} sx={{ color: location.pathname === item.path ? "white" : "inherit" }} component={Link} to={item.path} onClick={() => toggleDrawer(false)}>
              {item.label}
            </Button>
          ))}
        </Box>
        <Link to="/" onClick={() => toggleDrawer(false)}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  height:"180px",
                  width: "auto",
                  transition: "all 0.3s ease",
                  pt: { xs: "5px", sm: "0px" },
                  mt: { xs: "100px"},
                  border: "none",
                  boxShadow: "none",
                }}
              />
            </Link>
      </Drawer>
    </>
  );
};
