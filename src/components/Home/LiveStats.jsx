import { useEffect, useState } from "react";

export default function LiveStats({ games = 1257, players = 2243 }) {
  const [liveGames, setLiveGames] = useState(0);
  const [onlinePlayers, setOnlinePlayers] = useState(0);

  // Counter animation function
  const animateCounter = (setter, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      setter(Math.floor(start));
    }, 16);
  };

  useEffect(() => {
    animateCounter(setLiveGames, games);
    animateCounter(setOnlinePlayers, players);
  }, [games, players]);

  return (
    <section className="relative overflow-hidden text-center mt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 border border-blue-600 rounded-xl p-4 flex justify-center items-center">
          <p className="text-lg md:text-xl text-gray-300">
            <span className="text-yellow-400 font-bold">{liveGames.toLocaleString()}</span>{" "}
            games available |{" "}
            <span className="text-yellow-400 font-bold">{onlinePlayers.toLocaleString()}</span>{" "}
            players online
          </p>
        </div>
      </div>
    </section>
  );
}
