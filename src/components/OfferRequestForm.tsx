import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const OfferRequestForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    serviceType: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    emailjs
      .send(
        "service_nf3d0xl",
        "template_hnyehpg",
        formData,
        "IjP23_ENq-2bJHoP5"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            serviceType: "",
            message: "",
          }); // Reset formular
          setTimeout(() => {
            setSuccess(false);
            onClose(); 
          }, 2000);
        },
        () => {
          setError(true);
        }
      )
      .finally(() => setLoading(false));
  };
  const { t } = useTranslation();

  return (
    <Box>
      {success && (
        <Alert severity="success">
          {t("form.successMessage")}
        </Alert>
      )}
      {error && (
        <Alert severity="error">{t("form.errorMessage")}</Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1" color="black">
            {t("form.fillMessage")}
          </Typography>

          <TextField
            label={t('form.fullName')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            type="email"
            label={t('form.email')}
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            type="tel"
            label={t('form.phone')}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label={t('form.location')}
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label={t('form.typeOfService')}
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label={t('form.additionalInfo')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
          <Box display="flex" alignItems="center" justifyContent="center">
            <input
              type="checkbox"
              id="privacy-agreement"
              name="privacy-agreement"
              required
            />
            <Typography variant="body1" sx={{ color: "black" }}>
              {t("form.privacyAgreement")}
            </Typography>
          </Box>

          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={loading}
          >
            {loading ? "Sending..." : `${t('form.sendBtn')}`}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OfferRequestForm;
