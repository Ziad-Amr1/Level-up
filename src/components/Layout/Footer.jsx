// src/components/Footer.jsx
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Games", href: "/games" },
        { label: "Store", href: "/store" },
        { label: "Gift Cards", href: "/gifts" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socials = [
    { icon: <FaFacebook />, href: "#", hover: "hover:text-[#1877F2]" }, // blue
    { icon: <FaTwitter />, href: "#", hover: "hover:text-[#1DA1F2]" }, // Cyan
    { icon: <FaDiscord />, href: "#", hover: "hover:text-[#5865F2]" }, // Blurple
    { icon: <FaInstagram />, href: "#", hover: "hover:text-[#E4405F]" }, // Rose red
    { icon: <FaYoutube />, href: "#", hover: "hover:text-[#FF0000]" }, // red
  ];

  return (
    <footer className="mt-0 bg-gradient-to-br from-[var(--secondary-dark)] via-[var(--primary-dark)] to-[var(--primary-dark)] text-text-secondary border-t border-[var(--accent-gold)]/50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & description */}
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-white">LEVEL UP</h2>
          <p className="mt-4 text-sm">
            Level up your gaming experience with our exclusive collection of games
            and content.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className={`text-2xl transition-colors duration-300 hover:scale-110 ${s.hover}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h3>
          <ul className="space-y-2">
            {section.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative inline-block text-sm text-text-secondary transition-colors duration-300
                            hover:text-[var(--accent-gold)]
                            after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0
                            after:bg-[var(--accent-gold)] after:transition-all after:duration-300
                            hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mb-4 border-t border-[var(--accent-gold)]/20 mt-8 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Level Up. All rights reserved.
      </div>
    </footer>
  );
}
