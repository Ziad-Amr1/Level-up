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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-10 max-w-3xl text-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide"
        >
          <span className="block text-white drop-shadow-md">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
              Level Up
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed"
        >
          Your ultimate hub to discover, play, and share games with a passionate
          community of gamers worldwide.
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
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-black font-semibold uppercase tracking-wide shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1 transition"
          >
            Explore Games
          </a>
          <a
            href="/community"
            className="px-8 py-3 rounded-xl border border-yellow-300 text-yellow-300 font-semibold uppercase tracking-wide hover:bg-yellow-300 hover:text-black transition hover:-translate-y-1"
          >
            Join Community
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-yellow-300"
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
        <span className="mt-1 text-xs tracking-widest">Scroll Down</span>
      </motion.div>
    </section>
  );
}
