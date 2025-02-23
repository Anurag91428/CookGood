import React from 'react';
import RecipeCard from './RecipeCard';

const recipes = [
  {
    id: 1,
    name: 'Puran Poli',
    description: 'Sweet flatbread stuffed with jaggery and lentils.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/puran-poli-recipe.jpg',
  },
  {
    id: 2,
    name: 'Misal Pav',
    description: 'Spicy curry made of sprouted moth beans served with pav.',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Misal_pav_recipe.jpg',
  },
  {
    id: 3,
    name: 'Vada Pav',
    description: 'Maharashtrian burger with spicy potato filling.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/vada-pav-recipe.jpg',
  },
  {
    id: 4,
    name: 'Bhakarwadi',
    description: 'Crispy, spicy, and sweet rolled snack.',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2019/08/bhakarwadi-recipe-1-500x500.jpg',
  },
  {
    id: 5,
    name: 'Sol Kadhi',
    description: 'Refreshing coconut and kokum drink.',
    image: 'https://www.cookingwithsiddhi.com/wp-content/uploads/2018/08/Sol-Kadhi-Recipe.jpg',
  },
  {
    id: 6,
    name: 'Appam with Stew',
    description: 'Soft rice hoppers served with coconut-based stew.',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhu/Vegetable_Ishtu_Kerala_Vegetable_Stew-3.jpg',
  },
  {
    id: 7,
    name: 'Kerala Parotta',
    description: 'Flaky and layered flatbread.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/kerala-parotta.jpg',
  }
];

const RecipeList = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
