// src/pages/GameDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";
import data from "../data/Games.json";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable"; // npm install react-swipeable

// Lightbox Component (simplified)
const Lightbox = ({ open, images, active, onClose, onNext, onPrev, onSelect }) => {
  if (!open) return null;
  const handlers = useSwipeable({ onSwipedLeft: onNext, onSwipedRight: onPrev, preventScrollOnSwipe: true });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose} {...handlers}>
      <div className="relative max-w-4xl w-[92%] mx-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 bg-[var(--card-bg)]/60 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Close">
          <i className="fas fa-times" />
        </button>
        <button onClick={onPrev} className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--card-bg)]/50 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Previous">
          <i className="fas fa-chevron-left" />
        </button>
        <button onClick={onNext} className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--card-bg)]/50 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Next">
          <i className="fas fa-chevron-right" />
        </button>
        <motion.img src={images[active]} alt={`${images[0].split('/').pop()} screenshot ${active + 1}`} className="rounded-lg w-full max-h-[80vh] object-contain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} loading="lazy" />
        <div className="mt-3 flex gap-2 overflow-x-auto py-2">
          {images.map((src, idx) => (
            <button key={idx} onClick={() => onSelect(idx)} className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] ${active === idx ? "border-[var(--accent-gold)]" : "border-transparent hover:border-gray-500"}`}>
              <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// CTA Component (simplified, with Wishlist)
const GameCTA = ({ game, isMobile = false }) => {
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
};

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const game = data.games.find((g) => g.id === parseInt(id, 10));
  const allImages = useMemo(() => [game?.cover_image, ...(game?.screenshots || [])], [game]);
  const trailerUrl = game.trailer_url || ""; // Add to JSON, e.g., "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"

  useEffect(() => { if (!game) navigate("/"); }, [game, navigate]);

  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") lightboxOpen ? setLightboxOpen(false) : navigate(-1);
    if (lightboxOpen && e.key === "ArrowRight") setActiveScreenshot((s) => (s + 1) % allImages.length);
    if (lightboxOpen && e.key === "ArrowLeft") setActiveScreenshot((s) => (s - 1 + allImages.length) % allImages.length);
  }, [lightboxOpen, navigate, allImages.length]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  if (!game) return null;

  const openLightboxAt = (index) => { setActiveScreenshot(index); setLightboxOpen(true); };
  const nextLightbox = () => setActiveScreenshot((s) => (s + 1) % allImages.length);
  const prevLightbox = () => setActiveScreenshot((s) => (s - 1 + allImages.length) % allImages.length);

  // Related games (simplified)
  const relatedGames = data.games.filter(g => g.id !== game.id && g.genres?.some(genre => game.genres?.includes(genre))).slice(0, 4);

  return (
    <section className="relative min-h-screen bg-[var(--primary-dark)]">
      {/* Hero with Video Background */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {trailerUrl ? (
          <iframe src={trailerUrl} className="absolute inset-0 w-full h-full object-cover" allow="autoplay; muted; loop" title={`${game.title} Trailer`} loading="lazy" />
        ) : (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${game.cover_image})` }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-dark)]/95" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--accent-gold)]">{game.title}</h1>
          <p className="text-lg text-[var(--text-secondary)] mt-2">{game.description.slice(0, 150)}...</p>
          <div className="flex gap-4 mt-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[#FFB700] text-black font-bold">{game.price === 0 ? "Free" : `$${game.price}`}</span>
            <span className="px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">{game.rating} ⭐</span>
          </div>
        </div>
      </div>

      {/* Back Button (sticky on mobile) */}
      <button onClick={() => navigate(-1)} className="fixed top-4 left-4 md:static bg-[var(--card-bg)]/60 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition z-30 focus:ring-2 focus:ring-[var(--accent-gold)]" aria-label="Go back">
        <i className="fas fa-arrow-left" />
      </button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="flex flex-col gap-4">
            <motion.img src={allImages[activeScreenshot]} alt={`${game.title} preview`} className="rounded-xl shadow-xl w-full object-cover border-2 border-[var(--accent-gold)] cursor-zoom-in" whileHover={{ scale: 1.03 }} onClick={() => openLightboxAt(activeScreenshot)} loading="lazy" />
            <div className="flex gap-3 overflow-x-auto py-2">
              {allImages.map((src, idx) => (
                <button key={idx} onClick={() => setActiveScreenshot(idx)} className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${activeScreenshot === idx ? "border-[var(--accent-gold)]" : "border-transparent hover:border-gray-600"}`}>
                  <img src={src} alt={`${game.title} thumb ${idx}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-4">
            <p className="text-[var(--text-secondary)]">{game.description}</p>
            <div className="flex flex-wrap gap-2">
              {game.platforms?.map((p, i) => <span key={i} className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">{p}</span>)}
              {game.genres?.map((g, i) => <span key={i} className="px-3 py-1 bg-gray-800 text-[var(--accent-gold)] rounded-full text-sm">{g}</span>)}
            </div>
            <ul className="list-disc list-inside text-[var(--text-secondary)]">
              {game.features?.map((f, idx) => <li key={idx}>{f}</li>) || <li>No features.</li>}
            </ul>
            {game.system_requirements?.pc && (
              <div className="bg-[var(--secondary-dark)]/50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">System Requirements (PC)</h3>
                <ul className="text-[var(--text-secondary)] space-y-1">
                  <li><strong>OS:</strong> {game.system_requirements.pc.os}</li>
                  {/* ... other specs ... */}
                </ul>
              </div>
            )}
            {/* Reviews (add "reviews" array to JSON, e.g., [{user: "John", rating: 5, comment: "..."}] */}
            {game.reviews?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[var(--accent-gold)]">Reviews</h3>
                {game.reviews.map((r, idx) => (
                  <div key={idx} className="bg-[var(--secondary-dark)]/50 p-3 rounded-lg mt-2">
                    <p className="font-semibold">{r.user} - {r.rating} ⭐</p>
                    <p className="text-[var(--text-secondary)]">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
            <GameCTA game={game} />
          </div>
        </motion.div>

        {/* Related Games Carousel */}
        {relatedGames.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">Related Games</h2>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {relatedGames.map((rg) => (
                <div key={rg.id} className="flex-shrink-0 w-64 bg-[var(--card-bg)] rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <img src={rg.cover_image} alt={rg.title} className="w-full h-32 object-cover rounded-md mb-2" loading="lazy" />
                  <h3 className="text-lg font-semibold text-white">{rg.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{rg.price === 0 ? "Free" : `$${rg.price}`}</p>
                  <button onClick={() => navigate(`/game/${rg.id}`)} className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">View</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <GameCTA game={game} isMobile={true} />
      <Lightbox open={lightboxOpen} images={allImages} active={activeScreenshot} onClose={() => setLightboxOpen(false)} onNext={nextLightbox} onPrev={prevLightbox} onSelect={setActiveScreenshot} />
    </section>
  );
}