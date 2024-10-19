import React from 'react';
import { useLocation } from 'react-router-dom';

const SamosaRecipe = () => {
  const location = useLocation();
  const { recipe } = location.state || { recipe: 'No recipe available' };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Samosa Recipe</h2>
      <pre className="whitespace-pre-wrap">{recipe}</pre>
    </div>
  );
};

export default SamosaRecipe;