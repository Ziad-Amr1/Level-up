import { useEffect, useMemo, useState } from "react";

export default function Navbar({
  logoUrl = 'src/images/logo-2.png',
  brand = "LEVEL UP",
  links = [
    { label: "Home", href: "/index.html" },
    { label: "Store", href: "/store.html" },
    { label: "Community", href: "/community.html" },
  ],
  signHref = "/sign.html",
  loginHref = "#",
  onLogin, // optional callback if you don't want a href for Login
  currentPath, // optional: pass to control active link (defaults to window.location.pathname)
  profileNode, // optional: React node to render a user profile avatar/button
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine active link
  const pathname = useMemo(() => {
    if (typeof currentPath === "string") return currentPath;
    if (typeof window !== "undefined") return window.location.pathname;
    return "/";
  }, [currentPath]);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 border-b-2 border-[#FFD700]",
        "h-20 flex items-center transition-all duration-300",
        scrolled
          ? "bg-[rgba(5,31,48,0.95)] backdrop-blur-md"
          : "bg-[#051A2D]",
      ].join(" ")}
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-2 select-none">
          <img
            src={logoUrl}
            alt="Level Up logo"
            className="h-8 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
          <h1
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#FFD700] to-[#FFE55C] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.30)]"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
          >
            {brand}
          </h1>
        </a>

        {/* Hamburger */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#FFD700]/90 md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={
                "block h-0.5 w-5 transition-all " +
                (open ? "translate-y-[7px] rotate-45 bg-white" : "bg-white")
              }
            />
            <span
              className={
                "block h-0.5 w-5 transition-opacity " +
                (open ? "opacity-0" : "opacity-100 bg-white")
              }
            />
            <span
              className={
                "block h-0.5 w-5 transition-all " +
                (open ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-white")
              }
            />
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = pathname.endsWith(l.href) || pathname === l.href || pathname === l.href.replace(/\.html$/, "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    "px-3 py-2 rounded-lg font-medium transition-colors",
                    "text-white/90 hover:text-[#FFD700]",
                    isActive ? "text-[#FFD700] font-semibold" : "",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            );
          })}

          {/* Sign Up */}
          <li className="ml-1">
            <a
              href={signHref}
              className="rounded-2xl border border-[#FFD700] bg-gradient-to-br from-[#FFD700] to-[#D4AF37] px-5 py-1.5 text-sm font-semibold uppercase text-[#051A2D] transition-transform hover:-translate-y-0.5 hover:bg-none hover:text-white"
            >
              Sign Up
            </a>
          </li>

          {/* Login */}
          <li>
            {onLogin ? (
              <button
                onClick={onLogin}
                className="ml-2 rounded-2xl border-2 border-transparent bg-[#0A66C2] px-5 py-1.5 text-sm font-semibold uppercase text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(10,102,194,0.30),_inset_0_4px_8px_rgba(10,102,194,0.30)]"
              >
                Login
              </button>
            ) : (
              <a
                href={loginHref}
                className="ml-2 rounded-2xl border-2 border-transparent bg-[#0A66C2] px-5 py-1.5 text-sm font-semibold uppercase text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(10,102,194,0.30),_inset_0_4px_8px_rgba(10,102,194,0.30)]"
              >
                Login
              </a>
            )}
          </li>

          {/* Profile slot */}
          {profileNode ? <li className="ml-2 flex items-center">{profileNode}</li> : null}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0",
          "w-full bg-[#051A2D]",
        ].join(" ")}
      >
        <ul className="space-y-1 px-4 pb-4 pt-2">
          {links.map((l) => {
            const isActive = pathname.endsWith(l.href) || pathname === l.href || pathname === l.href.replace(/\.html$/, "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    "block w-full rounded-lg px-3 py-2",
                    "text-white/90 hover:text-[#FFD700]",
                    isActive ? "text-[#FFD700] font-semibold" : "",
                  ].join(" ")}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href={signHref}
              className="block w-full rounded-2xl border border-[#FFD700] bg-gradient-to-br from-[#FFD700] to-[#D4AF37] px-4 py-2 text-center text-sm font-semibold uppercase text-[#051A2D]"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </a>
          </li>
          <li>
            {onLogin ? (
              <button
                onClick={() => {
                  setOpen(false);
                  onLogin();
                }}
                className="mt-2 block w-full rounded-2xl border-2 border-transparent bg-[#0A66C2] px-4 py-2 text-center text-sm font-semibold uppercase text-white"
              >
                Login
              </button>
            ) : (
              <a
                href={loginHref}
                className="mt-2 block w-full rounded-2xl border-2 border-transparent bg-[#0A66C2] px-4 py-2 text-center text-sm font-semibold uppercase text-white"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
            )}
          </li>
          {profileNode ? <li className="pt-1">{profileNode}</li> : null}
        </ul>
      </div>
    </nav>
  );
}
