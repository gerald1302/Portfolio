import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import img3 from "../assets/image/animeprofil/luffyprofile.jpg";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
      
      <nav className="bg-white dark:bg-gray-800  bg-white fixed w-full top-0 z-40">
  <div className="bg-white dark:bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
    
    {/* Gauche : ThemeToggle */}
    <div className="flex items-center">
      <ThemeToggle />
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
          <Facebook className="cursor-pointer hover:text-blue-300" />
          <Instagram className="cursor-pointer hover:text-blue-300" />
          <Twitter className="cursor-pointer hover:text-blue-300" />
          <Linkedin className="cursor-pointer hover:text-blue-300" />
        </div>

        {/* Menu */}
        <ul className="space-y-5 text-lg font-medium px-10">
  <li
    onClick={() => scrollToSection("hero")}
    className="cursor-pointer hover:text-blue-300"
  >
    Home
  </li>

  <li
    onClick={() => scrollToSection("about")}
    className="cursor-pointer hover:text-blue-300"
  >
    About
  </li>

  <li
    onClick={() => scrollToSection("portfolio")}
    className="cursor-pointer hover:text-blue-300"
  >
    Portfolio
  </li>

  <li
    onClick={() => scrollToSection("contact")}
    className="cursor-pointer hover:text-blue-300"
  >
    Contact
  </li>
</ul>

      </div>
     

    </>
  );
}
