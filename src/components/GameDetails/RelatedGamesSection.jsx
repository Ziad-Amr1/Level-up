// src/components/GameDetails/RelatedGamesSection.jsx
import { Link } from "react-router-dom";

export default function RelatedGamesSection({ relatedGames }) {
  if (!relatedGames || relatedGames.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[var(--accent-gold)] mb-6">
        Related Games
      </h2>

      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {relatedGames.map((rg) => (
          <Link
            key={rg.id}
            to={`/game/${rg.id}`}
            className="flex-shrink-0 w-56 bg-gradient-to-br from-[#051A2D] to-[#1A2B3C] border border-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300"
          >
            {/* Game Cover */}
            <div className="relative">
              <img
                src={rg.cover_image}
                alt={rg.title}
                className="w-full h-40 object-cover rounded-t-lg border-b-2 border-[var(--accent-gold)] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {/* Optional Overlay Label */}
              {rg.price === 0 && (
                <span className="absolute top-2 left-2 bg-[var(--accent-gold)] text-black text-xs font-bold px-2 py-1 rounded">
                  Free
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-3 flex flex-col justify-between flex-grow">
              <h3
                className="text-base font-bold text-white truncate"
                title={rg.title}
              >
                {rg.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {rg.description || "No description available."}
              </p>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-300">
                  {rg.price === 0 ? "Free" : `$${rg.price}`}
                </span>
                <button className="px-3 py-1 bg-[var(--accent-gold)] text-black rounded text-xs font-bold transition hover:bg-yellow-600 hover:scale-105">
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
