import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div className="text-center mt-4">
      </div>

      {/* Navigation Icons */}
      <Nav className="flex-column text-center mt-5">
        <Nav.Link href="#intro" style={iconLinkStyle}><FaHome size={28} /></Nav.Link>
        <Nav.Link href="#about" style={iconLinkStyle}><FaUser size={28} /></Nav.Link>
        <Nav.Link href="#skills" style={iconLinkStyle}><FaCode size={28} /></Nav.Link>
        <Nav.Link href="#portfolio" style={iconLinkStyle}><FaBriefcase size={28} /></Nav.Link>
        <Nav.Link href="#contact" style={iconLinkStyle}><FaEnvelope size={28} /></Nav.Link>
      </Nav>

    </div>
  );
};

// Sidebar Styles
const sidebarStyle = {
  position: 'fixed',
  left: '0',
  top: '20%',
  width: '4vw', 
  height: '60vh',
  backgroundColor: '#343a40',
  padding: '20px 0',
  color: 'white',
  borderRadius: '0 40px 40px 0', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Media Queries
if (window.innerWidth <= 768) {
  sidebarStyle.width = '100%';
  sidebarStyle.height = 'auto';
  sidebarStyle.top = '0';
  sidebarStyle.borderRadius = '0';
}

// Icon Link Styles
const iconLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '15px 0',
  display: 'block',
  fontSize: '28px',
};

export default Sidebar;
