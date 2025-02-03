import React, {useState} from "react";
import { AppBar, Toolbar, Typography, Button, Drawer, Box, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "../icons/EmailIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";
import MenuIcon from "@mui/icons-material/Menu";

export const Navigation = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false); 

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
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
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon sx={{ pt: 2 }} />
            <Typography variant="body1" sx={{ fontSize: "14px", ml: 1 }}>
              <a href="mailto:contact@firma.ro" target="_blank" rel="noopener norefferer">contact@firma.ro</a>
            </Typography>
          </Box> */}
        </Box>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Logo
        </Typography>

        {/* Mobile navigation */ }
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
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

     <Drawer
     anchor="right"
     open={drawerOpen}
     onClose={() => toggleDrawer(false)}
   >
     <Box sx={{ width: 250, display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
       {/* Meniu pentru mobil */}
       <Button
         sx={{ color: location.pathname === "/" ? "yellow" : "inherit" }}
         component={Link}
         to="/"
         onClick={() => toggleDrawer(false)}
       >
         Home
       </Button>
       <Button
         sx={{ color: location.pathname === "/services" ? "yellow" : "inherit" }}
         component={Link}
         to="/services"
         onClick={() => toggleDrawer(false)}
       >
         Services
       </Button>
       <Button
         sx={{ color: location.pathname === "/portfolio" ? "yellow" : "inherit" }}
         component={Link}
         to="/portfolio"
         onClick={() => toggleDrawer(false)}
       >
         Portfolio
       </Button>
       <Button
         sx={{ color: location.pathname === "/about" ? "yellow" : "inherit" }}
         component={Link}
         to="/about"
         onClick={() => toggleDrawer(false)}
       >
         About Us
       </Button>
     </Box>
   </Drawer>
   </>
  );
};
