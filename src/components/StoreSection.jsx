import React from 'react';

const StoreSection = () => {
  const games = [
    {
      id: 1,
      image: "assets/rappa-honkai-star-3840x2160-19777.jpg",
      title: "Honkai: Star Rail",
      description: "Version 3.1 'Light Slips the Gate, Shadow Greets the Throne' is now online!"
    },
    {
      id: 2,
      image: "assets/marvel-rivals.jpg",
      title: "Marvel Rivals",
      description: "ONE GENERATION RISES, WHILE ANOTHER WILTS"
    },
    {
      id: 3,
      image: "assets/Infinity Nikki.webp",
      title: "Infinity Nikki",
      description: "Explore a world of fashion and adventure."
    },
    {
      id: 4,
      image: "assets/Blades of Fire.webp",
      title: "Blades of Fire",
      description: "Off The Grid"
    }
  ];

  return (
    <section className="py-16 bg-background px-4">
      <div className="container mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search store" 
              className="flex-grow px-4 py-2 border border-secondary rounded-l focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-secondary"
            />
            <button className="bg-accent text-primary px-4 py-2 rounded-r hover:bg-secondary transition-colors">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex justify-center mb-12">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-secondary hover:text-accent font-bold transition-colors">Discover</a></li>
            <li><a href="#" className="text-secondary hover:text-accent font-bold transition-colors">Browse</a></li>
            <li><a href="#" className="text-secondary hover:text-accent font-bold transition-colors">News</a></li>
          </ul>
        </nav>

        {/* Featured Games */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map(game => (
            <div key={game.id} className="bg-primary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4 text-center">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2 text-secondary">{game.title}</h3>
              <p className="text-accent text-sm mb-4">{game.description}</p>
              <div className="flex flex-col space-y-2">
                <button className="bg-secondary hover:bg-accent text-primary py-2 rounded transition-colors">
                  Play For Free
                </button>
                <button className="flex items-center justify-center text-accent hover:text-secondary transition-colors">
                  <i className="fas fa-heart mr-2"></i> Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;