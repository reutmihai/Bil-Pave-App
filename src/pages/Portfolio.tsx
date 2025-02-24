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

  const subtitleStyle = {
    margin: { xs: "10px 0px", sm: "30px 0px" },
  };

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
            Portfolios BPS - The Work Behind
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
            We build with passion, we deliver excellence! Every project tells a
            story. A story about dedicated work, about teams united by a common
            vision, about challenges turned into opportunities. Over the years,
            we have devoted our efforts and expertise to bringing impressive
            projects to life, collaborating with industry leaders. We have had
            the honor of working alongside renowned companies such as KWS Infra,
            Thannhauser, and Blue-3, contributing to the development of
            essential infrastructures—from highways and commercial spaces to
            large-scale projects for business giants. Each project is a
            testament to our professionalism, attention to detail, and
            commitment to excellence. Regardless of the location—Romania,
            Germany, or the Netherlands—our standards remain the same: quality,
            durability, and innovation. We invite you to explore our portfolio
            and become part of this success story.
          </Typography>

          <ProjectCard
            country="Romania"
            title="Projects in Romania"
            flag="🇷🇴"
            description="In Romania, we have focused on landscaping courtyards and alleys, transforming spaces into durable, functional, and aesthetic areas. Whether it's residential properties, company headquarters, or commercial spaces, each project reflects our attention to detail and the high-quality execution that defines us."
            onOpenGallery={openGallery}
          />
          <ProjectCard
            country="Germany"
            title="Projects in Germany"
            flag="🇩🇪"
            description="In Germany, we have had the honor of working with prestigious partners, contributing to the construction of essential infrastructures. Rigorous planning, precision, and adherence to the highest quality standards have guided us at every stage of these projects."
            onOpenGallery={openGallery}
          />
          <ProjectCard
            country="Netherlands"
            title="Projects in the Netherlands"
            flag="🇳🇱"
            description="In the Netherlands, we have had the opportunity to work on industrial-level projects, contributing to the infrastructure of state-of-the-art data centers."
            onOpenGallery={openGallery}
          />

          <Typography variant="body1" fontSize="20px">
            Each project is a reflection of our passion and determination. No
            matter the complexity of the work, we ensure that we deliver
            sustainable, innovative, and top-quality solutions. If you are
            interested in collaborating with us, don't hesitate to contact us.
            <br />
            <b>Together, we can build the future!</b>
          </Typography>
          <SelectApplicationModal
            buttonText="Apply for a Service"
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
