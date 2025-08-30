// src/components/PreviewGames.jsx
import React, { useState, useEffect } from "react";
import data from "../../data/Games.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PreviewSection({ fullWidth = true }) {
  const PreviewIds = [15, 21, 23, 24, 12];
  const games = data.games
    .filter((game) => PreviewIds.includes(game.id))
    .sort(
      (a, b) => PreviewIds.indexOf(a.id) - PreviewIds.indexOf(b.id)
    );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const activeGame = games[currentIndex] || null;

  // Auto Slide
  useEffect(() => {
    if (games.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [games]);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length);
      setFade(false);
    }, 400);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + games.length) % games.length
      );
      setFade(false);
    }, 400);
  };

  const handleSelect = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 400);
  };

  return (
    <section className="w-full bg-[var(--secondary-dark)] text-[var(--text-primary)] my-8" fullWidth>
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <div className="text-start mb-8">
          <h2 className="text-3xl font-bold text-white">
            Featured Games
          </h2>
          <span className="block w-20 h-1 bg-[var(--accent-gold)] mt-2"></span>
        </div>

        {/* Main Section */}
        <div className="flex gap-8">
          {/* Game Preview */}
          <div className="relative w-3/4 h-[75vh] overflow-hidden rounded-lg">
            {/* Image */}
            <img
              src={activeGame?.cover_image || "assets/placeholder.jpg"}
              alt={activeGame?.title || "Loading..."}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[var(--primary-dark)]/95 to-transparent"></div>

            {/* Content */}
            <div className="absolute top-[60%] left-0 px-12 py-4 z-10">
              <h3
                className={`text-2xl font-bold text-[var(--accent-gold)] mb-2 transition-all duration-700 ${
                  fade ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                {activeGame?.title || "Loading..."}
              </h3>
              <p
                className={`text-[var(--text-secondary)] max-w-lg mb-4 line-clamp-2 min-h-[3.5rem] transition-all duration-700 delay-150 ${
                  fade ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                {activeGame?.description || "Fetching game details..."}
              </p>
              <div
                className={`flex gap-4 transition-opacity duration-700 delay-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <button className="bg-[var(--accent-gold)] text-[var(--primary-dark)] px-6 py-2 rounded font-bold hover:opacity-80 hover:-translate-y-0.5 transition-all">
                  Add to Cart
                </button>
                <button className="w-10 h-10 flex justify-center items-center rounded border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[var(--primary-dark)] transition">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Games List */}
          <div className="w-1/4 h-[75vh] bg-[var(--primary-dark)] rounded-lg p-4">
            <ul className="grid grid-rows-5 gap-3 h-full">
              {games.map((game, index) => (
                <Link to={`/game/${game.id}`}>
                <li
                  key={game.id}
                  onClick={() => handleSelect(index)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all relative ${
                    currentIndex === index
                      ? "border-2 border-[var(--accent-gold)] scale-105 shadow-lg"
                      : "bg-[var(--secondary-dark)] hover:translate-x-2"
                  }`}
                >
                  <img
                    src={game.cover_image}
                    alt={game.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <h3 className="text-sm font-medium">{game.title}</h3>

                  {/* active pulse dot */}
                  {currentIndex === index && (
                    <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--accent-gold)] rounded-full animate-ping"></span>
                  )}
                </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
