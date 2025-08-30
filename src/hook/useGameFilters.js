import { useState, useEffect } from "react";

export function useGameFilters(allGames) {
  const [filteredGames, setFilteredGames] = useState(allGames);

  // ⏳ pending = اختيارات المستخدم المؤقتة (قبل Apply)
  const [pendingFilters, setPendingFilters] = useState({
    platforms: [],
    genres: [],
    priceRange: [0, 100],
    rating: 0,
  });

  // ✅ applied = الفلاتر المطبقة فعلاً
  const [appliedFilters, setAppliedFilters] = useState(pendingFilters);

  // 🟡 القيم المشتقة من JSON
  const [availablePlatforms, setAvailablePlatforms] = useState([]);
  const [availableGenres, setAvailableGenres] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  // 🔹 عند تغيير الألعاب → احسب القيم التلقائية
  useEffect(() => {
    if (allGames && allGames.length > 0) {
      // كل البلاتفورمز
      const platformsSet = new Set();
      allGames.forEach((g) => g.platforms?.forEach((p) => platformsSet.add(p)));
      setAvailablePlatforms([...platformsSet]);

      // كل الجينرز
      const genresSet = new Set();
      allGames.forEach((g) => g.genres?.forEach((gen) => genresSet.add(gen)));
      setAvailableGenres([...genresSet]);

      // max price
      const maxP = Math.ceil(Math.max(
        ...allGames.map((g) => (g.price === "Free" ? 0 : parseFloat(g.price)))
      ));
      setMaxPrice(maxP);

      // تحديث الفلاتر الأساسية
      setPendingFilters((prev) => ({ ...prev, priceRange: [0, maxP] }));
      setAppliedFilters((prev) => ({ ...prev, priceRange: [0, maxP] }));
    }
  }, [allGames]);

  // 🔹 فلترة بالأبلايد فقط
  useEffect(() => {
    if (!allGames || allGames.length === 0) return;

    const result = allGames.filter((game) => {
      const price = game.price === "Free" ? 0 : parseFloat(game.price) || 0;
      const rating = parseFloat(game.rating) || 0;
      const platforms = game.platforms || [];
      const genres = game.genres || [];

      return (
        (appliedFilters.platforms.length === 0 ||
          appliedFilters.platforms.every((p) => platforms.includes(p))) &&
        (appliedFilters.genres.length === 0 ||
          appliedFilters.genres.every((g) => genres.includes(g))) &&
        price >= appliedFilters.priceRange[0] &&
        price <= appliedFilters.priceRange[1] &&
        (appliedFilters.rating === 0 ||
          (rating >= appliedFilters.rating &&
            rating < appliedFilters.rating + 1))
      );
    });

    setFilteredGames(result);
  }, [allGames, appliedFilters]);

  // ------------------------------
  // ✨ pending actions
  // ------------------------------
  const togglePlatform = (platform) => {
    setPendingFilters((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const toggleGenre = (genre) => {
    setPendingFilters((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  // const changePriceRange = (min, max) => {
  //   if (min < 0) min = 0;
  //   setPendingFilters((prev) => ({ ...prev, priceRange: [min, max] }));
  // };

  // Price Range with validation
  const changePriceRange = (min, max) => {
    if (min < 0) min = 0;
    if (max > maxPrice) max = maxPrice;

    if (min > max) min = max; // Ensure min is not greater than max

    setPendingFilters((prev) => ({ ...prev, priceRange: [min, max] }));
  };


  const changeRating = (rating) => {
    setPendingFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? 0 : rating,
    }));
  };

  // ------------------------------
  // ✅ Apply / Clear
  // ------------------------------
  const applyFilters = () => {
    setAppliedFilters(pendingFilters);
  };

  const clearFilters = () => {
    const cleared = {
      platforms: [],
      genres: [],
      priceRange: [0, maxPrice],
      rating: 0,
    };
    setPendingFilters(cleared);
    setAppliedFilters(cleared);
  };

  return {
    filteredGames,

    // ⏳ pending
    pendingFilters,

    // 🟡 options من JSON
    availablePlatforms,
    availableGenres,
    maxPrice,

    // 🟡 actions
    togglePlatform,
    toggleGenre,
    changePriceRange,
    changeRating,
    applyFilters,
    clearFilters,
  };
}
