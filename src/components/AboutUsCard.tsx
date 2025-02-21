import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import profile_card from "../assets/images/about/profile_card.jpg";

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
        marginBottom: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: {xs: "none", sm:"scale(1.1)"},
        },
      }}
    >
      {/* Imaginea de profil */}
      <CardMedia
        component="img"
        image={profile_card}
        alt="Administrator"
        sx={{ width: 80, height: 80, borderRadius: "50%", mr: 2 }}
      />

      {/* Conținutul cardului */}
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Typography variant="h5">Belibou Sebastian-Alexandru</Typography>
        <Typography variant="body1">
        Wherever your dreams take you, we will pave the way, laying each stone like a red carpet where your memories will take shape.<br />
        I am the founder of <b>BPS</b>, and I believe in the future we build together.
        </Typography>
      </CardContent>
    </Card>
  );
}
