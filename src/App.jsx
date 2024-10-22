import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Header from './component/Structure/Header';
import MealSearch from './component/Structure/MealSearch';
import Diet from './component/HeadItems/ItemsWithoutIcon/Diet/Diet';
import Veg from './component/HeadItems/ItemsWithoutIcon/Veg/Veg';
import NonVeg from './component/NonVeg';
import Chinese from './component/HeadItems/ItemsWithoutIcon/Chinese/Chinese';
import Fries from './component/HeadItems/ItemsWithoutIcon/Fries/Fries';
import Sweets from './component/HeadItems/ItemsWithoutIcon/Sweet/Sweets';
import Footer from './component/Structure/Footer';
import RecipeSection from './component/Structure/RecipeSection';
import SamosaVarieties from './component/HeadItems/ItemsWithIcon/Samosa/SamosaVarieties';
import SamosaRecipe from './component/HeadItems/ItemsWithIcon/Samosa/SamosaRecipe';
import PulavVarieties from './component/HeadItems/ItemsWithIcon/Pulav/PulavVarieties';
import PulavRecipe from './component/HeadItems/ItemsWithIcon/Pulav/PulavRecipe';
import RasgullaRecipe from './component/HeadItems/ItemsWithIcon/RasGulla/RasgullaRecipe';
import Masala from './component/HeadItems/ItemsWithIcon/MasalaChai/Masala';
import MalaiKofta from './component/HeadItems/ItemsWithIcon/MalaiKofta/MalaiKofta';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const history = useHistory();

  const handleSectionClick = (section) => {
    // Toggle the section
    setActiveSection(activeSection === section ? null : section);
  };

  const handleImageClick = (category) => {
    const url = `/recipe-section?category=${category}`;
    history.push(url);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header className="bg-orange-300 p-4 text-white flex items-center justify-center">
          <img src="/images/logo.jpg" alt="Harsha's Kitchen Logo" className="h-16" />
        </Header>

        <div className="flex justify-around p-4">
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Diet')}>Diet</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Veg')}>Veg</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Chinese')}>Chinese</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Fries')}>Fries</button>
          <button className="btn px-4 py-2 bg-orange-500 text-white rounded-full" onClick={() => handleSectionClick('Sweets')}>Sweets</button>
        </div>

        {/* Icons Section below the buttons */}
        <div className="flex justify-around p-4">
          <div className="flex flex-col items-center">
            <Link to="/samosa-varieties" className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/samosa.jpg" alt="Samosa" className="w-full h-full object-cover" />
            </Link>
            <span className="mt-2 text-sm text-black">Samosa</span>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/masala" className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/masala-chai.jpg" alt="Masala Chai" className="w-full h-full object-cover" />
            </Link>
            <span className="mt-2 text-sm text-black">Masala Chai</span>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/pulav-varieties" className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/pulav.jpg" alt="Pulav" className="w-full h-full object-cover" />
            </Link>
            <span className="mt-2 text-sm text-black">Pulav</span>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/rasgulla-recipe" className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/rasgulla.jpg" alt="Rasgulla" className="w-full h -full object-cover" />
            </Link>
            <span className="mt-2 text-sm text-black">Rasgulla</span>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/malai-kofta" className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/images/malai-kofta.jpg" alt="Malai Kofta" className="w-full h-full object-cover" />
            </Link>
            <span className="mt-2 text-sm text-black">Malai Kofta</span>
          </div>
        </div>

        {/* Render the active section here, just after the icons */}
        <main className="flex-1 container mx-auto p-4 relative">
          {activeSection === 'Diet' && <Diet />}
          {activeSection === 'Veg' && <Veg />}
          {activeSection === 'NonVeg' && <NonVeg />}
          {activeSection === 'Chinese' && <Chinese />}
          {activeSection === 'Fries' && <Fries />}
          {activeSection === 'Sweets' && <Sweets />}
        </main>


        <Switch>
          <Route path="/samosa-varieties" component={SamosaVarieties} />
          <Route path="/samosa-recipe" component={SamosaRecipe} />
          <Route path="/pulav-varieties" component={PulavVarieties} />
          <Route path="/pulav-recipe" component={PulavRecipe} />
          <Route path="/rasgulla-recipe" component={RasgullaRecipe} />
          <Route path="/masala" component={Masala} />
          <Route path="/malai-kofta" component={MalaiKofta} />
          <Route path="/recipe-section" component={RecipeSection} />
        </Switch>

        <MealSearch />

        <Footer className="bg-gray-800 text-white p-4 text-center">
          <img src="/images/logo.jpg" alt="Harsha's Kitchen Logo" className="h-16" />
        </Footer>
        
      </div>
    </Router>
  );
};

export default App;

