import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold text-white leading-tight drop-shadow-xl"
        >
          Discover, Play, and Share <br />
          <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[#FFE55C] bg-clip-text text-transparent animate-pulse">
            Games You Love
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300"
        >
          Level Up is your ultimate destination for exploring new games,
          connecting with gamers, and sharing your journey.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/store"
            className="rounded-2xl border border-[var(--accent-gold)] bg-gradient-to-br from-[var(--accent-gold)] to-[#D4AF37] px-8 py-3 text-lg font-semibold uppercase text-[var(--primary-dark)] shadow-md transition hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]"
          >
            Explore Games
          </a>
          <a
            href="/community"
            className="rounded-2xl border-2 border-[var(--accent-gold)] px-8 py-3 text-lg font-semibold uppercase text-[var(--accent-gold)] transition hover:-translate-y-1 hover:bg-[var(--accent-gold)] hover:text-[var(--primary-dark)]"
          >
            Join Community
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--accent-gold)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="mt-1 text-xs tracking-widest text-[var(--accent-gold)]">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}
