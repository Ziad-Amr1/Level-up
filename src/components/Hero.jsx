// import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-center px-6"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-orbitron font-bold text-white leading-tight drop-shadow-lg"
        >
          Discover, Play, and Share <br />
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FFE55C] bg-clip-text text-transparent animate-pulse">
            Games You Love
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Level Up is your ultimate destination for exploring new games,
          connecting with gamers, and sharing your journey.
        </motion.p>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/store"
            className="rounded-2xl border border-[#FFD700] bg-gradient-to-br from-[#FFD700] to-[#D4AF37] px-8 py-3 text-lg font-semibold uppercase text-[#051A2D] shadow-md transition-transform hover:-translate-y-1 hover:bg-none hover:text-white"
          >
            Explore Games
          </a>

          <a
            href="/community"
            className="rounded-2xl border-2 border-[#FFD700] px-8 py-3 text-lg font-semibold uppercase text-[#FFD700] transition-all hover:-translate-y-1 hover:bg-[#FFD700] hover:text-[#051A2D]"
          >
            Join Community
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#FFD700]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
