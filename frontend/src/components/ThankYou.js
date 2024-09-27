// ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/'); // Navigate back to home or any other page you want
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-r from-green-400 to-sky-300 p-10 ">
      <div className="flex flex-col items-center justify-center flex-grow bg-gradient-to-r from-green-200 to-sky-200 p-44 rounded-lg shadow-lg text-center">
        <h2 className="text-5xl font-bold text-green-600 mb-4  ">Thank You!</h2>
        <p className="text-xl text-black mb-6">Your payment was successful!</p>
        <img 
          src="https://img.icons8.com/color/96/000000/checkmark.png" // Use a success icon
          alt="Success"
          className="mb-6"
        />
      </div>
      <button
        onClick={handleReturnHome}
        className="bg-yellow-500 hover:bg-yellow-700 text-slate-100 text-xl px-6 py-3 rounded transition duration-300 mt-4 h-16"
      >
        <b>Return to Home</b>
      </button>
    </div>
  );
};

export default ThankYou;
