
/*
  File: Layout
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jfif';

export default function Layout() {
    // <!-- css styles for header-->
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  };
/* Main Content Styles */
  const navStyles = {
    display: 'flex',
    gap: '10px',
    marginBottom: '1px',
  };
/* Main Content Styles */
  const logoStyles = {
    borderRadius: '50%',
    marginRight: '1px',
  };
/* Main Content Styles */
  const whiteLinkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <>
    {/* // <!-- css styles for header--> */}
      <div style={headerStyles}>
        <div>
          <img src={logo} alt="logo" className="logo" style={logoStyles} width="150" height="150px" />
          <h1>Obi's Portfolio</h1>
        </div>

        <nav style={navStyles}>
          <Link to="/" style={whiteLinkStyles}>Home</Link>
          <Link to="/AboutMe" style={whiteLinkStyles}>AboutMe</Link>
          <Link to="/Services" style={whiteLinkStyles}>Services</Link>
          <Link to="/project" style={whiteLinkStyles}>Project</Link>
          <Link to="/contactMe" style={whiteLinkStyles}>ContactMe</Link>
        </nav>
      </div>

      <br />
      <hr />
    </>
  );
}
