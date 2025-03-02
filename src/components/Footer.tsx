import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { WhatsApp, Phone, Email } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const links = [
    { to: "/", label: `${t("navigation.home")}` },
    { to: "/services", label: `${t("navigation.services")}` },
    { to: "/portfolio", label: `${t("navigation.portfolio")}` },
    { to: "/about", label: `${t("navigation.about")}` },
    { to: "/privacy", label: `${t("navigation.privacyPolicy")}` },
  ];
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
            {t("footerDescription")}
          </Typography>
          <Typography variant="h4">Bil-Pave-Solutions</Typography>
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
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              component={RouterLink}
              to={link.to}
              color="inherit"
              underline="hover"
            >
              {link.label}
            </Link>
          ))}
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
