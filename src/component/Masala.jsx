import React from 'react';

const Masala = () => {
  const recipe = `
    Ingredients:
    - 2 cups water
    - 1 cup milk
    - 2 tablespoons black tea leaves or 2 tea bags
    - 2-3 tablespoons sugar (or to taste)
    - 2-3 green cardamom pods
    - 1 small piece of ginger, grated
    - 1-2 cloves (optional)
    - 1 small cinnamon stick (optional)
    - A pinch of black pepper (optional)

    Instructions:
    1. In a saucepan, bring the water to a boil. Add the grated ginger, cardamom pods, cloves, cinnamon stick, and black pepper.
    2. Let the spices simmer in the boiling water for a few minutes until the water is fragrant.
    3. Add the tea leaves or tea bags and simmer for another 1-2 minutes.
    4. Add the milk and sugar to the pan and bring the mixture to a boil again.
    5. Once it starts boiling, reduce the heat and let it simmer for another 2-3 minutes.
    6. Strain the tea into cups using a fine mesh sieve and serve hot. Enjoy your Masala Chai!
  `;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Masala Chai Recipe</h2>
      <pre className="whitespace-pre-wrap">{recipe}</pre>
    </div>
  );
};

export default Masala;