import { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import ModalApplyForm from "./ModalApplyForm";
import ModalOfferRequest from "./ModalOfferRequest";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "400px" },
  bgcolor: "transparent",
  backdropFilter: "blur(10px)",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const SelectApplicationModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<"apply" | "quote" | null>(null);

  const handleClose = () => setOpen(false);
  const openApplyForm = () => {
    setSelectedModal("apply");
    handleClose();
  };
  const openQuoteForm = () => {
    setSelectedModal("quote");
    handleClose();
  };

  return (
    <Box sx={{my: 5}}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: { xs: "100%", sm: "auto" },
          minWidth: "80px",
          fontSize: { xs: "0.5rem", md: "0.8rem" },
          py: { xs: 1, sm: 1.5 },
        }}
        onClick={() => setOpen(true)}
      >
        Apply for
      </Button>

      {/* Modalul pentru alegerea tipului de aplicare */}
      <Modal open={open} onClose={handleClose} aria-labelledby="select-application-modal">
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            What do you want to apply for?
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mb: 2, width: "100%" }} onClick={openApplyForm}>
            Apply for a Job
          </Button>
          <Button variant="contained" color="success" sx={{ width: "100%" }} onClick={openQuoteForm}>
            Request a Quote
          </Button>
        </Box>
      </Modal>

      {/* Modalele individuale */}
      {selectedModal === "apply" && <ModalApplyForm open={true} onClose={() => setSelectedModal(null)} />}
      {selectedModal === "quote" && <ModalOfferRequest open={true} onClose={() => setSelectedModal(null)} />}
    </Box>
  );
};

export default SelectApplicationModal;
