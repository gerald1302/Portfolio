import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import img3 from "../assets/image/animeprofil/luffyprofile.jpg";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
  const offset = 80; // hauteur navbar
  const element = document.getElementById(id);

  if (element) {
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  setIsOpen(false);
};



  return (
    <>
      {/* Top Navbar */}
      
      {/* no AOS animation on the header – elements without a data-aos attribute are ignored, but we can be explicit */}
      <nav data-aos="none" className="bg-white dark:bg-gray-800  bg-white fixed w-full top-0 z-40">
  <div className="bg-white dark:bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
    
    {/* Gauche : ThemeToggle + LanguageSwitcher (language switcher hidden on mobile) */}
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      <div className="hidden sm:block">
        <LanguageSwitcher />
      </div>
    </div>

    {/* Droite : Menu */}
    <button
       className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
      onClick={() => setIsOpen(true)}
    >
      <Menu size={30} />
    </button>

  </div>
</nav>


      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-blue-900 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center mt-20 mb-8">
          <img
            src={img3}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white mb-3"
          />
          <h2 className="text-xl font-bold">Jean Gerald</h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://web.facebook.com/jean.gerald.50767"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="cursor-pointer hover:text-blue-300 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/jean_gerald1302"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="cursor-pointer hover:text-blue-300 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jean-gerald-razafindrabetsy-71365235b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="cursor-pointer hover:text-blue-300 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Menu */}
        <ul className="space-y-5 text-lg font-medium px-10">
  <li
    onClick={() => scrollToSection("hero")}
    className="cursor-pointer hover:text-blue-300"
  >
    {t('nav.home')}
  </li>

  <li
    onClick={() => scrollToSection("about")}
    className="cursor-pointer hover:text-blue-300"
  >
    {t('nav.about')}
  </li>

  <li
    onClick={() => scrollToSection("portfolio")}
    className="cursor-pointer hover:text-blue-300"
  >
    {t('nav.portfolio')}
  </li>

  <li
    onClick={() => scrollToSection("contact")}
    className="cursor-pointer hover:text-blue-300"
  >
    {t('nav.contact')}
  </li>

  {/* on mobile, show language toggle inside sidebar so it doesn’t push the hamburger icon */}
  <li className="mt-6 border-t pt-4 flex justify-center">
    <LanguageSwitcher />
  </li>
</ul>

      </div>
     

    </>
  );
}
