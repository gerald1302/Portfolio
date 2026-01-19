import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import img2 from "../assets/image/animeprofil/gear5.jpg";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Designer", "Developer", "Freelancer", "Basketeur"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/assets/bg/abstract-bg-1.webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Creative{" "}
              <span className="text-blue-600">
                <span ref={typedRef}></span>
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              I create digital experiences that inspire and engage. With a passion for clean
              design and innovative solutions, I transform ideas into beautiful, functional realities.
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#portfolio"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                Get In Touch
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex justify-center lg:justify-start gap-4">
                <a className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-blue-600 hover:text-white transition">
                    <FaTwitter className="text-2xl" />
                </a>
                <a className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-blue-600 hover:text-white transition">
                    <FaLinkedin className="text-2xl" />
                </a>
                <a className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-blue-600 hover:text-white transition">
                    <FaGithub className="text-2xl" />
                </a>
                <a className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-blue-600 hover:text-white transition">
                    <FaInstagram className="text-2xl" />
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
                <div className="absolute -top-6 -left-6 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-float">
                <i className="bi bi-palette text-blue-600 text-xl"></i>
                <span className="font-semibold">UI/UX Design</span>
                </div>

                <div className="absolute top-1/2 -right-10 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatSlow">
                <i className="bi bi-code-slash text-blue-600 text-xl"></i>
                <span className="font-semibold">Development</span>
                </div>

                <div className="absolute bottom-4 -left-8 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2 z-20 animate-floatFast">
                <i className="bi bi-lightning text-blue-600 text-xl"></i>
                <span className="font-semibold">Creative Ideas</span>
                </div>


        </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

