import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";

const SharedLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Box sx={{ mt: { xs: 10, md: 12 } }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default SharedLayout;
