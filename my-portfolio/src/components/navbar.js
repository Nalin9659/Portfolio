import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const MyNavbar = ({ darkMode, setDarkMode }) => {
  return (
    <Navbar className={`py-3 ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className={darkMode ? "text-light" : "text-dark"}></Navbar.Brand>
        
        {/* Dark Mode Toggle Button */}
        <Button 
          variant={darkMode ? "light" : "dark"} 
          onClick={() => setDarkMode(!darkMode)}
          className="d-flex align-items-center"
        >
          {darkMode ? <FaSun color="orange" size={20} /> : <FaMoon color="white" size={20} />}
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
