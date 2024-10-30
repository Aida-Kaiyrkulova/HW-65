import Page from "./components/Page/Page.tsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import About from "./containers/About/About.tsx";
import Services from "./containers/Services/Services.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import Gallery from "./containers/Gallery/Gallery.tsx";
import Team from "./containers/Team/Team.tsx";
import Admin from "./components/Admin/Admin.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              My Pages
            </Link>
          </Typography>
          <Link to="/pages/about" style={{ textDecoration: "none" }}>
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/pages/contacts" style={{ textDecoration: "none" }}>
            <Button color="inherit">Contacts</Button>
          </Link>
          <Link to="/pages/services" style={{ textDecoration: "none" }}>
            <Button color="inherit">Services</Button>
          </Link>
          <Link to="/pages/gallery" style={{ textDecoration: "none" }}>
            <Button color="inherit">Gallery</Button>
          </Link>
          <Link to="/pages/team" style={{ textDecoration: "none" }}>
            <Button color="inherit">Team</Button>
          </Link>
          <Link to="/pages/admin" style={{ textDecoration: "none" }}>
            <Button color="inherit">Admin</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/pages/:pageName" element={<Page />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/services" element={<Services />} />
        <Route path="/pages/contacts" element={<Contacts />} />
        <Route path="/pages/gallery" element={<Gallery />} />
        <Route path="/pages/team" element={<Team />} />
        <Route path="/pages/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
