import Page from "./components/Page/Page.tsx";
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import About from './containers/About/About.tsx'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Pages
          </Typography>
          <Link to="/pages/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/pages/contacts" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Contacts</Button>
          </Link>
          <Link to="/pages/services" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Services</Button>
          </Link>
          <Link to="/pages/gallery" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Gallery</Button>
          </Link>
          <Link to="/pages/team" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Team</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/pages/:pageName" element={<Page />} />
        <Route path="/pages/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;