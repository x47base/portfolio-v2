"use client";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Clean up and restore background scrolling when modal is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-800 text-white w-full h-full xl:max-w-5xl xl:h-auto xl:rounded-lg xl:overflow-hidden overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 z-50 xl:top-2 xl:right-2"
        >
          <IoClose className="text-3xl xl:text-2xl" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
