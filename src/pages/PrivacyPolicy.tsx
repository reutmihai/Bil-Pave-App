import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          py: {xs: 2, sm: 5},
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            my: { xs: 4, sm: 3, md: 5 },
            textAlign: "center",
          }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="body1">
          Effective Date:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
        <Typography variant="body1">
          {" "}
          This Privacy Policy describes how we collect, use, and protect your
          personal data when you visit or interact with our website
          BPS-PAVING.COM
        </Typography>

        <Typography variant="h5">1. Information We Collect</Typography>
        <Typography variant="body1">
          We may collect personal information, including but not limited to:
        </Typography>
        <List sx={{padding: "0"}}>
          <ListItem>
            <Typography variant="body1"> Name</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Email address</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Phone number</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">IP address</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Location data</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Device Information</Typography>
          </ListItem>
        </List>

        <Typography variant="h5">2. How We Use Your Information</Typography>
        <Typography variant="body1">
          We use your personal information to:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">Respond to inquiries</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Process your requests</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">Improve our services</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Send you updates, promotional materials, or newsletters (if you
              opt-in)
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h5">3. Sharing Your Information</Typography>
        <Typography variant="body1">
          We do not sell, trade, or rent your personal information. However, we
          may share your information with trusted third parties for the purpose
          of providing services (e.g., hosting, analytics).
        </Typography>

        <Typography variant="h5">4. Cookies</Typography>
        <Typography variant="body1">
          Our website uses cookies to enhance your browsing experience. You may
          choose to disable cookies in your browser settings.
        </Typography>

        <Typography variant="h5">5. Data Security</Typography>
        <Typography variant="body1">
          We take reasonable measures to protect your personal data from
          unauthorized access, disclosure, or destruction. However, no method of
          transmission over the Internet is 100% secure.
        </Typography>

        <Typography variant="h5">6. Your Rights</Typography>
        <Typography variant="body1">
          You have the right to access, correct, or delete your personal data at
          any time. To exercise these rights, please contact us at
          bil.paving98@gmail.com
        </Typography>

        <Typography variant="h5">7. Changes to This Policy</Typography>
        <Typography variant="body1">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, with an updated effective date.
        </Typography>

        <Typography variant="h5">8. Contact Us</Typography>
        <Typography variant="body1">
          If you have any questions about this Privacy Policy, please contact us
          at: bil.paving98@gmail.com
        </Typography>
      </Box>
    </Container>
  );
};
