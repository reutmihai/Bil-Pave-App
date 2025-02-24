import { Button, Typography, Box, Container } from "@mui/material";
import pav1 from "../assets/images/homepage/pav1.webp";
import pav2 from "../assets/images/homepage/pav2.webp";
import pav3 from "../assets/images/homepage/pav3.webp";
import pav4 from "../assets/images/homepage/pav4.webp";
import pav5 from "../assets/images/homepage/pav5.webp";
import pav6 from "../assets/images/homepage/pav6.webp";
import { useNavigate } from "react-router-dom";
import SelectApplicationModal from "../components/SelectAplicationModal";
import { Helmet } from "react-helmet-async";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: { sm: 2 },
          marginTop: {sm: 5},
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <Helmet>
          <title>Bil Pave Solutions (BPS) | Professional Paving Services</title>
          <meta
            name="description"
            content="High-quality paving solutions for your home or business. Explore our portfolio and get in touch!"
          />
        </Helmet>
        <Box
          sx={{
            mb: 4,
            border: "1px solid #000",
            p: { xs: 2, sm: 5 },
            bgcolor: "rgb(0, 0, 0, 0.4)",
            maxWidth: { xs: "80%", sm: "50%" },
            mr: { xs: 0, sm: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "10px",
            marginTop: { xs: 10, sm: 0 },
          }}
        >
          <Typography variant="h3" sx={{ textAlign: { xs: "center" } }}>
            WELCOME TO <br />
            BIL-PAVE-SOLUTIONS!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: { xs: "center" } }}>
            "Life is short, but memories last longer. A paved yard becomes the
            place for moments that matter."
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row" },
                gap: 2,
                mt: 2,
              }}
            >
              <SelectApplicationModal buttonText="Apply for" />

              <Button
                variant="contained"
                aria-label="View our paving portfolio"
                sx={{
                  borderColor: "white",
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "0.5rem", md: "0.8rem" },
                  py: { xs: 0.2, md: 1 },
                }}
                onClick={() => navigate("/portfolio")}
              >
                See portfolio
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            m: { xs: 4, sm: 0 },
          }}
        >
          {[pav1, pav2, pav3, pav4, pav5, pav6].map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Paving services example ${index + 1}`}
              loading="lazy"
              sx={{
                display: index >= 3 ? { xs: "none", sm: "block" } : "block",
                width: { xs: "100%", sm: "44%", md: "180px" },
                height: { xs: "auto", sm: "150px", md: "200px" },
                maxWidth: "180px",
                maxHeight: "200px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
