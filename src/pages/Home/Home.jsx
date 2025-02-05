import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import pavaja from "../../assets/images/pave5.jpg";
import pavajb from "../../assets/images/pave6.jpg";
import pavajc from "../../assets/images/pave7.jpg";

export const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 5, sm: "100px", md: "120px" },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <Box
        sx={{
          mb: 4,
          border: "1px solid #000",
          p: 5,
          bgcolor: "rgb(0, 0, 0, 0.7)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          WELCOME TO <br />
          BILL-PAVE-SOLUTIONS!
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, my: 2 }}
        >
          “Viața e scurtă, dar amintirile trăiesc mai mult. O curte pavată
          devine locul momentelor care contează.”
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            // width: "50%"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "0.8rem", sm: "1rem" },
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
              fontSize: { xs: "0.8rem", sm: "1rem" },
              py: { xs: 1, sm: 1.5 },
            }}
            href="/portfolio"
          >
            See our portfolio
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxMidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          m: { xs: 8, sm: 0 },
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
              width: { xs: "100%", md: "300px" },
              maxWidth: "300px",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};
