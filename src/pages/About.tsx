import { Box, Container, Typography } from "@mui/material";
import AboutUsCard from "../components/AboutUsCard";
import SelectApplicationModal from "../components/SelectAplicationModal";
import { useTranslation } from "react-i18next";

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
          <Typography variant="body1">
            {t("about.description1")}
          </Typography>
          <Typography variant="body1">
            {t("about.description2")}
          </Typography>

          <Typography variant="body1">
            {t("about.description3")}
          </Typography>
          <Typography variant="body1">{t("about.description4")}</Typography>

          <Typography variant="body1">
            {t("about.description5")}
          </Typography>

          <Typography variant="body1">
            {t("about.description6")}
          </Typography>

          <Typography variant="body1">{t("about.description7")}</Typography>

          <Typography variant="body1">
            {t("about.description8")}
          </Typography>

          <Typography variant="body1">
            {t("about.description9")}
          </Typography>

          <Typography variant="body1">{t("about.description10")}</Typography>

          <Typography variant="body1">
            {t("about.description11")}
          </Typography>

          <Typography variant="body1">
            {t("about.description12")}
          </Typography>
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
