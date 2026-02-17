import React from "react";
import profileImg from "../assets/image/animeprofil/luffyprofile.jpg";
import signatureImg from "../assets/image/signaturemyname.png";

import { Palette, Code2, Camera, Outdent } from "lucide-react";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const About = () => {
  useAOS();
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-24 bg-white ">
  <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

    {/* Section Title */}
    <div className="relative pb-16">
      <div className="flex items-center gap-3">
        <h2 className=" dark:bg-gray-800 text-4xl font-bold tracking-wide leading-none">
          {t('about.title')}
        </h2>
        <span className="inline-block w-28 h-px bg-blue-600"></span>
      </div>

      <p className="mt-2 text-base font-medium text-gray-500">
        {t('about.subtitle')}
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT - Profile */}
      <div className="flex flex-col items-center" data-aos="fade-right" data-aos-delay="200">

        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-10">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <img
            src={signatureImg}
            alt="Signature"
            className="max-w-[200px] mx-auto mb-4 opacity-80"
          />
          <p className="italic  max-w-xs mx-auto">
            {t('about.tagline')}
          </p>
        </div>
      </div>

      {/* RIGHT - Content */}
      <div>

        {/* Intro */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.intro')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">

          <div className="dark:bg-gray-800 p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center" data-aos="zoom-in" data-aos-delay="400">
            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
              <Code2 />
            </div>
            <h4 className="font-semibold text-lg mb-2">{t('about.frontend')}</h4>
            <p className="text-gray-500 text-sm">
              {t('about.frontendDesc')}
            </p>
          </div>

          <div className="dark:bg-gray-800 p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center" data-aos="zoom-in" data-aos-delay="450">
            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
              <Palette />
            </div>
            <h4 className="font-semibold text-lg mb-2">{t('about.backend')}</h4>
            <p className="text-gray-500 text-sm">
              {t('about.backendDesc')}
            </p>
          </div>

          <div className="dark:bg-gray-800 p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center" data-aos="zoom-in" data-aos-delay="500">
            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
              <Outdent />
            </div>
            <h4 className="font-semibold text-lg mb-2">{t('about.tools')}</h4>
            <p className="text-gray-500 text-sm">
              {t('about.toolsDesc')}
            </p>
          </div>

        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-12">

          <div className="dark:bg-gray-800 flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600" data-aos="fade-up" data-aos-delay="400">
            <span className="font-bold text-blue-600 text-lg w-20">2023</span>
            <p className="text-gray-600">
              {t('about.timeline2023')}
            </p>
          </div>

          <div className="dark:bg-gray-800 flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600" data-aos="fade-up" data-aos-delay="450">
            <span className="font-bold text-blue-600 text-lg w-20">2024</span>
            <p className="text-gray-600">
              {t('about.timeline2024')}
            </p>
          </div>

          <div className="dark:bg-gray-800 flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600" data-aos="fade-up" data-aos-delay="500">
            <span className="font-bold text-blue-600 text-lg w-20">2025</span>
            <p className="text-gray-600">
              {t('about.timeline2025')}
            </p>
          </div> 

        </div>

        {/* CTA */}
        <div className="text-center lg:text-left">

          <div className="dark:bg-gray-800 inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-full px-6 py-3 mb-8">
            <span className="text-xl">💻</span>
            <span className=" font-medium">
              {t('about.motivation')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {t('about.viewWork')}
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              {t('about.downloadCV')}
            </a>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

    
  );
};

export default About;
