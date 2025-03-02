import { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import ModalApplyForm from "./ModalApplyForm";
import ModalOfferRequest from "./ModalOfferRequest";
import { useTranslation } from "react-i18next";

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

interface SelectApplicationModalProps {
  buttonText: string;
  buttonStyle?: object;  // Pentru stiluri personalizate
}

const SelectApplicationModal: React.FC<SelectApplicationModalProps> = ({
  buttonText,
  buttonStyle = {},
}) => {
  const [open, setOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<"apply" | "quote" | null>(
    null
  );

  const handleClose = () => setOpen(false);
  const openApplyForm = () => {
    setSelectedModal("apply");
    handleClose();
  };
  const openQuoteForm = () => {
    setSelectedModal("quote");
    handleClose();
  };
  const { t } = useTranslation();

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          borderColor: "white",
          // width: { xs: "100%", md: "auto" },
          fontSize: { xs: "0.5rem", md: "0.8rem" },
          py: { xs: 0.2, md: 1 },
          ...buttonStyle, 
        }}
        onClick={() => setOpen(true)}
      >
        {buttonText}
      </Button>

      {/* Modalul pentru alegerea tipului de aplicare */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="select-application-modal"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t("form.apllyOption")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 2, width: "100%" }}
            onClick={openApplyForm}
          >
            {t("form.applyForJob")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            onClick={openQuoteForm}
          >
            {t("form.applyForService")}
          </Button>
        </Box>
      </Modal>

      {/* Modalele individuale */}
      {selectedModal === "apply" && (
        <ModalApplyForm open={true} onClose={() => setSelectedModal(null)} />
      )}
      {selectedModal === "quote" && (
        <ModalOfferRequest open={true} onClose={() => setSelectedModal(null)} />
      )}
    </Box>
  );
};

export default SelectApplicationModal;
