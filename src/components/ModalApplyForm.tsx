import { useState } from "react";
import { Modal, Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import ApplyForm from "./ApplyForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "600px" },
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const ModalApplyForm = () => {
  const [open, setOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSuccess = () => {
    handleClose(); 
    setShowSuccessMessage(true); // Afișează mesajul de succes
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          width: { xs: "100%", sm: "auto" },
          fontSize: { xs: "0.5rem", md: "0.8rem" },
          py: { xs: 1, sm: 1.5 },
        }}
      >
        Work with us
      </Button>

      {/* Modalul */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="apply-form-modal"
        aria-describedby="form-submission-modal"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h2" color="text.primary">
            Work for us
          </Typography>
          <Typography variant="h6" sx={{ my: 2, mb: 5, color: "text.secondary" }}>
            Fill out the form to be contacted by our team
          </Typography>
          <ApplyForm onSuccess={handleSuccess} />
        </Box>
      </Modal>

      {/* Snackbar pentru mesajul de succes */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={() => setShowSuccessMessage(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccessMessage(false)}>
          Form submitted successfully! You will be contacted shortly.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ModalApplyForm;
