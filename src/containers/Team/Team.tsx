import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Team: React.FC = () => {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography gutterBottom>
        At Sparkle Cleaners, our team is our greatest asset. We are a group of
        skilled professionals who are passionate about cleaning.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <img
          src="https://media.istockphoto.com/id/1340226712/photo/successful-team.webp?s=2048x2048&w=is&k=20&c=oc_cfysAIXi-OmxGOn-Z1CoRNVd-ZPI2OVkbyuRBmFY="
          alt="Our Team"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
      <List>
        {[
          { name: "John Doe", role: "Founder & Head Cleaner" },
          { name: "Jane Smith", role: "Residential Cleaning Specialist" },
          { name: "Mike Johnson", role: "Commercial Cleaning Expert" },
          { name: "Sarah Brown", role: "Customer Relations Manager" },
        ].map((member, index) => (
          <ListItem key={index} sx={{ marginBottom: "10px" }}>
            <ListItemText
              primary={<strong>{member.name}</strong>}
              secondary={member.role}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Team;
