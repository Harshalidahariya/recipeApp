import React from 'react';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        {children}
        <button onClick={onRequestClose} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
