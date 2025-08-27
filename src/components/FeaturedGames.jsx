import React from 'react';

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      image: "assets/wuthering-waves-8k-7680x4320-19534.jpg",
      title: "Wuthering Waves",
      price: "Free"
    },
    {
      id: 2,
      image: "assets/days-gone-black-3840x2160-14438.png",
      title: "Days Gone Black",
      price: "$59.99"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map(game => (
            <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-700 mb-4">{game.price}</p>
                <div className="flex space-x-4">
                  <a href="#" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition-colors">
                    Buy Now
                  </a>
                  <a href="#" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 rounded transition-colors">
                    Add to Wishlist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;