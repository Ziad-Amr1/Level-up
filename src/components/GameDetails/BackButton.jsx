// src/components/GameDetails/BackButton.jsx
import { ArrowLeft } from "lucide-react"; // أيقونة أنظف من font-awesome

export default function BackButton({ navigate }) {
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2
                 bg-[var(--card-bg)]/70 backdrop-blur-md
                 text-[var(--accent-gold)] border border-[var(--accent-gold)]
                 rounded-full shadow-lg
                 hover:bg-[var(--accent-gold)] hover:text-black
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] z-40"
      aria-label="Go back"
    >
      <ArrowLeft size={18} />
      <span className="hidden md:inline font-medium">Back</span>
    </button>
  );
}
