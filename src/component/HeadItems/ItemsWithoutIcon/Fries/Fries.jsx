import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fries = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchFriesDishes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Side');
        setDishes(response.data.meals);
      } catch (error) {
        console.error('Error fetching fries dishes:', error);
      }
    };

    fetchFriesDishes();
  }, []);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg overflow-y-auto z-50">
      <h2 className="text-2xl font-bold p-4">Fries Dishes</h2>
      <ul className="p-4">
        {dishes.map(dish => (
          <li key={dish.idMeal} className="py-2 border-b">{dish.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fries;
