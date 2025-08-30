import { motion } from "framer-motion";

export default function ImagesSection({ allImages, activeScreenshot, setActiveScreenshot, openLightboxAt, gameTitle }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.img 
        src={allImages[activeScreenshot]} 
        alt={`${gameTitle} preview`} 
        className="rounded-xl shadow-xl w-full object-cover border-2 border-[var(--accent-gold)] cursor-zoom-in" 
        whileHover={{ scale: 1.03 }} 
        onClick={() => openLightboxAt(activeScreenshot)} 
        loading="lazy" 
      />
      <div className="flex gap-3 overflow-x-auto py-2">
        {allImages.map((src, idx) => (
          <button 
            key={idx} 
            onClick={() => setActiveScreenshot(idx)} 
            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition focus:ring-2 focus:ring-[var(--accent-gold)] ${activeScreenshot === idx ? "border-[var(--accent-gold)]" : "border-transparent hover:border-gray-600"}`}
          >
            <img src={src} alt={`${gameTitle} thumb ${idx}`} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}