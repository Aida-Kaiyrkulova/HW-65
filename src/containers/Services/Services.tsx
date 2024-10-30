import React from "react";
import { Container, Typography } from "@mui/material";

const Services: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography>
        At Sparkle Cleaners, we offer a variety of cleaning services to meet
        your needs, including:
      </Typography>
      <ul>
        <li>
          <strong>Residential Cleaning</strong>: Comprehensive cleaning for your
          home, ensuring every corner shines.
        </li>
        <li>
          <strong>Commercial Cleaning</strong>: Professional cleaning solutions
          for offices and businesses.
        </li>
        <li>
          <strong>Carpet Cleaning</strong>: Deep cleaning to remove stains and
          allergens from your carpets.
        </li>
        <li>
          <strong>Window Cleaning</strong>: Streak-free window cleaning for a
          crystal-clear view.
        </li>
        <li>
          <strong>Move-In/Move-Out Cleaning</strong>: Special cleaning services
          to help you transition to your new space.
        </li>
      </ul>
    </Container>
  );
};

export default Services;
