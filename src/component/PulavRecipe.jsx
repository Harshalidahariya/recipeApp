import React from 'react';
import { useLocation } from 'react-router-dom';

const PulavRecipe = () => {
  const location = useLocation();
  const { recipe } = location.state || { recipe: 'No recipe available' };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Pulav Recipe</h2>
      <pre className="whitespace-pre-wrap">{recipe}</pre>
    </div>
  );
};

export default PulavRecipe;
