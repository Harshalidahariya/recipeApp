// import React, { useState } from 'react';

// const Header = () => {
//   const [showSeasons, setShowSeasons] = useState(false);

//   const toggleSeasons = () => {
//     setShowSeasons(!showSeasons);
//   };

//   return (
//     <header className="bg-gradient-to-r from-orange-400 to-orange-200 w-full p-4 shadow-md">
//       <nav className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-black">Harsha's Kitchen</h1>
//         <ul className="flex space-x-4">
//           <li><a href="#home" className="text-black hover:underline">Home</a></li>
//           <li><a href="#recipes" className="text-black hover:underline">Recipes</a></li>
//           <li><a href="#about" className="text-black hover:underline">About</a></li>
//           <li className="relative">
//             <button onClick={toggleSeasons} className="text-black hover:underline">
//               Seasonal
//             </button>
//             {showSeasons && (
//               <ul className="absolute mt-2 space-y-2 bg-white text-black p-2 rounded shadow">
//                 <li>Spring</li>
//                 <li>Summer</li>
//                 <li>Autumn</li>
//                 <li>Winter</li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showSeasons, setShowSeasons] = useState(false);

  const toggleSeasons = () => {
    setShowSeasons(!showSeasons);
  };

  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-200 w-full p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Harsha's Kitchen</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-black hover:underline">Home</a></li>
          <li><a href="#recipes" className="text-black hover:underline">Recipes</a></li>
          <li><a href="#about" className="text-black hover:underline">About</a></li>
          <li className="relative">
            <button onClick={toggleSeasons} className="text-black hover:underline">
              Seasonal
            </button>
            {showSeasons && (
              <ul className="absolute mt-2 space-y-2 bg-white text-black p-2 rounded shadow">
                <li><Link to="/season/Spring" onClick={() => setShowSeasons(false)}>Spring</Link></li>
                <li><Link to="/season/Summer" onClick={() => setShowSeasons(false)}>Summer</Link></li>
                <li><Link to="/season/Autumn" onClick={() => setShowSeasons(false)}>Autumn</Link></li>
                <li><Link to="/season/Winter" onClick={() => setShowSeasons(false)}>Winter</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
