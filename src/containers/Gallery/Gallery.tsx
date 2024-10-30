import React from "react";
import { Container, Typography } from "@mui/material";

const Gallery: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: "30px" }}>
        Gallery
      </Typography>
      <Typography style={{ marginTop: "20px" }}>
        Take a look at some of our recent work! Our team takes pride in
        transforming spaces into clean and inviting environments.
      </Typography>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://uborka-irkutsk.ru/wp-content/uploads/2015/11/kliningovye-uslugi.jpg"
          alt="Before"
          style={{
            width: "50%",
            height: "100%",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <img
          src="https://uborka-irkutsk.ru/wp-content/uploads/2015/11/clining.jpg"
          alt="After"
          style={{ width: "50%", height: "50%", borderRadius: "8px" }}
        />
      </div>
    </Container>
  );
};

export default Gallery;
