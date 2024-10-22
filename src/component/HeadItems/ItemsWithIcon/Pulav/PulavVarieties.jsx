import React from 'react';
import { useHistory } from 'react-router-dom';

const pulavVarieties = [
  {
    name: 'Vegetable Pulav',
    image: '/images/vegetable-pulav.jpg',
    recipe: 'To make vegetable pulav, start by rinsing 1 cup of basmati rice and soaking it for 30 minutes. Heat oil in a pan, add whole spices like bay leaf, cloves, and cinnamon, and sauté. Add 1 chopped onion, 1 teaspoon ginger-garlic paste, and sauté until golden. Add 1 cup mixed vegetables, 1/2 teaspoon turmeric, 1 teaspoon garam masala, and salt to taste. Cook for a few minutes. Add soaked rice, 2 cups water, and cook covered until rice is done. Garnish with chopped coriander leaves and serve hot.'
  },
  {
    name: 'Paneer Pulav',
    image: '/images/paneer-pulav.jpg',
    recipe: 'To make paneer pulav, rinse 1 cup basmati rice and soak for 30 minutes. Heat oil in a pan, add whole spices like bay leaf, cloves, and cinnamon, and sauté. Add 1 chopped onion, 1 teaspoon ginger-garlic paste, and sauté until golden. Add 1 cup cubed paneer, 1/2 teaspoon turmeric, 1 teaspoon garam masala, and salt to taste. Cook for a few minutes. Add soaked rice, 2 cups water, and cook covered until rice is done. Garnish with chopped coriander leaves and serve hot.'
  },
  {
    name: 'Chicken Pulav',
    image: '/images/chicken-pulav.jpg',
    recipe: 'To make chicken pulav, rinse 1 cup basmati rice and soak for 30 minutes. Marinate 250 grams of chicken pieces with 1 teaspoon ginger-garlic paste, 1 teaspoon turmeric, and salt. Heat oil in a pan, add whole spices like bay leaf, cloves, and cinnamon, and sauté. Add 1 chopped onion, and sauté until golden. Add marinated chicken, cook until browned. Add soaked rice, 2 cups water, and cook covered until rice and chicken are done. Garnish with chopped coriander leaves and serve hot.'
  },
  {
    name: 'Mushroom Pulav',
    image: '/images/mushroom-pulav.jpg',
    recipe: 'To make mushroom pulav, rinse 1 cup basmati rice and soak for 30 minutes. Heat oil in a pan, add whole spices like bay leaf, cloves, and cinnamon, and sauté. Add 1 chopped onion, 1 teaspoon ginger-garlic paste, and sauté until golden. Add 1 cup sliced mushrooms, 1/2 teaspoon turmeric, 1 teaspoon garam masala, and salt to taste. Cook for a few minutes. Add soaked rice, 2 cups water, and cook covered until rice is done. Garnish with chopped coriander leaves and serve hot.'
  },
  {
    name: 'Mutton Pulav',
    image: '/images/mutton-pulav.jpg',
    recipe: 'To make mutton pulav, rinse 1 cup basmati rice and soak for 30 minutes. Marinate 250 grams of mutton pieces with 1 teaspoon ginger-garlic paste, 1 teaspoon turmeric, and salt. Heat oil in a pan, add whole spices like bay leaf, cloves, and cinnamon, and sauté. Add 1 chopped onion, and sauté until golden. Add marinated mutton, cook until browned. Add soaked rice, 2 cups water, and cook covered until rice and mutton are done. Garnish with chopped coriander leaves and serve hot.'
  }
];

const PulavVarieties = () => {
  const history = useHistory();

  const handleCardClick = (recipe) => {
    history.push({
      pathname: '/pulav-recipe',
      state: { recipe }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Pulav Varieties</h2>
      <div className="grid grid-cols-3 gap-4">
        {pulavVarieties.map((pulav, index) => (
          <div key={index} className="border p-4 rounded shadow cursor-pointer" onClick={() => handleCardClick(pulav.recipe)}>
            <img src={pulav.image} alt={pulav.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{pulav.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PulavVarieties;
