import React from "react";
import { FaTimes } from "react-icons/fa";
import { Star } from "lucide-react";

export default function FilterSidebar({
  isOpen,
  onClose,
  pendingFilters,
  changePriceRange,
  changeRating,
  togglePlatform,
  toggleGenre,
  availablePlatforms,
  availableGenres,
  maxPrice,
  clearFilters,
  applyFilters,
}) {
  const minPrice = pendingFilters.priceRange[0];
  const maxSelectedPrice = pendingFilters.priceRange[1];

  return (
    <>
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-[var(--secondary-dark)] text-white shadow-lg transform transition-transform duration-300 z-55 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 pb-0 overflow-y-auto h-full relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b-2 border-[var(--accent-gold)] pb-3">
          <h3 className="text-lg font-bold text-[var(--accent-gold)]">Filters</h3>
          <button
            onClick={onClose}
            className="text-[var(--accent-gold)] hover:text-white transition"
          >
            <FaTimes />
          </button>
        </div>


        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">
            Price Range
          </h4>


        {/* Range Slider */}
        <div className="relative w-full mb-4 h-4">
          {/* Gray Background if no value is selected */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-500 rounded-lg"></div>

          {/* Gold Background if value is selected */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg"
            style={{
              left: `${(minPrice / maxPrice) * 100}%`,
              right: `${100 - (maxSelectedPrice / maxPrice) * 100}%`,
            }}
          ></div>

          {/* Min Range */}
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={minPrice}
            onChange={(e) =>
              changePriceRange(parseInt(e.target.value), maxSelectedPrice)
            }
            className="absolute w-full appearance-none bg-transparent 
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-yellow-500
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-black
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-md
                      cursor-pointer"
          />

          {/* Max Range */}
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={maxSelectedPrice}
            // onChange={(e) =>
            //   changePriceRange(minPrice, parseInt(e.target.value))
            // }
            onChange={(e) =>
              changePriceRange(
                minPrice,
                Math.min(parseInt(e.target.value) || 0, maxPrice)
              )
            }
            className="absolute w-full appearance-none bg-transparent 
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-yellow-500
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-black
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-md
                      cursor-pointer"
          />
        </div>


          {/* Values */}
          <div className="flex justify-between gap-2">

            {/* Min Input */}
            <input
              type="number"
              value={minPrice}
              // onChange={(e) =>
              //   changePriceRange(parseInt(e.target.value) || 0, maxSelectedPrice)
              // }
                // onChange={(e) =>
                //   changePriceRange(
                //     minPrice,
                //     Math.min(parseInt(e.target.value) || 0, maxPrice)
                //   )
                // }
                // onChange={(e) =>
                //   changePriceRange(
                //     Math.min(parseInt(e.target.value) || 0, maxPrice),
                //     maxSelectedPrice
                //   )
                // }
              onChange={(e) =>
                  changePriceRange(
                    Math.min(parseInt(e.target.value) || 0, maxPrice),
                    maxSelectedPrice
                  )
                }
              className="w-1/2 text-center font-bold text-[var(--accent-gold)] 
                        bg-[var(--card-bg)] border border-[var(--accent-gold)] 
                        rounded appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* Max Input */}
            <input
              type="number"
              value={maxSelectedPrice}
                // onChange={(e) =>
                //   changePriceRange(
                //     minPrice,
                //     Math.min(parseInt(e.target.value) || 0, maxPrice)
                //   )
                // }
              onChange={(e) =>
                  changePriceRange(
                    minPrice,
                    Math.min(parseInt(e.target.value) || 0, maxPrice)
                  )
                }
              className="w-1/2 text-center font-bold text-[var(--accent-gold)] 
                        bg-[var(--card-bg)] border border-[var(--accent-gold)] 
                        rounded appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>




        {/* Rating */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Rating</h4>
          {[1, 2, 3, 4, 5].map((r) => (
            <button
              key={r}
              className={`px-3 py-1 rounded mr-2 mb-2 ${
                pendingFilters.rating === r
                  ? "bg-[var(--accent-gold)] text-black"
                  : "border border-gray-500"
              }`}
              onClick={() => changeRating(r)}
            >
              {r} <Star className="inline-block w-4 h-4 text-yellow-400" />
            </button>
          ))}
        </div>

        {/* Platforms */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Platforms</h4>
          {availablePlatforms.map((p) => (
            <label key={p} className="block">
              <input
                type="checkbox"
                checked={pendingFilters.platforms.includes(p)}
                onChange={() => togglePlatform(p)}
              />
              <span className="ml-2">{p}</span>
            </label>
          ))}
        </div>

        {/* Genres */}
        <div className="mb-5">
          <h4 className="font-semibold mb-2">Genres</h4>
          {availableGenres.map((g) => (
            <label key={g} className="block">
              <input
                type="checkbox"
                checked={pendingFilters.genres.includes(g)}
                onChange={() => toggleGenre(g)}
              />
              <span className="ml-2">{g}</span>
            </label>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 sticky bottom-0 left-0 right-0 py-5 bg-[var(--secondary-dark)] border-t-2 border-[var(--accent-gold)]">
          <button
            onClick={clearFilters}
            className="flex-1 bg-gray-600 py-2 rounded hover:bg-gray-500"
          >
            Clear
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 bg-[var(--accent-gold)] text-black py-2 rounded hover:opacity-90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>



      {/* Overlay */}
      {isOpen && (
        <div
            className={`fixed inset-0 bg-black backdrop-blur-sm z-50 transition-opacity duration-300 ${
              isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
          ></div>
      )}
    </>

  );
}
