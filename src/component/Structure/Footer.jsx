import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Harsha's Kitchen. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made with <span className="text-red-500">&hearts;</span> by Harshali
        </p>
      </div>
    </footer>
  );
};

export default Footer;
