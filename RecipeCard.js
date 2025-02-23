import React from 'react';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '300px',
  };

  return (
    <div style={cardStyle}>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
