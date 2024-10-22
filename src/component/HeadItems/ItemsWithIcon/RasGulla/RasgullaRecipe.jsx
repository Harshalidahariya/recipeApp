import React from 'react';

const RasgullaRecipe = () => {
  const recipe = `
    Ingredients:
    - 1 liter full cream milk
    - 1 cup sugar
    - 2-3 cups water
    - 2 tablespoons lemon juice
    - 1 teaspoon cardamom powder
    - A few saffron strands (optional)

    Instructions:
    1. Boil the milk in a pan. Once it comes to a boil, add the lemon juice and stir gently until the milk curdles.
    2. Strain the curdled milk through a muslin cloth to separate the whey from the chenna (paneer).
    3. Wash the chenna under running water to remove the lemon juice's sourness. Squeeze out the excess water and hang the cloth for about 30 minutes to drain completely.
    4. Knead the chenna until it becomes smooth and soft. Divide it into small equal-sized balls.
    5. In a separate pot, combine the sugar and water and bring to a boil to make a sugar syrup.
    6. Gently drop the chenna balls into the boiling sugar syrup and cover the pot. Cook on medium heat for about 15-20 minutes until the rasgullas double in size.
    7. Add cardamom powder and saffron strands (if using) to the syrup and let it cool.
    8. Refrigerate the rasgullas in the syrup for a few hours before serving. Enjoy your homemade Rasgullas!
  `;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Rasgulla Recipe</h2>
      <pre className="whitespace-pre-wrap">{recipe}</pre>
    </div>
  );
};

export default RasgullaRecipe;