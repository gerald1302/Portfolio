import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import img2 from "../assets/image/animeprofil/gear5.jpg";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";


const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web", "Full Stack", "Mobile"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};


  return (
    <section className="bg-gray-50 dark:bg-gray-900 relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Background */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl absolute inset-0 bg-[url('/assets/bg/abstract-bg-1.webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="  text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Développeur{" "}
              <span className=" text-blue-600">
                <span ref={typedRef}></span>
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Je conçois des solutions web modernes en alliant créativité et rigueur technique.
              À travers mes réalisations, je transforme des idées en applications concrètes,
              performantes et adaptées aux besoins réels.
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">7+</h3>
                <p className="text-gray-500 text-sm">Projets réalisés</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">4+</h3>
                <p className="text-gray-500 text-sm">Années d’expérience</p>
              </div>

              {/* <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div> */}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <button
              onClick={() => handleScroll("portfolio")}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold"
            >
              Voir mes projets
            </button>


              <button
                onClick={() => handleScroll("contact")}
                className="px-8 py-3 rounded-full border-2 border-gray-300 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                Me contacter
              </button>
            </div>

            {/* SOCIALS */}
            <div className=" flex justify-center lg:justify-start gap-4">
                 <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-link hover:text-sky-400 hover:border-sky-400"
          >
            <Twitter size={18} />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link hover:text-blue-500 hover:border-blue-500"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link hover:text-pink-500 hover:border-pink-500"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link hover:text-blue-400 hover:border-blue-400"
          >
            <Linkedin size={18} />
          </a>
                </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <div className="relative max-w-md">

              {/* Overlay */}
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 z-0"></div>

              {/* Image */}
              <img
                src={img2}
                alt="Hero"
                className="relative z-10 rounded-2xl shadow-2xl"
              />

             {/* Floating cards (au-dessus de l’image) */}
                <div className=" text-gray-800 absolute -top-6 -left-6 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-float">
                <i className="bi bi-palette text-blue-600 text-xl"></i>
                <span className="font-semibold">Frontend</span>
                </div>

                <div className=" text-gray-800 absolute top-1/2 -right-10 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatSlow">
                <i className="bi bi-code-slash text-blue-600 text-xl"></i>
                <span className="font-semibold">Backend</span>
                </div>

                <div className=" text-gray-800 absolute bottom-4 -left-8 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatFast">
                <i className="bi bi-lightning text-blue-600 text-xl"></i>
                <span className="font-semibold">Solutions </span>
                </div>


        </div>
        </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;

