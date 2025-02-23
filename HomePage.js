import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  console.log('HomePage is rendering');

  const pageStyle = {
    backgroundImage: "url('recipe.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const navbarStyle = {
    backgroundColor: 'rgba(14, 15, 15, 0.9)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px 25px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
  };

  const linkHoverStyle = {
    backgroundColor: '#4CAF50',
    borderRadius: '8px',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };
  const welcomeMessageStyle = {
    color : 'White',
    marginTop: '200px',
    fontSize: '55px',
    fontWeight: 'bold',
    textShadow: '2px 2px 10px rgba(255, 55, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const subMessageStyle = {
    fontSize: '35px',
    color : 'White',
    marginTop: '50px',
    textShadow: '1px 1px 5px rgb(0, 97, 252)'
  };
  return (
    <div style={pageStyle}>
      <div style={navbarStyle}>
      <Link to="Login.js" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Login</Link>
        <Link to="Register.js" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Register</Link>
        <Link to="RecipeCard.js" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Recipes</Link>
        <Link to="about.js" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</Link>
        <Link to= "contact.js" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</Link>
      </div>
      <div><center>
        <h1 style={welcomeMessageStyle}>Welcome to CookGood</h1>
        <p style={subMessageStyle}>"Spreading Love, One Delicious Bite at a Time!" </p>
        </center>
      </div>
    </div>
  );
};

export default HomePage;
