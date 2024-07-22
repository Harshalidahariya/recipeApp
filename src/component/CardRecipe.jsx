import React from 'react';

const CardRecipe = ({ recipe }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.strMeal}</h2>
        <p className="text-gray-700">{recipe.strInstructions.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default CardRecipe;
