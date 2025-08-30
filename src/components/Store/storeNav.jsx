// src/components/storeNav.jsx
export default function StoreNav() {
  const links = ["Discover", "Browse", "News"];

  return (
    <nav className="store-nav flex justify-center bg-[var(--secondary-dark)] pb-6 pt-8">
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link} className="text-lg font-semibold">
            <a
              href="#"
              className="relative px-3 py-2 text-white hover:text-[var(--accent-gold)] transition-colors duration-300 group"
            >
              {link}
              {/* underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
