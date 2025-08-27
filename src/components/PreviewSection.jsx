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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Preview */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img src="assets/call-of-duty.jpg" alt="Call of Duty" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Call of Duty</h3>
              <p className="text-gray-700 mb-6">
                Call of Duty is a first-person shooter video game developed by Activision and published by Activision.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors">
                  Play For Free
                </button>
                <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                  <i className="fas fa-heart mr-2"></i> Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Games List */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold mb-4">Popular Games</h3>
            <ul className="space-y-4">
              {games.map(game => (
                <li key={game.id} className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded transition-colors">
                  <img src={game.image} alt={game.title} className="w-16 h-16 object-cover rounded" />
                  <span className="font-medium">{game.title}</span>
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