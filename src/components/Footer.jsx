import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  useAOS();
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 dark:bg-gray-950 text-gray-200 dark:text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Copyright */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-sm">
            © {year}{" "}
            <strong className="text-white px-1">Jean Gerald</strong>
            . {t('footer.rights')}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="200">
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-link hover:text-sky-400 hover:border-sky-400"
          >
            <Twitter size={18} />
          </a> */}

          <a
            href="https://web.facebook.com/jean.gerald.50767"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link hover:text-blue-500 hover:border-blue-500"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://www.instagram.com/jean_gerald1302"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link hover:text-pink-500 hover:border-pink-500"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://linkedin.com/in/jean-gerald-razafindrabetsy-71365235b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link hover:text-blue-400 hover:border-blue-400"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Credits */}
        <div className="text-center text-xs mt-6">
          Conçu avec ❤️ par{" "}
          <span className="text-white font-medium">Jean Gerald</span>
        </div>
      </div>
    </footer>
  );
}
