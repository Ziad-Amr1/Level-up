import React from 'react';

const PreviewSection = () => {
  const games = [
    {
      id: 1,
      image: "assets/call-of-duty.jpg",
      title: "Call of Duty"
    },
    {
      id: 2,
      image: "assets/horizon-zero-dawn.jpg",
      title: "Horizon Zero Dawn"
    },
    {
      id: 3,
      image: "assets/genshin-impact-xbox.jpg",
      title: "Genshin Impact"
    },
    {
      id: 4,
      image: "assets/venom-vs-spiderman.jpg",
      title: "Spiderman 2"
    },
    {
      id: 5,
      image: "assets/wwe-2k25-undertaker.jpg",
      title: "WWE 2K25 Undertaker"
    }
  ];

  return (
    <section className="py-16 bg-background px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Game Preview */}
          <div className="lg:w-3/4 h-96 relative">
            <img src="assets/call-of-duty.jpg" alt="Call of Duty" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Call of Duty</h3>
              <p className="text-accent mb-4 max-w-md">
                Call of Duty is a first-person shooter video game developed by Activision and published by Activision.
              </p>
              <div className="flex space-x-4">
                <button className="bg-secondary hover:bg-accent text-primary py-2 px-6 rounded transition-colors">
                  Play For Free
                </button>
                <button className="flex items-center text-accent hover:text-secondary transition-colors">
                  <i className="fas fa-heart mr-2"></i> Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Games List */}
          <div className="lg:w-1/4 h-96 bg-primary rounded-lg p-4 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 text-secondary">Popular Games</h3>
            <ul className="space-y-4">
              {games.map(game => (
                <li key={game.id} className="flex items-center gap-3 p-2 bg-background hover:bg-primary rounded transition-colors">
                  <img src={game.image} alt={game.title} className="w-16 h-16 object-cover rounded" />
                  <span className="font-medium text-secondary">{game.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;