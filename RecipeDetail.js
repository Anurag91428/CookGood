import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  return (
    <div className="recipe-detail">
      {recipe ? (
        <>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default RecipeDetail;