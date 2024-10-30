import React, { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const Admin: React.FC = () => {
  const [pageName, setPageName] = useState("about");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axiosApi.get(`/pages/${pageName}.json`);
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchPageData();
  }, [pageName]);

  const handleSave = async () => {
    try {
      await axiosApi.put(`/pages/${pageName}.json`, { title, content });
      navigate(`/pages/${pageName}`);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h2>Edit Page</h2>
      <FormControl fullWidth margin="normal">
        <InputLabel>Page</InputLabel>
        <Select
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
          variant="outlined"
        >
          <MenuItem value="about">About</MenuItem>
          <MenuItem value="contacts">Contacts</MenuItem>
          <MenuItem value="services">Services</MenuItem>
          <MenuItem value="gallery">Gallery</MenuItem>
          <MenuItem value="team">Team</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default Admin;