import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardRecipe from './CardRecipe';

const RecipeSection = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`);
        const data = await response.json();
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">{category} Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <CardRecipe key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p className="text-gray-700">No recipes found for {category}.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSection;
