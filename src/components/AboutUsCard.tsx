import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import profile_card from "../assets/images/about/profile_card.jpg";
import { useTranslation } from "react-i18next";

const GOLD = "rgba(229, 192, 32, 1)";

export default function AboutUsCard() {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: 3, sm: 4 },
        maxWidth: 820,
        width: "100%",
        p: { xs: 3, sm: 4 },
        mb: 5,
        borderRadius: 4,
        overflow: "visible",
        background:
          "linear-gradient(135deg, rgba(20, 20, 20, 0.75) 0%, rgba(60, 50, 30, 0.55) 100%)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(229, 192, 32, 0.35)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
          transform: { xs: "none", sm: "translateY(-6px)" },
          boxShadow: "0 28px 60px rgba(0, 0, 0, 0.55)",
        },
      }}
    >
      {/* Imaginea de profil */}
      <Box
        sx={{
          flexShrink: 0,
          p: "4px",
          borderRadius: 3,
          background: `linear-gradient(160deg, ${GOLD} 0%, rgba(120, 30, 30, 0.9) 100%)`,
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
          transform: { xs: "none", sm: "rotate(-2deg)" },
        }}
      >
        <CardMedia
          component="img"
          image={profile_card}
          alt="Belibou Sebastian-Alexandru - fondator BPS"
          loading="lazy"
          sx={{
            display: "block",
            width: { xs: 220, sm: 240 },
            height: { xs: 290, sm: 320 },
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: 2.5,
          }}
        />
      </Box>

      {/* Conținutul cardului */}
      <CardContent
        sx={{
          flex: 1,
          p: 0,
          "&:last-child": { pb: 0 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: GOLD, letterSpacing: 3, fontWeight: 700 }}
        >
          BPS Construction Paving
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Belibou Sebastian-Alexandru
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            borderRadius: 2,
            bgcolor: GOLD,
            mx: { xs: "auto", sm: 0 },
            mb: 3.5,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            position: "relative",
            fontStyle: "italic",
            lineHeight: 1.8,
            opacity: 0.95,
            "&::before": {
              content: '"\\201C"',
              position: "absolute",
              top: -22,
              left: { xs: "50%", sm: -8 },
              transform: { xs: "translateX(-50%)", sm: "none" },
              fontSize: "4rem",
              lineHeight: 1,
              color: GOLD,
              opacity: 0.25,
              fontFamily: "Georgia, serif",
            },
          }}
        >
          {t("cardDescription")}
        </Typography>
      </CardContent>
    </Card>
  );
}
