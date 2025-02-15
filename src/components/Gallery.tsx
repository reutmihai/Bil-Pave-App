import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import { Project } from "../api/api"; 

// URL-ul de bază pentru imagini din Strapi
const BASE_URL = "http://localhost:1337";

const Gallery: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.id}>
          <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
            {project.country}
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {project.image.map((img) => {
              // Alegem formatul cel mai bun pentru afișare
              const imageUrl = img.formats.medium?.url || img.formats.small?.url || img.url;
              return (
                <Grid item key={img.id}>
                  <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`${BASE_URL}${imageUrl}`}
                      alt={img.name}
                      sx={{ objectFit: "cover" }}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;


