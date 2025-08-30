// src/components/GameCard.jsx
import { Link } from "react-router-dom";

export default function GameCard({ game, className = "" }) {
  return (
      <Link to={`/game/${game.id}`}>
      <div className={`relative bg-gradient-to-br from-[#051A2D] to-[#1A2B3C] border border-blue-600 rounded-2xl overflow-hidden flex flex-col justify-between transform transition hover:-translate-y-2 hover:shadow-2xl ${className}`}>
      
      {/* Game Cover Image */}
      <img
          src={game.cover_image}
          alt={game.title}
          className="w-full h-52 object-cover rounded-t-xl border-b-4 border-[var(--accent-gold)] transition-transform duration-300 hover:scale-105"
        />

      {/* Game Info */}
      <div className="p-4 flex flex-col justify-between flex-grow">

        {/* Game Title and Description */}
        <h3 className="text-lg font-bold text-white truncate">{game.title}</h3>
        <p className="text-gray-400 line-clamp-2" title={game.description}>
          {game.description}
        </p>
        {/* Game Price and Rating */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-400">
            {game.price === 0 ? "Free" : `$${game.price}`}
          </span>
          <span className="text-sm text-gray-300">{game.rating} ★</span>
        </div>

        
        {/* Card Buttons */}
        <div className="flex gap-2 mt-3">
          <button className="bg-[var(--accent-gold)] text-black px-3 py-1 rounded font-bold transition hover:bg-yellow-600 hover:scale-105">
            Add to Cart
          </button>
          <button className="w-10 h-10 flex justify-center items-center border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded transition hover:bg-[var(--accent-gold)] hover:text-black hover:scale-110">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}
