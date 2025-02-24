import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { WhatsApp, Phone, Email } from "@mui/icons-material";
import logo from "../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "black",
        py: 3,
        mt: 5,
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
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            gap: 2,
            maxWidth: "400px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" textAlign="center" fontSize={14}>
            "Over 10 years of hard work, hundreds of thousands of kilometers
            traveled, each step guided by your dreams. We have transformed
            desires into reality, and today we are here, ready to give soul to
            your yard."
          </Typography>
          <Typography variant="h4">Bill-Pave-Solutions</Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Link href="/">
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  height: { xs: "90px", sm: "100px", md: "130px" },
                  width: "auto",
                  transition: "all 0.3s ease",
                  pt: { xs: "5px", sm: "0px" },
                  border: "none",
                  boxShadow: "none",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            fontSize: "16px",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Link component={RouterLink} to="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/services"
            color="inherit"
            underline="hover"
          >
            Services
          </Link>
          <Link
            component={RouterLink}
            to="/portfolio"
            color="inherit"
            underline="hover"
          >
            Portfolio
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            color="inherit"
            underline="hover"
          >
            About
          </Link>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 0 } }}>
          <Link color="inherit" href="https://wa.me/40747605936">
            <IconButton color="inherit">
              <WhatsApp />
            </IconButton>
          </Link>
          <Link color="inherit" href="mailto:bil.paving98@gmail.com">
            <IconButton color="inherit">
              <Email />
            </IconButton>
          </Link>
          <Link color="inherit" href="tel:+31687430616">
            <IconButton color="inherit">
              <Phone />
            </IconButton>
          </Link>
        </Box>
      </Container>

      <Typography
        variant="body1"
        align="center"
        fontWeight="600"
        sx={{ mt: 2 }}
      >
        © {new Date().getFullYear()} Bil-Pave-Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
