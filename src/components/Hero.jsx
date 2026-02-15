import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import img2 from "../assets/image/animeprofil/gear5.jpg";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";


const Hero = () => {
  useAOS();
  const { t, language } = useLanguage();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: language === 'fr' ? ["Web", "Full Stack", "Mobile"] : ["Web", "Full Stack", "Mobile"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [language]);

  const handleScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};


  return (
    <section id="hero" className="bg-gray-50 dark:bg-gray-900 relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Background */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl absolute inset-0 bg-[url('/assets/bg/abstract-bg-1.webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="  text-center lg:text-left" data-aos="fade-right" data-aos-delay="100">

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}{" "}
              <span className=" text-blue-600">
                <span ref={typedRef}></span>
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="200">
              {t('hero.description')}
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mb-10" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">7+</h3>
                <p className="text-gray-500 text-sm">{t('hero.projectsCount')}</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">4+</h3>
                <p className="text-gray-500 text-sm">{t('hero.yearsCount')}</p>
              </div>

              {/* <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div> */}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10" data-aos="fade-up" data-aos-delay="400">
              <button
              onClick={() => handleScroll("portfolio")}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold"
            >
              {t('hero.viewWork')}
            </button>


              <button
                onClick={() => handleScroll("contact")}
                className="px-8 py-3 rounded-full border-2 border-gray-300 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                {t('hero.getInTouch')}
              </button>
            </div>

            {/* SOCIALS */}
            <div className=" flex justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
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

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center" data-aos="fade-left" data-aos-delay="200">

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
                <div className=" text-gray-800 absolute -top-6 -left-6 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-float" data-aos="zoom-in" data-aos-delay="300">
                <i className="bi bi-palette text-blue-600 text-xl"></i>
                <span className="font-semibold">Frontend</span>
                </div>

                <div className=" text-gray-800 absolute top-1/2 -right-10 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatSlow" data-aos="zoom-in" data-aos-delay="400">
                <i className="bi bi-code-slash text-blue-600 text-xl"></i>
                <span className="font-semibold">Backend</span>
                </div>

                <div className=" text-gray-800 absolute bottom-4 -left-8 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatFast" data-aos="zoom-in" data-aos-delay="500">
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

