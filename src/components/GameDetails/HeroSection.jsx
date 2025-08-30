export default function HeroSection({ game }) {
  const trailerUrl = game.trailer_url || ""; 

  return (
    <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {trailerUrl ? (
        <iframe
            src={trailerUrl}
            className="absolute inset-0 w-full h-full object-cover"
            allow="autoplay; muted; loop"
            title={`${game.title} Trailer`}
            loading="lazy"
        />
        ) : (
        <img
            src={game.cover_image}
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover"
        />
        )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-dark)]/95" />
      <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--accent-gold)]">{game.title}</h1>
        <p className="text-lg text-[var(--text-secondary)] mt-2">{game.description.slice(0, 150)}...</p>
        <div className="flex gap-4 mt-4">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[#FFB700] text-black font-bold">{game.price === 0 ? "Free" : `$${game.price}`}</span>
          <span className="px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">{game.rating} ⭐</span>
        </div>
      </div>
    </div>
  );
}