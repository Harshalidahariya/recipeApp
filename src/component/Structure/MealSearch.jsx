import React, { useState, useEffect } from 'react';
import { FaWindowClose} from 'react-icons/fa';

const MealSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (selectedMeal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedMeal]);

  const getMealList = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    if (data.meals) {
      setMeals(data.meals);
      setShowMessage(false);
    } else {
      setMeals([]);
      setShowMessage(true);
    }
  };

  const getMealRecipe = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    if (data.meals) {
      setSelectedMeal(data.meals[0]);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 h-max">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="text-2xl font-bold mb-2">Get Dishes for your Recipe's</h2>
          <blockquote className="italic mb-4">Cooking is like love. It should be entered into with abandon or not at all.<br /><cite>- Harriet van Horne</cite></blockquote>

          <div className="meal-search-box flex items-center">
            <input 
              type="text" 
              className="search-control p-2 border border-gray-400 rounded mr-2"
              placeholder="Enter a dish name" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button 
              type="submit" 
              className="search-btn bg-blue-500 text-white p-2 rounded" 
              onClick={getMealList}
            >
              <i className="fas fa-search"></i> Search
            </button>
          </div>
        </div>

        <div className="meal-result mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Search Results:</h2>
          <div id="meal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.length ? meals.map(meal => (
              <div key={meal.idMeal} className="meal-item border p-2 rounded shadow flex flex-col items-center">
                <div className="meal-img mb-2">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded" />
                </div>
                <div className="meal-name text-center w-full">
                  <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                  <button 
                    className="recipe-btn bg-green-500 text-white p-1 mt-2 rounded" 
                    onClick={() => getMealRecipe(meal.idMeal)}
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            )) : showMessage && <p className="text-red-500">Sorry, we didn't find any meal!</p>}
          </div>
        </div>
      </div>

      {selectedMeal && (
        //  Dialogue Box
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full h-3/4 overflow-y-auto">
            <button 
              type="button" 
              className="text-red-500 mb-4" 
              onClick={() => setSelectedMeal(null)}
            >
              <FaWindowClose/>
            </button>
            <div className="meal-details-content bg-pink-200 p-4 rounded">
              <h2 className="recipe-title text-2xl font-bold">{selectedMeal.strMeal}</h2>
              <p className="recipe-category text-lg italic mb-4">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct mb-4">
                <h3 className="text-lg font-semibold">Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img mb-4">
                <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-auto rounded" />
              </div>
              <div className="recipe-link">
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Watch Video</a>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default MealSearch;

