import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import img3 from "../assets/image/animeprofil/luffyprofile.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white fixed w-full top-0 z-40 ">
       <div className="w-full px-4 py-3 flex justify-end items-center">

          <button
            className="text-gray-800 hover:text-gray-600"
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
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">About</li>
          <li className="hover:text-blue-300 cursor-pointer">Resume</li>
          <li className="hover:text-blue-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-300 cursor-pointer">Services</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  );
}
