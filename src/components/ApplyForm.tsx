import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false); // Resetăm eroarea la fiecare trimitere

    emailjs
      .send("service_nf3d0xl", "template_itk4dqn", formData, "IjP23_ENq-2bJHoP5")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccess(true);
          onSuccess(); // Închide modalul după succes
        },
        (error) => {
          console.error("Error sending the email:", error.text);
          setError(true); // Dacă apare o eroare, o afișăm
        }
      );
  };

  return (
    <Box>
      {error && <Alert severity="error">Something went wrong. Please try again.</Alert>}
      
      <form onSubmit={handleSubmit}>
        <Box sx={{display:"flex", flexDirection:"column", gap: 2}}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          name="email"
          label="Email"
          onChange={handleChange}
          value={formData.email}
          fullWidth
          required
        />
        <TextField
          name="phone"
          label="Phone Number"
          onChange={handleChange}
          value={formData.phone}
          fullWidth
          required
        />
        <TextField
          name="certifications"
          label="Your Certifications"
          onChange={handleChange}
          value={formData.certifications}
          fullWidth
          required
        />
        <TextField
          name="message"
          label="The reason why I want to be part of your team"
          onChange={handleChange}
          value={formData.message}
          fullWidth
          multiline
          rows={5}
          required
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "0.7rem", md: "0.8rem" },
            py: { xs: 1, sm: 1.5 },
            mt: 2,
          }}
        >
          Send
        </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ApplyForm;
