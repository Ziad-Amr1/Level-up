// src/components/storeHero.jsx
export default function StoreHero() {
  return (
    <header
      className="hero relative text-center pt-20 border-b-2 border-yellow-500 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay مع Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20"></div>

      {/* hero content */}
      <div className="relative p-8">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          Game Store
        </h1>
        <p className="text-xl text-gray-200 mt-2 drop-shadow">
          Discover the latest titles
        </p>
      </div>
    </header>
  );
}
