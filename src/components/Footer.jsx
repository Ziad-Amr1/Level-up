import { FaFacebook, FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-text-secondary border-t border-accent-gold/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-Orbitron text-text-primary">LEVEL UP</h2>
            <p className="text-sm text-text-secondary">
              Level up your gaming experience with the latest releases and exclusive deals.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-accent-gold transition"><FaFacebook /></a>
            <a href="#" className="hover:text-accent-gold transition"><FaDiscord /></a>
            <a href="#" className="hover:text-accent-gold transition"><FaTwitter /></a>
            <a href="#" className="hover:text-accent-gold transition"><FaInstagram /></a>
            <a href="#" className="hover:text-accent-gold transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-secondary/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent-gold">Terms of Service</a>
            <a href="#" className="hover:text-accent-gold">Privacy Policy</a>
          </div>
          <span className="text-text-secondary text-sm">
            © 2025 Level Up Website. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
