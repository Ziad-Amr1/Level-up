// src/components/storeSearch.jsx
import { useState } from "react";
import { Search } from "lucide-react";

export default function StoreSearchBar({ allGames, onSearch }) {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);

    if (value.length > 0) {
      const filtered = allGames.filter((game) =>
        game.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }

    onSearch(value);
  };

  return (
    <section className="flex justify-center items-center pt-4 pb-8 mb-8 bg-[var(--secondary-dark)]">
      <div className="flex items-center w-full max-w-2xl px-2 relative">
        {/* Input */}
        <input
          type="text"
          placeholder="Search games..."
          value={term}
          onChange={handleChange}
          className="flex-grow px-5 py-3 border-2 border-yellow-400 rounded-l-md bg-white/5 text-white text-base placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_15px_rgba(255,215,0,0.3)] focus:bg-white/10"
        />

        {/* Button */}
        <button className="bg-yellow-400 text-[var(--secondary-dark)] px-5 py-3 rounded-r-md border border-yellow-500 font-bold text-base transition-all duration-300 hover:bg-yellow-300">
          <Search size={25} />
        </button>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute top-full inset-x-0 mx-2 bg-[var(--secondary-dark)] rounded-b-lg max-h-72 overflow-y-auto z-50 shadow-md border border-zinc-800">
            {suggestions.map((game) => (
              <div
                key={game.id}
                className="px-5 py-3 cursor-pointer transition-colors hover:bg-white/5 flex items-center gap-3"
                onClick={() =>
                  (window.location.href = `game-details.html?id=${game.id}`)
                }
              >
                <img
                  src={game.cover_image}
                  alt={game.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <p className="text-white font-medium">{game.title}</p>
                  <small className="text-gray-400">
                    {game.price || "Free"}
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
