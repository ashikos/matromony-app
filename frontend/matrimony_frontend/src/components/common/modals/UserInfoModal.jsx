// src/Modal.js
import React, { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

const UserInfoModal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      // Add event listener to handle focus trapping
      document.addEventListener('keydown', handleTabKey);
    } else {
      document.removeEventListener('keydown', handleTabKey);
    }
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [show]);

  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input, select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    if (!show) {
      return;
    }

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // shift + tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  const modalRef = React.useRef(null);




  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-pink-100 p-8 rounded-xl border-2 border-pink-600 shadow-lg relative"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoMdClose size={25}/>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UserInfoModal;
