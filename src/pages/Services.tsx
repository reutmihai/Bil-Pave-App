import { Box, Container, List, ListItem, Typography } from "@mui/material";

const commonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
};

export const Services: React.FC = () => {
  return (
    <Container
    maxWidth= "lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        px: {xs: 2, sm: 4},
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          mt: { xs: 10, sm: "80px", md: "100px" },
          px: { xs: 2, sm: 4 },
          gap: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Typography variant="h5">
          Serviciile Noastre - Știinta din Spatele unui Pavaj Perfect
        </Typography>
        <Typography variant="body1" pb={2}>
          La Bil Pave Solutions (BPS), nu ne limităm doar la montarea pavajului
          - construim fundații durabile. Pregătirea corectă a terenului este
          esențială pentru un pavaj rezistent și estetic. Mai jos detaliem
          procesul profesional pe care îl urmăm pentru a ne asigura că soluțiile
          noastre rămân stabile, chiar și in condiții meteo extreme.
        </Typography>

        <Box sx={commonStyles}>
        <picture>
          <source srcSet="images/services/picture1.webp" type="image/webp" />
          <img 
          src="images/services/picture1.jpg" 
          alt="Descriere imagine" 
          loading="lazy"
          style={{
            maxHeight: "400px", 
            height: "auto",
            maxWidth: "100%", 
            width: "100%", 
            objectFit: "contain",
            }}
            />
        </picture>
        </Box>
        <Typography variant="h5" gutterBottom>
        1. Pregătirea Terenului - Fundamentul Durabilității
      </Typography>
      <Typography variant="body1">
      Durabilitatea oricărui pavaj depinde de cât de bine este pregătit terenul de dedesubt. Acest proces include mai multe etape esențiale:
      </Typography>
      <Typography variant="body2">
      Excavarea și Stabilizarea Solului
      </Typography>
      <List sx={{ pl: 2, pr: 2, wordWrap: "break-word" }}>
        <ListItem>Primul pas este îndepărtarea stratului superior al solului, decopertarea si reprofilarea terenului prin excavare, 
          pentru a elimina materialele organice care pot intra în descompunere în timp, cauzând denivelări.</ListItem>
        <ListItem>Pentru curți și alei rezidențiale, săpăm de obicei la o adâncime de 40-50 cm, în funcție de tipul solului și de 
          încărcătura preconizată, iar in cazul lucrarilor desemnate circulatiei autovehiculelor cu tonaj ridicat, decopertarea poate ajunge la 100-120cm. </ListItem>
      <Box sx={commonStyles}>
      <picture>
          <source srcSet="images/services/picture2.webp" type="image/webp" />
          <img 
          src="images/services/picture2.jpg" 
          alt="Descriere imagine" 
          loading="lazy"
          style={{
            maxHeight: "400px", 
            height: "100%",
            maxWidth: "100%", 
            width: "auto%", 
            padding: "15px",
            }}
            />
        </picture>
        </Box>
        <ListItem>Pentru curți și alei rezidențiale, săpăm de obicei la o adâncime de 40-50 cm, în funcție de tipul solului și de 
          încărcătura preconizată, iar in cazul lucrarilor desemnate circulatiei autovehiculelor cu tonaj ridicat, decopertarea 
          poate ajunge la 100-120cm. </ListItem>
          </List>
      </Box>
    </Container>
  );
};
