import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";
import data from "../data/Games.json";
import { motion } from "framer-motion";

import HeroSection from "../components/GameDetails/HeroSection";
import BackButton from "../components/GameDetails/BackButton";
import ImagesSection from "../components/GameDetails/ImagesSection";
import InfoSection from "../components/GameDetails/InfoSection";
import RelatedGamesSection from "../components/GameDetails/RelatedGamesSection";
import GameCTA from "../components/GameDetails/GameCTA";
import Lightbox from "../components/GameDetails/Lightbox";

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const game = data.games.find((g) => g.id === parseInt(id, 10));
  const allImages = useMemo(() => [game?.cover_image, ...(game?.screenshots || [])], [game]);

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

  // Related games logic
  const relatedGames = data.games.filter(g => g.id !== game.id && g.genres?.some(genre => game.genres?.includes(genre))).slice(0, 4);

  return (
    <section className="relative min-h-screen bg-[var(--primary-dark)]">

      {/* Hero with Video Background */}
      <HeroSection key={game.id} game={game} />

      {/* Back Button (sticky on mobile) */}
      <div className="relative">
        <BackButton navigate={navigate} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-8">
          <ImagesSection 
            allImages={allImages} 
            activeScreenshot={activeScreenshot} 
            setActiveScreenshot={setActiveScreenshot} 
            openLightboxAt={openLightboxAt} 
            gameTitle={game.title} 
          />
          <InfoSection game={game} />
        </motion.div>
        <RelatedGamesSection relatedGames={relatedGames} navigate={navigate} />
      </div>
      <GameCTA game={game} isMobile={true} />
      <GameCTA game={game} />
      <Lightbox 
        open={lightboxOpen} 
        images={allImages} 
        active={activeScreenshot} 
        onClose={() => setLightboxOpen(false)} 
        onNext={nextLightbox} 
        onPrev={prevLightbox} 
        onSelect={setActiveScreenshot} 
      />
    </section>
  );
}