import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PulavModal = ({ isOpen, onRequestClose, pulavType, recipe }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pulav Recipe"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <h2>{pulavType} Pulav Recipe</h2>
      <p>{recipe}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default PulavModal;
