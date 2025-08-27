import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/store.css";
import gamedata from "../data/games.json";

const featuredGames = [
  {
    id: 1,
    title: "Elder Scrolls V: Skyrim",
    description: "Explore a vast open world with endless adventures.",
    image: "/images/skyrim.jpg",
  },
  {
    id: 2,
    title: "The Witcher 3: Wild Hunt",
    description: "Dive into a dark fantasy story filled with choices.",
    image: "/images/witcher3.jpg",
  },
  {
    id: 3,
    title: "Minecraft",
    description: "Build and survive in a limitless blocky world.",
    image: "/images/minecraft.jpg",
  },
];

const Store = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  // تحميل الداتا من JSON
  useEffect(() => {
    setGames(gamedata.games);
  }, []);

  // فلترة + ترتيب الألعاب
  const filteredGames = games
    .filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return (a.price || 0) - (b.price || 0);
        case "price-desc":
          return (b.price || 0) - (a.price || 0);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "newest":
          return new Date(b.release_date) - new Date(a.release_date);
        default:
          return 0;
      }
    });

  return (
    <Layout>
      {/* Hero Section */}
      <header className="hero bg-light-gray">
        <div className="container-fluid text-center hero-overlay">
          <h1 className="display-4 fw-bold text-gold">Game Store</h1>
          <p className="lead text-muted">Discover the latest titles</p>
        </div>
      </header>

      {/* Search + Navigation */}
      <section className="search-bar-section py-4 bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 position-relative">
              <form
                className="search-bar"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Search games..."
                  className="form-control search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn-accent">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <nav className="store-nav mt-4">
            <ul className="d-flex justify-content-center gap-4">
              <li><a href="#" className="nav-link">Discover</a></li>
              <li><a href="#" className="nav-link">Browse</a></li>
              <li><a href="#" className="nav-link">News</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Featured Games */}
      <section className="featured-games section-spacing">
        <h2 className="section-title mb-6 text-center">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p className="text-gray-600 text-sm">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Games */}
      <main className="store-main container py-6">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">All Games</h2>
          <select
            className="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="games-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="game-card bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={game.cover_image || "/images/default-game.jpg"}
                alt={game.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-500">{game.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gold">
                    ${game.price || "Free"}
                  </span>
                  <span className="text-sm text-gray-400">
                    ⭐ {game.rating || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Store;
