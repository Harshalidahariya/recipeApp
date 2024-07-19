import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import MealSearch from './component/MealSearch';
import Diet from './component/Diet';
import Veg from './component/Veg';
import NonVeg from './component/NonVeg';
import Chinese from './component/Chinese';
import Fries from './component/Fries';
import Sweets from './component/Sweets';
import Footer from './component/Footer';
import RecipeSection from './component/RecipeSection';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header className="bg-orange-300 p-4 text-black">
          <h1 className="text-3xl font-bold">Harsha's Kitchen</h1>
        </Header>
        <div className="flex justify-around p-4">
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Diet')}>Diet</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Veg')}>Veg</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('NonVeg')}>Non-Veg</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Chinese')}>Chinese</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Fries')}>Fries</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Sweets')}>Sweets</button>
        </div>

        <div className="flex justify-around p-4 mt-4">
          <div className="flex flex-col items-center">
            <button onClick={() => handleSectionClick('Samosa')} className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/samosa.jpg" alt="Samosa" className="w-full h-full object-cover" />
            </button>
            <span className="mt-2 text-sm text-black">Samosa</span>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleSectionClick('Masala Chai')} className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/masala-chai.jpg" alt="Masala Chai" className="w-full h-full object-cover" />
            </button>
            <span className="mt-2 text-sm text-black">Masala Chai</span>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleSectionClick('Pulav')} className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/pulav.jpg" alt="Pulav" className="w-full h-full object-cover" />
            </button>
            <span className="mt-2 text-sm text-black">Pulav</span>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleSectionClick('Rasgulla')} className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/rasgulla.jpg" alt="Rasgulla" className="w-full h-full object-cover" />
            </button>
            <span className="mt-2 text-sm text-black">Rasgulla</span>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleSectionClick('Malai Kofta')} className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/malai-kofta.jpg" alt="Malai Kofta" className="w-full h-full object-cover" />
            </button>
            <span className="mt-2 text-sm text-black">Malai Kofta</span>
          </div>
        </div>

        <MealSearch />
        <main className="flex-1 container mx-auto p-4 relative">
          {activeSection === 'Diet' && <Diet />}
          {activeSection === 'Veg' && <Veg />}
          {activeSection === 'NonVeg' && <NonVeg />}
          {activeSection === 'Chinese' && <Chinese />}
          {activeSection === 'Fries' && <Fries />}
          {activeSection === 'Sweets' && <Sweets />}
          {['Samosa', 'Masala Chai', 'Pulav', 'Rasgulla', 'Malai Kofta'].includes(activeSection) && (
            <RecipeSection category={activeSection} />
          )}
        </main>
        <Footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 Harsha's Kitchen. All rights reserved.</p>
        </Footer>
      </div>
    </Router>
  );
};

export default App;
