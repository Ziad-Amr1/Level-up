import React from 'react';

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      image: "../images/games/wuthering-waves-8k-7680x4320-19534.jpg",
      title: "Wuthering Waves",
      price: "Free"
    },
    {
      id: 2,
      image: "../images/games/days-gone-black-3840x2160-14438.png",
      title: "Days Gone Black",
      price: "$59.99"
    },
    {
      id: 3,
      title: "Genshin Impact",
      price: "Free",
      image: "../images/games/Genshin-Impact.jpg",
    }
  ];

  return (
    <section className="bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-10">
          Featured <span className="text-accent">Games</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-primary rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {game.title}
                </h3>
                <button className="mt-4 bg-accent text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;