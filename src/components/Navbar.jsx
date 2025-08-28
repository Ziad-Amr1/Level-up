// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  logoUrl = "/logo-2.png",
  brand = "LEVEL UP",
  links = [
    { label: "Home", href: "/" },
    { label: "Store", href: "/store" },
    { label: "Community", href: "/community" },
  ],
  signHref = "/sign",
  loginHref = "/login",
  onLogin,
  currentPath,
  profileNode,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);
  const navRef = useRef(null);

  const pathname = useMemo(() => {
    if (typeof currentPath === "string") return currentPath;
    if (typeof window !== "undefined") return window.location.pathname;
    return "/";
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const DEBUG = false;
    const hero = document.querySelector(".hero");

    const getScrollTop = () => {
      if (typeof window === "undefined") return 0;
      const el = document.scrollingElement || document.documentElement || document.body;
      return window.pageYOffset ?? el.scrollTop ?? 0;
    };

    if (hero) {
      if (DEBUG) console.debug("[Navbar] using IntersectionObserver on .hero");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setScrolled(!entry.isIntersecting);
            if (DEBUG) console.debug("[Navbar][IO] isIntersecting:", entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );
      io.observe(hero);
      return () => io.disconnect();
    }

    const scrollEl = document.scrollingElement || document.documentElement || document.body;
    if (DEBUG) console.debug("[Navbar] no .hero found — using scroll listener on:", scrollEl);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = getScrollTop();
        if (DEBUG) console.debug("[Navbar][scroll] y:", y);
        setScrolled(y > 30);
        ticking = false;
      });
    };

    onScroll();
    scrollEl.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    function handleClick(e) {
      if (!mobileRef.current) return;
      if (!mobileRef.current.contains(e.target)) setMobileOpen(false);
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const mobileVariants = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.18, ease: "easeIn" } },
  };

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 h-20 flex items-center transition-all duration-300
        ${scrolled ? "bg-[#051f30]/70 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logoUrl} alt={brand} className="h-8 w-auto" />
          <span className="text-xl font-orbitron font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            {brand}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.endsWith(link.href) ||
              pathname === link.href.replace(/\.html$/, "");
            return (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition
                    ${isActive ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {/* underline using scale-x + transform-origin */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 transform transition-transform duration-300
                      ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-right group-hover:scale-x-100"}
                    `}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons (outline style so Hero CTA stays dominant) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={signHref}
            className="px-4 py-2 rounded-full text-sm font-semibold
              border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            Sign Up
          </motion.a>

          {onLogin ? (
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="px-4 py-2 rounded-full text-sm font-semibold
                border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </motion.button>
          ) : (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={loginHref}
              className="px-4 py-2 rounded-full text-sm font-semibold
                border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </motion.a>
          )}

          {profileNode && <div className="ml-1">{profileNode}</div>}

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700 text-yellow-300 transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown (AnimatePresence for exit animation) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileRef}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileVariants}
            className="md:hidden absolute top-20 inset-x-0 bg-[#051f30]/95 backdrop-blur-lg shadow-lg px-6 py-6 flex flex-col gap-4"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-yellow-300 transition text-base font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-2">
              <a
                href={signHref}
                className="px-4 py-2 text-center rounded-full text-sm font-semibold
                  border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                Sign Up
              </a>

              <a
                href={loginHref}
                className="px-4 py-2 text-center rounded-full text-sm font-semibold
                  border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                Login
              </a>

              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700 text-yellow-300 transition w-fit self-center"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
