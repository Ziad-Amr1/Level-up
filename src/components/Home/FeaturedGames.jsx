import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import data from "../../data/Games.json";

const FeaturedGames = () => {
  // Specific game IDs to feature
  const featuredIds = [21, 22, 23]; 

  // Filter games by IDs
  const games = data.games.filter((game) => featuredIds.includes(game.id));

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-10">
          Featured <span className="text-[var(--accent-gold)]">Games</span>
          <span className="block w-20 h-1 bg-[var(--accent-gold)] mx-auto mt-2"></span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="relative bg-gradient-to-br from-[#051A2D] to-[#1A2B3C] border border-blue-600 rounded-2xl shadow-lg overflow-hidden p-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(255,215,0,0.2)" }}
            >
              <img
                src={game.cover_image}
                alt={game.title}
                className="w-full h-56 object-cover rounded-md border-b-4 border-yellow-400 mb-4 transition-transform duration-500 hover:scale-105"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold text-white">
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {game.price === 0 ? "Free" : `$${game.price}`}
                </p>

                <div className="flex justify-center items-center gap-3">
                  <a
                    href="#"
                    className="px-4 py-2 bg-yellow-400 text-[#051A2D] font-semibold rounded-lg shadow-md hover:bg-[#051A2D] hover:text-yellow-400 border border-yellow-400 transition"
                  >
                    Buy Now
                  </a>
                  <button className="bg-gray-500 p-2 rounded-lg hover:text-red-500 hover:-translate-y-1 hover:shadow-lg transition">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
