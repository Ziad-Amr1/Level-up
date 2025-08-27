import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop className="absolute w-full h-full object-cover z-0">
        <source src="assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Level Up</h1>
        <p className="text-xl md:text-2xl mb-8">Your ultimate destination for gaming adventures.</p>
        <a href="store.html" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Explore Games
        </a>
      </div>
    </section>
  );
};

export default Hero;