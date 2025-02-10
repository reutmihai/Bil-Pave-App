import React from "react";
import { Box, Typography, Rating, Container } from "@mui/material";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "John Doe",
    rating: 4,
    text: "Great service, my yard looks fantastic! Highly recommend!",
  },
  {
    name: "Jane Smith",
    rating: 5,
    text: "Amazing quality and attention to detail. Very happy with the result!",
  },
  {
    name: "Mark Johnson",
    rating: 3,
    text: "The service was good, but I expected the job to be done a bit faster.",
  },
  {
    name: "Emily Brown",
    rating: 5,
    text: "Incredible work! The team was professional and efficient.",
  },
  {
    name: "Chris Wilson",
    rating: 4,
    text: "Very satisfied with the results, would use their services again!",
  },
  {
    name: "Sophia Lee",
    rating: 5,
    text: "Exceptional quality, my patio looks amazing!",
  },
];

export const Reviews: React.FC = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "600px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        Customer Reviews
      </Typography>

      {/* Container cu scrollbar */}
      <Box
        sx={{
          maxHeight: "300px",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              padding: "10px",
              borderBottom:
                index !== reviews.length - 1 ? "1px solid #ccc" : "none",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {review.name}
            </Typography>
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              sx={{ mb: 1 }}
            />
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "{review.text}"
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
