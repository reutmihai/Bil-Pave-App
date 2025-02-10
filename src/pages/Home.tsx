import { Button, Typography, Box, Container } from "@mui/material";
import pav1 from "../assets/images/homepage/pav1.webp";
import pav2 from "../assets/images/homepage/pav2.webp";
import pav3 from "../assets/images/homepage/pav3.webp";
import pav4 from "../assets/images/homepage/pav4.webp";
import pav5 from "../assets/images/homepage/pav5.webp";
import pav6 from "../assets/images/homepage/pav6.webp";
import { Reviews } from "../components/Reviews/Reviews";

export const Home: React.FC = () => {
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
          mt: { xs: 15, sm: "100px", md: "120px" },
          p: { xs: "auto", sm: 2 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
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
          }}
        >
          <Typography variant="h3" sx={{ textAlign: { xs: "center" } }}>
            WELCOME TO <br />
            BILL-PAVE-SOLUTIONS!
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
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "0.5rem", md: "0.8rem" },
                  py: { xs: 1, sm: 1.5 },
                }}
              >
                Click to aplly
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "0.5rem", md: "0.8rem" },
                  py: { xs: 0.5, sm: 1.5 },
                }}
                href="/portfolio"
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
              alt={`Paving example ${index + 1}`}
              sx={{
                display: index >= 3 ? { xs: "none", sm: "block" } : "block",
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "5px",
                width: { xs: "100%", sm: "44%", md: "180px" },
                height: { xs: "auto", sm: "150px", md: "200px" },
                maxWidth: "180px",
                maxHeight: "200px",
                boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <Reviews />
    </Container>
  );
};
