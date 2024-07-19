import React, { useState } from 'react';
import RecipeCard from './RecipeCard'; // Assuming you have a RecipeCard component

const Pulav = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Pulav');
      const data = await response.json();
      setRecipes(data.meals); // Assuming API response has 'meals' array containing recipe details
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchRecipes}>
        Show Pulav Recipes
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Pulav;
