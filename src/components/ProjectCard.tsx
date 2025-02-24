import { Box, Button, Typography } from "@mui/material";

type ProjectCountry = "Romania" | "Germany" | "Netherlands";

const cardStyle = {
  border: "1px solid white",
  padding: 2,
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.1)",
};

const ProjectCard: React.FC<{
  country: ProjectCountry;
  title: string;
  flag: string;
  description: string;
  onOpenGallery: (country: ProjectCountry) => void;
}> = ({ country, title, flag, description, onOpenGallery }) => (
  <Box sx={cardStyle}>
    <Typography
      variant="h5"
      sx={{ margin: { xs: "10px 0px", sm: "30px 0px" } }}
    >
      {title} {flag}
    </Typography>
    <Typography variant="body1">{description}</Typography>
    <Button
      sx={{ mt: 5, width: { xs: "100%", sm: "auto" } }}
      variant="contained"
      color="primary"
      onClick={() => onOpenGallery(country)}
    >
      See the projects
    </Button>
  </Box>
);

export default ProjectCard;
