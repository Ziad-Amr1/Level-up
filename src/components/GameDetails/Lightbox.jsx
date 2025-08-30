import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export default function Lightbox({ open, images, active, onClose, onNext, onPrev, onSelect }) {
  if (!open) return null;
  const handlers = useSwipeable({ onSwipedLeft: onNext, onSwipedRight: onPrev, preventScrollOnSwipe: true });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose} {...handlers}>
      <div className="relative max-w-4xl w-[92%] mx-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 bg-[var(--card-bg)]/60 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Close">
          <i className="fas fa-times" />
        </button>
        <button onClick={onPrev} className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--card-bg)]/50 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Previous">
          <i className="fas fa-chevron-left" />
        </button>
        <button onClick={onNext} className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--card-bg)]/50 p-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition" aria-label="Next">
          <i className="fas fa-chevron-right" />
        </button>
        <motion.img src={images[active]} alt={`${images[0].split('/').pop()} screenshot ${active + 1}`} className="rounded-lg w-full max-h-[80vh] object-contain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} loading="lazy" />
        <div className="mt-3 flex gap-2 overflow-x-auto py-2">
          {images.map((src, idx) => (
            <button key={idx} onClick={() => onSelect(idx)} className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] ${active === idx ? "border-[var(--accent-gold)]" : "border-transparent hover:border-gray-500"}`}>
              <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}