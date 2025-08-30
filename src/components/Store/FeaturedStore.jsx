import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import GameCard from "./Gamecard.jsx";

export default function FeaturedGames({ featuredGames }) {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [autoScroll, setAutoScroll] = useState(0);

  // تحديث عرض الكاروسيل
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current && innerRef.current) {
        const totalWidth = innerRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        setCarouselWidth(totalWidth - visibleWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [featuredGames]);

  // Auto-scroll ببطء
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        let newScroll = carouselRef.current.scrollLeft + carouselRef.current.offsetWidth / 4; // يمر 1 كرت
        if (newScroll > maxScroll) newScroll = 0;
        carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
      }
    }, 4000); // كل 4 ثواني
    return () => clearInterval(interval);
  }, []);

  // أزرار تحريك الكاروسيل
  const handleLeft = () => {
    if (carouselRef.current) {
      let newScroll = carouselRef.current.scrollLeft - carouselRef.current.offsetWidth / 4;
      if (newScroll < 0) newScroll = 0;
      carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };
  const handleRight = () => {
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      let newScroll = carouselRef.current.scrollLeft + carouselRef.current.offsetWidth / 4;
      if (newScroll > maxScroll) newScroll = maxScroll;
      carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Staff Picks</h2>
          <div className="flex gap-2">
            <button
              onClick={handleLeft}
              className="border border-yellow-500 text-yellow-500 p-2 rounded hover:bg-yellow-500 hover:text-black"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={handleRight}
              className="border border-yellow-500 text-yellow-500 p-2 rounded hover:bg-yellow-500 hover:text-black"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="overflow-hidden cursor-grab"
        >
          <motion.div
            ref={innerRef}
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -carouselWidth, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {featuredGames.map((game, index) => (
            <motion.div
              key={game.id}
              className="flex-shrink-0"
              style={{ width: `calc(25% - 0.95rem)` }} // 25% minus gap
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <GameCard game={game} className="hover-none" /> {/* إلغاء Hover */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
