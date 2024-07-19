import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const Diet = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      const data = await response.json();
      setMeals(data.meals);
    };
    fetchMeals();
  }, []);

  const getMealRecipe = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    if (data.meals) {
      setSelectedMeal(data.meals[0]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Diet Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-item border p-2 rounded shadow flex flex-col items-center cursor-pointer"
            onClick={() => getMealRecipe(meal.idMeal)}>
            <div className="meal-name text-center w-full">
              <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedMeal && <RecipeCard meal={selectedMeal} onClose={() => setSelectedMeal(null)} />}
    </div>
  );
};

export default Diet;
