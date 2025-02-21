import { Modal, Box, Typography } from "@mui/material";
import ApplyForm from "./ApplyForm";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "70%", md: "600px" }, // Responsive width
  maxHeight: "90vh", // Setează o înălțime maximă pentru a nu depăși viewport-ul
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: {xs: 2, sm: 4},
  overflowY: "auto", // Permite scroll în cazul în care formularul este prea înalt
};

const ModalApplyForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="apply-form-modal">
      <Box sx={modalStyle}>
        <Typography variant="h5" sx={{ mb: 2, color: "black" }}>
          Work with us
        </Typography>
        <ApplyForm onSuccess={onClose} />
      </Box>
    </Modal>
  );
};

export default ModalApplyForm;
