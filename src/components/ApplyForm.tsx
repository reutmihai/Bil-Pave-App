import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Button, TextField, Alert, Typography } from "@mui/material";

const ApplyForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    certifications: "",
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
        "template_itk4dqn",
        formData,
        "IjP23_ENq-2bJHoP5"
      )
      .then(() => {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          certifications: "",
          message: "",
        }); // Reset formular
        setTimeout(() => {
          setSuccess(false);
          onSuccess(); // Închide modalul după succes
        }, 2000);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      {success && (
        <Alert severity="success">
          Application sent successfully! You will be contacted shortly.
        </Alert>
      )}
      {error && (
        <Alert severity="error">Something went wrong. Please try again.</Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1" color="black">
            Fill out the form to apply for a job
          </Typography>

          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            type="tel"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Your Certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Why do you want to join our team?"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={5}
            required
          />
          <Box display="flex" alignItems="center" justifyContent="center">
            <input
              type="checkbox"
              id="privacy-agreement"
              name="privacy-agreement"
              required
            />
            <Typography variant="body1" sx={{ color: "black" }}>
              I agree to the Privacy Policy
            </Typography>
          </Box>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Application"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ApplyForm;
