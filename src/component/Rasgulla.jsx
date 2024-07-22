import React from 'react';

const Rasgulla = () => {
  const recipe = "To prepare Rasgulla, start by boiling milk and curdling it with lemon juice to obtain chenna (paneer). Knead the chenna until it’s smooth, then shape it into small balls. Boil a sugar syrup made of water and sugar, and gently drop the chenna balls into the boiling syrup. Let them cook for about 15-20 minutes until they expand and soak in the syrup. Once done, cool the Rasgullas and refrigerate them for a few hours. Serve chilled, garnished with saffron strands or pistachio slivers for added flavor.";

  return (
    <div className="recipe-card p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold">Rasgulla</h2>
      <img src="/images/rasgulla.jpg" alt="Rasgulla" className="w-full h-64 object-cover mt-4" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Recipe:</h3>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default Rasgulla;
