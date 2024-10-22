import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-11/12 max-w-lg">
        <button className="mb-2 text-red-500" onClick={onClose}>Close</button>
        <h2 className="text-2xl mb-4">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full mb-4" />
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeModal;
