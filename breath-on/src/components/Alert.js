import React from "react";

const Alert = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center px-10 py-6 mb-4 text-lg text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 border-4 rounded-xl border-primary justify-center text-center max-w-md">
        <svg
          className="flex-shrink-0 inline w-5 h-5 me-3 mb-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium text-xl">Info alert!</span> <br />{" "}
          Please, enter the timer duration before pressing play.
        </div>
        <div className="flex flex-col pt-5">
          <button
            className="rounded-xl bg-white py-1 px-4 font-medium"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
