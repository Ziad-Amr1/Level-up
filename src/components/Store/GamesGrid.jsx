import { useState, useEffect } from "react";
import GameCard from "./Gamecard.jsx";
import FilterSidebar from "./FilterSidebar.jsx";
import { useGameFilters } from "../../hook/useGameFilters.js";
import { motion, AnimatePresence } from "framer-motion";

export default function GamesGrid({ games }) {
  const [sort, setSort] = useState("price-asc");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // hook
  const {
    filteredGames,
    pendingFilters,
    changePriceRange,
    changeRating,
    togglePlatform,
    toggleGenre,
    clearFilters,
    applyFilters,
    availablePlatforms,
    availableGenres,
    maxPrice,
  } = useGameFilters(games);


  // Game visibility
  const [visibleGames, setVisibleGames] = useState(12); // start with 12 games

  useEffect(() => {
  setVisibleGames(12); // Reset to initial count when filters change
  }, [filteredGames]);

  // Load More
  const handleLoadMore = () => {
    setVisibleGames(prev => Math.min(prev + 8, filteredGames.length));
  };



  // sort
  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return (a.price === "Free" ? 0 : a.price) - (b.price === "Free" ? 0 : b.price);
      case "price-desc":
        return (b.price === "Free" ? 0 : b.price) - (a.price === "Free" ? 0 : a.price);
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      default:
        return 0;
    }
  });

    // Animation variants
    const containerVariants = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1, // كل لعبة تظهر بعد 0.1 ثانية
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">All Games</h2>

          <div className="flex gap-3 items-center">

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="p-2 pr-10 rounded border border-[var(--accent-gold)] 
                           bg-[var(--secondary-dark)] text-[var(--text-primary)] 
                           focus:outline-none appearance-none"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>

            {/* Filter Btn */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="px-3 py-2 border border-[var(--accent-gold)] 
                         text-[var(--accent-gold)] rounded 
                         hover:bg-[var(--accent-gold)] hover:text-[var(--primary-dark)] 
                         transition"
            >
              <i className="fas fa-filter"></i> Filters
            </button>
          </div>
        </div>

        {/* Games Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {sortedGames.slice(0, visibleGames).map((game) => (
            <AnimatePresence key={game.id}>
              <motion.div variants={itemVariants} exit="exit" layout>
                <GameCard game={game} />
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </div>

      {/* Load More Btn */}
      {visibleGames < sortedGames.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )}


      {/* Sidebar */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        pendingFilters={pendingFilters}
        changePriceRange={changePriceRange}
        changeRating={changeRating}
        togglePlatform={togglePlatform}
        toggleGenre={toggleGenre}
        clearFilters={clearFilters}
        applyFilters={() => {
          applyFilters();
          setSidebarOpen(false);
        }}
        availablePlatforms={availablePlatforms}
        availableGenres={availableGenres}
        maxPrice={maxPrice}
      />
    </section>
  );
}
