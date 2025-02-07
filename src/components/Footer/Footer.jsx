import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Phone } from "@mui/icons-material";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.yellowTransparent",
        color: "black",
        py: 3,
        mt: 15,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column-reverse", gap: 2, maxWidth: "400px", justifyContent: "center", alignItems: "center" }}>    
        <Typography variant="body1" textAlign="center" fontSize={14}>
        "Over 10 years of hard work, hundreds of thousands of kilometers traveled, each step guided by
         your dreams. We have transformed desires into reality, and today we are here, ready to give soul 
         to your yard."
        </Typography>
        <Typography variant="h4">Bill-Pave-Solutions</Typography>
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
        </Box>
        <Box sx={{ display: "flex", gap: 2, fontSize: "20px",mt: { xs: 2, sm: 0 } }}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/services" color="inherit" underline="hover">
            Services
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Portfolio
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            About Us
          </Link>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 0 } }}>
          <IconButton color="inherit"  target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="inherit"  target="_blank">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" target="_blank">
            <Phone />
          </IconButton>
        </Box>
      </Container>

      <Typography variant="body1" align="center" fontWeight="600" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Bill-Pave-Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
