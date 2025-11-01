'use client';
import { useState, useEffect } from 'react';

export default function LoginPopup({ isLoggedIn, onLogin }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [isLoggedIn]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-xl w-96 p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Please Log In
        </h2>
        <p className="text-gray-600 mb-6">
          You need to log in to continue using BharatGPT.
        </p>
        <button
          onClick={() => {
            onLogin();
            setShowPopup(false);
          }}
          className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
