import { Box, Container, Typography } from "@mui/material";
import AboutUsCard from "../components/AboutUsCard";
import SelectApplicationModal from "../components/SelectAplicationModal";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ overflowX: "hidden", width: "100%", py: 5 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Helmet>
            <title>About Us - BPS Construction Paving</title>
            <meta
              name="description"
              content="Discover the story behind BPS Construction Paving. With over 10 years of experience, we are dedicated to transforming outdoor spaces with quality paving solutions."
            />
            <meta
              name="keywords"
              content="about BPS, paving experts, construction company, paving solutions, outdoor design"
            />
            <meta
              property="og:title"
              content="About Us - BPS Construction Paving"
            />
            <meta
              property="og:description"
              content="Discover the story behind BPS Construction Paving. With over 10 years of experience, we are dedicated to transforming outdoor spaces with quality paving solutions."
            />
            <meta property="og:image" content="about-us-image-url.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="About Us - BPS Construction Paving"
            />
            <meta
              name="twitter:description"
              content="Discover the story behind BPS Construction Paving. With over 10 years of experience, we are dedicated to transforming outdoor spaces with quality paving solutions."
            />
          </Helmet>

          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{
              my: { xs: 4, sm: 3, md: 5 },
            }}
          >
            {t("about.title")}
          </Typography>
          <AboutUsCard />
          <Typography variant="body1">{t("about.description1")}</Typography>
          <Typography variant="body1">{t("about.description2")}</Typography>

          <Typography variant="body1">{t("about.description3")}</Typography>
          <Typography variant="body1">{t("about.description4")}</Typography>

          <Typography variant="body1">{t("about.description5")}</Typography>

          <Typography variant="body1">{t("about.description6")}</Typography>

          <Typography variant="body1">{t("about.description7")}</Typography>

          <Typography variant="body1">{t("about.description8")}</Typography>

          <Typography variant="body1">{t("about.description9")}</Typography>

          <Typography variant="body1">{t("about.description10")}</Typography>

          <Typography variant="body1">{t("about.description11")}</Typography>

          <Typography variant="body1">{t("about.description12")}</Typography>
          <SelectApplicationModal
            buttonText={t("applyBtn")}
            buttonStyle={{
              position: "relative",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "12px 24px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
