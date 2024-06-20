// components/Modal.tsx
import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-yellow-400 p-8 rounded-lg text-center relative text-white">
        <button className="absolute top-4 right-4 text-black border-none text-xl cursor-pointer" onClick={onClose}>
          X
        </button>
        <h2 className="text-xl mb-4 text-black">Do you want to delete/leave the event?</h2>
        <div className="flex gap-4 justify-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={onConfirm}>
            LEAVE EVENT
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;