// SamosaVarieties.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

const samosaVarieties = [
  {
    name: 'Classic Potato Samosa',
    image: '/images/classic-potato-samosa.jpg',
    recipe: 'To make classic potato samosas, start by preparing the dough with 2 cups of all-purpose flour, 1/4 cup oil or ghee, a pinch of salt, and enough water to form a smooth, firm dough. Set it aside to rest. For the filling, sauté 1 teaspoon cumin seeds in oil, then add 1 teaspoon grated ginger and 1-2 finely chopped green chilies. Mix in 4-5 boiled and mashed potatoes, 1 cup boiled green peas, 1 teaspoon coriander powder, salt, and other spices as desired. Cook for a few minutes and let it cool. Roll out the dough into small circles, cut them in half, and form cones. Fill each cone with the potato mixture, seal the edges with water, and deep fry the samosas until golden brown. Enjoy hot with chutney or sauce.'
  },

  {
    name: 'Paneer Samosa',
    image: '/images/paneer-samosa.jpg',
    recipe: 'To make classic paneer samosas, prepare the dough by mixing 2 cups of all-purpose flour, 1/4 cup oil or ghee, a pinch of salt, and enough water to form a smooth, firm dough, then let it rest. For the filling, heat oil in a pan and sauté 1 teaspoon cumin seeds, 1 teaspoon grated ginger, and 1-2 finely chopped green chilies. Add 200 grams of crumbled paneer, 1/2 teaspoon garam masala, 1/2 teaspoon chaat masala, salt, and a handful of finely chopped coriander leaves. Cook for a few minutes and let it cool. Roll out the dough into small circles, cut them in half, and form cones. Fill each cone with the paneer mixture, seal the edges with water, and deep fry the samosas until golden brown. Serve hot with your favorite chutney.'
  },
  {
    name: 'Keema Samosa',
    image: '/images/keema-samosa.jpg',
    recipe: 'To make classic keema samosas, start by preparing the dough with 2 cups of all-purpose flour, 1/4 cup oil or ghee, a pinch of salt, and enough water to form a smooth, firm dough. Set it aside to rest. For the filling, heat oil in a pan and sauté 1 teaspoon cumin seeds, 1 finely chopped onion, and 1-2 finely chopped green chilies. Add 250 grams of minced meat (keema), 1 teaspoon ginger-garlic paste, 1/2 teaspoon turmeric powder, 1 teaspoon garam masala, 1 teaspoon coriander powder, salt, and a handful of chopped coriander leaves. Cook until the meat is browned and the mixture is dry, then let it cool. Roll out the dough into small circles, cut them in half, and form cones. Fill each cone with the keema mixture, seal the edges with water, and deep fry the samosas until golden brown. Serve hot with mint chutney or tamarind sauce.'
  },
  {
    name: 'Vegetable Samosa',
    image: '/images/vegetable-samosa.jpg',
    recipe: 'To make classic vegetable samosas, prepare the dough with 2 cups of all-purpose flour, 1/4 cup oil or ghee, a pinch of salt, and enough water to form a smooth, firm dough. Let it rest. For the filling, heat oil in a pan and sauté 1 teaspoon cumin seeds, 1 finely chopped onion, 1-2 finely chopped green chilies, and 1 teaspoon grated ginger. Add 2 cups mixed vegetables (like potatoes, carrots, peas, and beans), 1/2 teaspoon turmeric powder, 1 teaspoon garam masala, 1 teaspoon coriander powder, salt, and a handful of chopped coriander leaves. Cook until the vegetables are tender and the mixture is dry, then let it cool. Roll out the dough into small circles, cut them in half, and form cones. Fill each cone with the vegetable mixture, seal the edges with water, and deep fry the samosas until golden brown. Serve hot with mint chutney or tamarind sauce.'
  },
  {
    name: 'Cheese Samosa',
    image: '/images/cheese-samosa.jpg',
    recipe: 'To make classic cheese samosas, start by preparing the dough with 2 cups of all-purpose flour, 1/4 cup oil or ghee, a pinch of salt, and enough water to form a smooth, firm dough, then let it rest. For the filling, mix 1 cup grated cheese (cheddar or mozzarella), 1 finely chopped onion, 1-2 finely chopped green chilies, 1 teaspoon grated ginger, and a handful of chopped coriander leaves. Add a pinch of salt and 1/2 teaspoon chaat masala. Roll out the dough into small circles, cut them in half, and form cones. Fill each cone with the cheese mixture, seal the edges with water, and deep fry the samosas until golden brown. Serve hot with ketchup or your favorite dipping sauce.'
  }
];

const SamosaVarieties = () => {
  const history = useHistory();

  const handleCardClick = (recipe) => {
    history.push({
      pathname: '/samosa-recipe',
      state: { recipe }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Samosa Varieties</h2>
      <div className="grid grid-cols-3 gap-4">
        {samosaVarieties.map((samosa, index) => (
          <div key={index} className="border p-4 rounded shadow cursor-pointer" onClick={() => handleCardClick(samosa.recipe)}>
            <img src={samosa.image} alt={samosa.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{samosa.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamosaVarieties;
