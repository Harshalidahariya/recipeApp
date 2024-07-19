import React, { useState, useEffect } from 'react';

const Chinese = () => {
  const [chineseMeals, setChineseMeals] = useState([]);

  useEffect(() => {
    const fetchChineseMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese');
      const data = await response.json();
      setChineseMeals(data.meals);
    };
    fetchChineseMeals();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chinese Meals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chineseMeals.map(meal => (
          <div key={meal.idMeal} className="meal-item border p-2 rounded shadow flex flex-col items-center">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded mb-2" />
            <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chinese;
