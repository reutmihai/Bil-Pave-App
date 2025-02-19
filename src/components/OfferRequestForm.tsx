import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    emailjs
      .send("service_nf3d0xl", "template_hnyehpg", formData, "IjP23_ENq-2bJHoP5")
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", phone: "", location: "", serviceType: "", message: "" }); // Reset formular
          setTimeout(() => {
            setSuccess(false);
            onClose(); // Închide modalul după succes
          }, 2000);
        },
        () => {
          setError(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      {success && <Alert severity="success">Request sent successfully! You will be contacted shortly.</Alert>}
      {error && <Alert severity="error">Something went wrong. Please try again.</Alert>}

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1" color="black">
            Fill out the form to be contacted by our team
          </Typography>

          <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
          <TextField type="email" label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth required />
          <TextField type="tel" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} fullWidth required />
          <TextField label="Project Location" name="location" value={formData.location} onChange={handleChange} fullWidth required />
          <TextField label="Type of Service" name="serviceType" value={formData.serviceType} onChange={handleChange} fullWidth required />
          <TextField label="Additional Details" name="message" value={formData.message} onChange={handleChange} fullWidth multiline rows={4} />

          <Button variant="contained" type="submit" color="primary" disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OfferRequestForm;
