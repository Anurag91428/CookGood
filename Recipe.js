import React, { useState, useEffect } from "react";
import RecipeDetail from "../Components/RecipeDetail";

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from API or static data
    const fetchedRecipes = [
      {
        id: "1",
        name: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish",
        ingredients: "Spaghetti, Beef, Tomato Sauce, Garlic",
        image: "https://example.com/spaghetti.jpg",
      },
      // Add more recipes here
    ];
    setRecipes(fetchedRecipes);
  }, []);

  return (
    <div className="recipe">
      <RecipeDetail recipes={recipes} />
    </div>
  );
}

export default Recipe;