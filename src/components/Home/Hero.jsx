import { motion } from "framer-motion";
import heroImage from "../../assets/hero-image.jpg";

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
      className="hero relative min-h-screen flex items-center justify-center bg-cover bg-center text-center px-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-2 sm:px-4">
        {/* العنوان الأبيض: سطر واحد ومتمركز فعليًا */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="m-0 w-fit mx-auto mb-0 tracking-wide whitespace-nowrap text-white font-orbitron font-bold leading-tight drop-shadow-xl
                     text-[clamp(22px,7vw,56px)]"
        >
          Level Up Your Gaming Experience
        </motion.h1>

        {/* العنوان الذهبي مع الأنيميشن ومتمركز */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="w-fit mx-auto mt-0 font-orbitron font-bold drop-shadow-xl
                    text-[clamp(18px,6vw,48px)]
                    bg-gradient-to-r from-[var(--accent-gold)] to-[#FFE55C] 
                    bg-clip-text text-transparent animate-gradient-x"
        >
          Discover Amazing Worlds
        </motion.h2>


        {/* الوصف رمادي كما كان */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-400"
        >
          Join thousands of players exploring, building, and conquering adventures.
          Your journey starts here.
        </motion.p>

        {/* الأزرار من النسخة الثانية */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/store"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200
                       text-black font-semibold uppercase tracking-wide shadow-lg
                       hover:shadow-yellow-400/50 hover:-translate-y-1 transition"
          >
            Explore Games
          </a>
          <a
            href="/community"
            className="px-8 py-3 rounded-xl border border-yellow-300 text-yellow-300
                       font-semibold uppercase tracking-wide
                       hover:bg-yellow-300 hover:text-black transition hover:-translate-y-1"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--accent-gold)] bg-black/30 px-3 py-2 rounded-full"
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
