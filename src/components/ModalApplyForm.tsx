import { Modal, Box, Typography } from "@mui/material";
import ApplyForm from "./ApplyForm";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "600px" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
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
