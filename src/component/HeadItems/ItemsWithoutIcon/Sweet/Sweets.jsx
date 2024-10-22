import React, { useState, useEffect } from 'react';

const Sweets = () => {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    const fetchSweets = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
      const data = await response.json();
      setSweets(data.meals);
    };
    fetchSweets();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sweets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sweets.map(sweet => (
          <div key={sweet.idMeal} className="meal-item border p-2 rounded shadow flex flex-col items-center">
            <img src={sweets.strMealThumb} alt={sweets.strMeal} className="w-full h-auto rounded mb-2" />
            <h3 className="text-lg font-semibold">{sweets.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sweets;