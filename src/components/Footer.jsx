// src/components/Footer.jsx
import { FaFacebook, FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-secondary-light border-t-2 border-accent-gold py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          {/* Info */}
          <div>
            <h4 className="text-accent-gold text-sm font-semibold uppercase tracking-wide mb-4">
              Info
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-gold transition">About Us</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Pricing</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">FAQ</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-accent-gold text-sm font-semibold uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-gold transition">Developer API</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Tools</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Compression</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-accent-gold text-sm font-semibold uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-gold transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Careers</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Partners</a></li>
              <li><a href="#" className="hover:text-accent-gold transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-accent-gold text-sm font-semibold uppercase tracking-wide mb-4">
              Get Game Updates
            </h4>
            <form className="flex max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-white/10 border border-accent-gold text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <button
                type="submit"
                className="bg-accent-gold text-primary-dark px-4 py-2 rounded-r-lg font-semibold hover:bg-transparent hover:text-accent-gold hover:border hover:border-accent-gold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 mt-10 pt-6 gap-4">
          {/* Legal */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent-gold transition">Terms of Service</a>
            <a href="#" className="hover:text-accent-gold transition">Privacy Policy</a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2025 Level Up website
          </div>

          {/* Social */}
          <div className="flex gap-6 text-xl">
            <a href="#" aria-label="Facebook Page" className="hover:text-accent-gold transition"><FaFacebook /></a>
            <a href="#" aria-label="Discord Server" className="hover:text-accent-gold transition"><FaDiscord /></a>
            <a href="#" aria-label="Twitter Profile" className="hover:text-accent-gold transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram Page" className="hover:text-accent-gold transition"><FaInstagram /></a>
            <a href="#" aria-label="YouTube Channel" className="hover:text-accent-gold transition"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}