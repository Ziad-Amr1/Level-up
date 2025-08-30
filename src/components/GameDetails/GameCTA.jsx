import { useState, useEffect } from "react";

export default function GameCTA({ game, isMobile = false }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlists = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsWishlisted(wishlists.includes(game.id));
  }, [game.id]);

  const toggleWishlist = () => {
    const wishlists = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updated = isWishlisted ? wishlists.filter(id => id !== game.id) : [...wishlists, game.id];
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setIsWishlisted(!isWishlisted);
  };

  const buyText = game.price === 0 ? "Download Now" : "Buy Now";
  const addText = game.price === 0 ? "Download" : "Add to Cart";

  return (
    <div className={`${isMobile ? "fixed bottom-0 left-0 w-full z-40 bg-[var(--card-bg)]/80 backdrop-blur-md border-t border-[var(--accent-gold)] p-3 flex justify-between items-center" : "flex gap-4 mt-4"}`}>
      {isMobile ? (
        <>
          <div className="text-lg font-bold text-[var(--accent-gold)]">{game.price === 0 ? "Free" : `$${game.price}`}</div>
          <div className="flex gap-2">
            <button className={`px-4 py-2 bg-gradient-to-r from-[var(--accent-gold)] to-[#FFB700] text-black font-bold rounded-lg hover:scale-105 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${!game.is_available ? "opacity-50" : ""}`} disabled={!game.is_available}>
              {addText}
            </button>
            <button className={`px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:scale-105 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${!game.is_available ? "opacity-50" : ""}`} disabled={!game.is_available}>
              {buyText}
            </button>
          </div>
        </>
      ) : (
        <>
          <button className={`px-6 py-3 bg-gradient-to-r from-[var(--accent-gold)] to-[#FFB700] text-black font-bold rounded-lg hover:scale-105 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${!game.is_available ? "opacity-50" : ""}`} disabled={!game.is_available}>
            {addText}
          </button>
          <button className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:scale-105 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${!game.is_available ? "opacity-50" : ""}`} disabled={!game.is_available}>
            {buyText}
          </button>
          <button onClick={toggleWishlist} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg hover:scale-105 transition focus:ring-2 focus:ring-[var(--accent-gold)]">
            {isWishlisted ? "Remove Wishlist" : "Wishlist"}
          </button>
        </>
      )}
    </div>
  );
}