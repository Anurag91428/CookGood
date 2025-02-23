import React from 'react';

const AboutPage = () => {
  const pageStyle = {
    backgroundImage: "url('about-bg.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '50px'
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    maxWidth: '800px'
  };

  const headingStyle = {
    fontSize: '48px',
    marginBottom: '20px'
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.6'
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>About Our Recipe Website</h1>
        <p style={textStyle}>
          Welcome to our recipe haven! We are passionate about sharing delightful and easy-to-follow recipes
          from around the world. Our mission is to bring the joy of cooking to every home with carefully curated
          dishes, step-by-step instructions, and mouth-watering inspirations. Whether you’re a seasoned chef or
          a beginner, you’ll find something here to spark your culinary creativity.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
