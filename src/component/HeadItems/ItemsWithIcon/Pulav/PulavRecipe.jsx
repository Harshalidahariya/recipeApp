import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';

const PulavRecipe = () => {
  const location = useLocation();
  const { recipe } = location.state || { recipe: 'No recipe available' };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Pulav Recipe</h2>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full h-3/4 overflow-y-auto">
            <a
             className='text-red-500 px-2'
             href='/pulav-varieties'
            >
              <FaWindowClose/>
            </a>
            <div className="meal-details-content bg-pink-200 p-4 rounded">
              <div className="recipe-instruct mb-4">
                <h3 className="text-lg font-semibold">Instructions:</h3>
                <p>{recipe}</p>
              </div>
              <div className="recipe-meal-img mb-4">
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PulavRecipe;
