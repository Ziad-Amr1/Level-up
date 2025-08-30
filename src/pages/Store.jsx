// Path: src/pages/Store.jsx
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import gamedata from "../data/Games.json";
import FeaturedGames from "../components/Store/StoreForU.jsx";
import StoreNav from "../components/Store/storeNav.jsx";
import SearchBar from "../components/Store/storeSearch.jsx";
import Hero from "../components/Store/storeHero.jsx";
import GamesGrid from "../components/Store/GamesGrid.jsx";
import FeaturedStore from "../components/Store/FeaturedStore.jsx";
import PreviewSection from "../components/Store/PreviewGames.jsx";    

const Store = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setGames(gamedata.games);
  }, []);

  // 🔍 فلترة بالبحث (لو عايز تشتغل مع SearchBar)
  const searchedGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <Hero fullWidth />
      <StoreNav fullWidth />
      <SearchBar fullWidth allGames={games} onSearch={setSearchTerm} />

      {/* Preview Section */}
      <PreviewSection fullWidth />

      {/* Featured Games Section */}
      <FeaturedGames />

      {/* Games Grid (الفلترة + السايدبار جواها) */}
      <GamesGrid games={searchedGames} />

      {/* Featured Store Section */}
      <FeaturedStore featuredGames={games} />
    </Layout>
  );
};

export default Store;
