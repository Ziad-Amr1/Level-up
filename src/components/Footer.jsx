// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Games", href: "/store" },
        { label: "Gift Cards", href: "/gift-cards" },
        { label: "Membership", href: "/membership" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
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

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaDiscord />, href: "https://discord.com" },
  ];

  return (
    <footer className="bg-secondary-dark text-text-secondary border-t border-accent-gold/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <img src="/logo-2.png" alt="Level Up Logo" className="h-12 mb-4" />
          <p className="text-sm text-text-secondary">
            Level Up – your ultimate gaming destination. Discover, play, and level up your experience!
          </p>
        </div>

        {/* Footer Navigation */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-text-primary font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-accent-gold transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-gold/20 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Level Up. All rights reserved.
          </p>
          <div className="flex gap-4 text-lg text-text-secondary">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
