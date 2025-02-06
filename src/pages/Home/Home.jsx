import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import pavaja from "../../assets/images/pave5.jpg";
import pavajb from "../../assets/images/pave6.jpg";
import pavajc from "../../assets/images/pave7.jpg";

export const Home = () => {
  return (
    <Container
      sx={{
        maxWidth: { xs: "100%", sm: "lg" },
        mt: { xs: 15, sm: "100px", md: "120px" },
        px: { xs: 2, sm: "auto" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mb: 4,
          border: "1px solid #000",
          p: {xs: 2, sm: 5},
          bgcolor: "rgb(0, 0, 0, 0.7)",
          maxWidth: {xs: "80%", sm: "50%"},
          mr: { xs: 0, sm: 10 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h3"
          sx={{textAlign: {sx: "center"}}}
        >
          WELCOME TO <br />
          BILL-PAVE-SOLUTIONS!
        </Typography>
        <Typography
          variant="body1"
          sx={{textAlign: {sx: "center"}}}
        >
          "Life is short, but memories last longer. A paved yard becomes the place of moments that matter."
        </Typography>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: {xs:"row", sm: "row"}, gap: 2, mt: 2 }}>
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
          // maxWidth: "200px",
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          gap: 3,
          justifyContent: "center",
          m: { xs: 4, sm: 0 },
        }}
      >
        {[pavaja, pavajb, pavajc].map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt="paving"
            sx={{
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "5px",
              width: { xs: "100%", md: "180px" },
              maxWidth: "180px",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};
