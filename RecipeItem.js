import React from "react";
import RecipeItem from "./RecipeItem"; // Import RecipeItem component

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;