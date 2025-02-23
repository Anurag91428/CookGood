import React from "react";
import AddRecipeForm from "../Components/AddRecipeForm";

function AddRecipe() {
  const handleAddRecipe = (newRecipe) => {
    console.log("New Recipe Added:", newRecipe);
    // You would typically send this data to your backend here
  };

  return (
    <div className="add-recipe">
      <h1>Add a New Recipe</h1>
      <AddRecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
}

export default AddRecipe;