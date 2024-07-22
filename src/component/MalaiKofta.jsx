import React from 'react';

const MalaiKofta = () => {
  const recipe = `
    Ingredients:
    - For Koftas:
      - 2 cups boiled, mashed potatoes
      - 1 cup paneer (cottage cheese), grated
      - 1/4 cup mixed vegetables (carrots, peas, beans), finely chopped and boiled
      - 2 tbsp cornflour
      - 1 tsp garam masala
      - Salt to taste
      - Oil for frying
      
    - For Gravy:
      - 2 large onions, finely chopped
      - 2 large tomatoes, pureed
      - 1/4 cup cashew nuts, soaked and ground to a paste
      - 1/4 cup fresh cream
      - 1 tsp cumin seeds
      - 1 tbsp ginger-garlic paste
      - 1/2 tsp turmeric powder
      - 1 tsp red chili powder
      - 1 tsp coriander powder
      - 1 tsp garam masala
      - Salt to taste
      - 2 tbsp oil

    Instructions:
    1. In a mixing bowl, combine mashed potatoes, grated paneer, boiled vegetables, cornflour, garam masala, and salt. Mix well.
    2. Shape the mixture into small balls (koftas). Deep fry the koftas in hot oil until golden brown. Drain on paper towels.
    3. In a large pan, heat 2 tbsp of oil and add cumin seeds. When they start to splutter, add chopped onions and sauté until golden brown.
    4. Add ginger-garlic paste and sauté for another 2 minutes.
    5. Add turmeric powder, red chili powder, coriander powder, and salt. Mix well.
    6. Add tomato puree and cook until the oil starts to separate from the masala.
    7. Add cashew nut paste and cook for another 5 minutes.
    8. Add fresh cream and garam masala. Mix well and cook for a few more minutes.
    9. Add the fried koftas to the gravy just before serving. Garnish with coriander leaves. Serve hot with naan or rice. Enjoy your Malai Kofta!
  `;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Malai Kofta Recipe</h2>
      <pre className="whitespace-pre-wrap">{recipe}</pre>
    </div>
  );
};

export default MalaiKofta;
