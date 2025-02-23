import React, { useState } from "react";

function AddRecipeForm({ onSubmit }) {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleChange}
        placeholder="Recipe Name"
        required
      />
      <textarea
        name="description"
        value={recipe.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <textarea
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <input
        type="url"
        name="image"
        value={recipe.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;