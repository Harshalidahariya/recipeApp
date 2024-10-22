import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
const RecipeCard = ({ meal, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full h-3/4 overflow-y-auto">
        <button
          type="button"
          className="text-red-500 mb-4"
          onClick={onClose}
        >
          <FaWindowClose/>
        </button>
        <div className="bg-pink-200 p-4 rounded">
          <h2 className="text-2xl font-bold">{meal.strMeal}</h2>
          <p className="text-lg italic mb-4">{meal.strCategory}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Instructions:</h3>
            <p>{meal.strInstructions}</p>
          </div>
          <div className="mb-4">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded" />
          </div>
          <div>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Watch Video</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
