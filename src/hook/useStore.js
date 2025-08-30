// src/hook/useStore.js
import { useState, useEffect, useMemo } from 'react';

export function useStore() {
  const [allGames, setAllGames] = useState([]);
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [filters, setFilters] = useState({
    rating: 0,
    priceMin: 0,
    priceMax: 0,
    genres: [],
    platforms: []
  });
  const [sorting, setSorting] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  // Load games data
  useEffect(() => {
    fetch('/JSON/Games.json')
      .then(res => res.json())
      .then(data => {
        setAllGames(data.games);
        const prices = data.games.map(g => parseFloat(g.price) || 0);
        setFilters(prev => ({ ...prev, priceMax: Math.ceil(Math.max(...prices) + 1) }));
      })
      .catch(err => console.error(err));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [darkMode]);

  // Add game to cart
  const addToCart = (game) => {
    setCartItems(prev => [...prev, game]);
  };

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Handle filter updates
  const updateFilter = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
    setCurrentPage(1);
  };

  // Apply filters & search
  const filteredGames = useMemo(() => {
    return allGames.filter(game => {
      const price = parseFloat(game.price) || 0;
      const rating = parseFloat(game.rating) || 0;
      const matchesPrice = price >= filters.priceMin && price <= filters.priceMax;
      const matchesRating = filters.rating === 0 || (rating >= filters.rating && rating < filters.rating + 1);
      const matchesGenres = filters.genres.length === 0 || filters.genres.every(g => (game.genres || []).includes(g));
      const matchesPlatforms = filters.platforms.length === 0 || filters.platforms.every(p => (game.platforms || []).includes(p));
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesPrice && matchesRating && matchesGenres && matchesPlatforms && matchesSearch;
    });
  }, [allGames, filters, searchTerm]);

  // Apply sorting
  const sortedGames = useMemo(() => {
    const sorted = [...filteredGames];
    switch (sorting) {
      case 'price-asc':
        sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredGames, sorting]);

  // Pagination
  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * gamesPerPage;
    return sortedGames.slice(start, start + gamesPerPage);
  }, [sortedGames, currentPage, gamesPerPage]);

  const totalPages = Math.ceil(sortedGames.length / gamesPerPage);

  // Clear filters
  const clearFilters = () => {
    setFilters(prev => ({
      ...prev,
      rating: 0,
      priceMin: 0,
      priceMax: prev.priceMax,
      genres: [],
      platforms: []
    }));
    setSearchTerm('');
    setCurrentPage(1);
  };

  return {
    games: paginatedGames,
    allGamesCount: sortedGames.length,
    cartItems,
    addToCart,
    filters,
    updateFilter,
    sorting,
    setSorting,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    clearFilters,
    darkMode,
    toggleDarkMode
  };
}
