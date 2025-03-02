import React, { useState } from "react";
import portfolio from "../assets/images/portfolio/portfolio.png";
import {
  Box,
  Container,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Gallery from "../components/Gallery";
import SelectApplicationModal from "../components/SelectAplicationModal";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const Portfolio: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    "Romania" | "Germany" | "Netherlands" | null
  >(null);

  type ProjectCountry = "Romania" | "Germany" | "Netherlands";

  // Deschide galeria pentru un proiect specific
  const openGallery = (country: ProjectCountry) => {
    setSelectedProject(country);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const { t } = useTranslation();

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            mt: { xs: 2, sm: "40px", md: "60px" },
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Helmet>
            <title>Portfolio - BPS Construction Projects</title>
            <meta
              name="description"
              content="Explore our portfolio of construction projects in Romania, Germany, and the Netherlands. Quality infrastructure solutions."
            />
            <meta name="robots" content="index, follow" />
            <meta
              property="og:title"
              content="Portfolio - BPS Construction Projects"
            />
            <meta
              property="og:description"
              content="Explore our portfolio of construction projects in Romania, Germany, and the Netherlands. Quality infrastructure solutions."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="link_to_image_for_social_sharing.jpg"
            />
          </Helmet>
          <Typography
            variant="h1"
            textAlign={"center"}
            marginTop={5}
            marginBottom={10}
            sx={{
              mb: { xs: 2, sm: 2, md: 5 },
            }}
          >
            {t("portfolio.title")}
          </Typography>
          <Box
            component="img"
            src={portfolio}
            alt="Portfolio showcasing construction projects"
            loading="lazy"
            sx={{
              width: { xs: "100%", sm: "100%", md: "600px" },
              height: { xs: "auto", sm: "100%", md: "300px" },
              maxWidth: "600px",
              maxHeight: "300px",
              marginBottom: "20px",
            }}
          />

          <Typography variant="body1">
            {t("portfolio.description1")}
          </Typography>
          <Typography variant="body1">
           {t("portfolio.description2")}
          </Typography>
          <Typography variant="body1">
           {t("portfolio.description3")}
          </Typography>
          <Typography variant="body1">
           {t("portfolio.description4")}
          </Typography>

          <ProjectCard
            country="Romania"
            title={t("portfolio.romania_title")}
            flag="🇷🇴"
            description={t("portfolio.romania_description")}
            onOpenGallery={openGallery}
          />
          <ProjectCard
            country="Germany"
            title={t("portfolio.germany_title")}
            flag="🇩🇪"
            description={t("portfolio.germany_description")}
            onOpenGallery={openGallery}
          />
          <ProjectCard
            country="Netherlands"
            title={t("portfolio.netherlands_title")}
            flag="🇳🇱"
            description={t("portfolio.netherlands_description")}
            onOpenGallery={openGallery}
          />

          <Typography variant="body1" fontSize="20px">
            {t("portfolio.text1")}
           </Typography>
           <Typography variant="body1" fontWeight="600" fontSize="24px">
            {t("portfolio.text2")}
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

      {/* Modalul pentru galerie */}
      <Dialog open={openDialog} onClose={closeDialog} maxWidth="md" fullWidth>
        <DialogContent>
          {/* Galerie cu pozele din România, Germania sau Olanda */}
          {selectedProject && <Gallery country={selectedProject} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
