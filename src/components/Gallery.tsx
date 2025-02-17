import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";

// Base URL pentru Cloudflare R2
const BASE_URL = "https://pub-55b5041bb1d14e189dabddf69c760481.r2.dev";

// Structura de imagini pentru fiecare țară
const images = {
  Romania: Array.from({ length: 63 }, (_, index) => `romania/ro${index + 1}.webp`),
  Germany: Array.from({ length: 45 }, (_, index) => `germany/ger${index + 1}.webp`),
  Netherlands: Array.from({ length: 0 }, (_, index) => `netherlands/ne${index + 1}.webp`),
};
type Country = keyof typeof images;

interface GalleryProps {
  country: Country;
}

const Gallery: React.FC<GalleryProps> = ({ country }) => {
  return (
    <Grid container spacing={2} justifyContent="center" flexDirection="column" alignContent="center">
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        Projects in {country}
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {images[country].map((img, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={`${BASE_URL}/${img}`} // Se încarcă direct din Cloudflare R2
                alt={`Project ${index + 1}`}
                sx={{ maxHeight: "350px", width: "300px", maxWidth: "100%" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Gallery;
