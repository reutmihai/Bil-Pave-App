import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function AboutUsCard() {
  return (
    <Card
      sx={{
        background: "rgb(196, 184, 184, 0.2)",
        border: "1px solid white",
        display: "flex",
        alignItems: "center",
        maxWidth: 500,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        marginTop: 12,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {/* Imaginea de profil */}
      <CardMedia
        component="img"
        image="images/about/profile_card.jpg"
        alt="Administrator"
        sx={{ width: 80, height: 80, borderRadius: "50%", mr: 2 }}
      />

      {/* Conținutul cardului */}
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Typography variant="h5">Belibou Sebastian-Alexandru</Typography>
        <Typography variant="body1">
          With over 10 years of experience in the construction industry, I am
          committed to quality and professionalism in every project.
        </Typography>
      </CardContent>
    </Card>
  );
}
