import React from "react";
import { Container, Typography } from "@mui/material";

const Team: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography>
        At Sparkle Cleaners, our team is our greatest asset. We are a group of
        skilled professionals who are passionate about cleaning.
      </Typography>
      <div>
        <img
          src="https://media.istockphoto.com/id/1340226712/photo/successful-team.webp?s=2048x2048&w=is&k=20&c=oc_cfysAIXi-OmxGOn-Z1CoRNVd-ZPI2OVkbyuRBmFY="
          alt="Our Team"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <ul>
        <li>
          <strong>John Doe</strong> - Founder & Head Cleaner
        </li>
        <li>
          <strong>Jane Smith</strong> - Residential Cleaning Specialist
        </li>
        <li>
          <strong>Mike Johnson</strong> - Commercial Cleaning Expert
        </li>
        <li>
          <strong>Sarah Brown</strong> - Customer Relations Manager
        </li>
      </ul>
    </Container>
  );
};

export default Team;
