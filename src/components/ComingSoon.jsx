// src/components/ComingSoon.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-black/70 text-white text-center p-4">
      <h2 className="text-3xl font-bold">
        Coming Soon
        <span className="block w-20 h-1 bg-[var(--accent-gold)] mt-2 mx-auto"></span>
      </h2>
      <p className="mt-2 text-gray-300">Community page still in development</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-[var(--accent-gold)] text-black rounded-lg hover:opacity-90 transition"
      >
        Back to last page
      </button>
    </div>
  );
}
