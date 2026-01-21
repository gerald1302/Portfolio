import React from "react";
// import profileImg from "../assets/profile/profile-square-1.webp";
// import signatureImg from "../assets/misc/signature-1.webp";
import profileImg from "../assets/image/animeprofil/luffyprofile.jpg";
import signatureImg from "../assets/image/signaturemyname.png";

import { Palette, Code2, Camera } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        {/* Section Title */}
        <div className="relative pb-16">

          <div className="flex items-center  gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none text-gray-800">
              About
            </h2>

            {/* Ligne fine */}
            <span className="inline-block w-28 h-px bg-blue-600"></span>
          </div>

          <p className="mt-2 text-base font-medium text-gray-500">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - Profile */}
          <div className="flex flex-col items-center">

            {/* Profile Image */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-10">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Signature */}
            <div className="text-center">
              <img
                src={signatureImg}
                alt="Signature"
                className="max-w-[200px] mx-auto mb-4 opacity-80"
              />
              <p className="italic text-gray-500 max-w-xs mx-auto">
                Building meaningful digital experiences through creative code.
              </p>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div>

            {/* Intro */}
            <div className="mb-12 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm Brandon — a Creative Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">

              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center">
                <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                  <Palette />
                </div>
                <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                <p className="text-gray-500 text-sm">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                </p>
              </div>

              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center">
                <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                  <Code2 />
                </div>
                <h4 className="font-semibold text-lg mb-2">Frontend Dev</h4>
                <p className="text-gray-500 text-sm">
                  Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                </p>
              </div>

              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-lg transition text-center">
                <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                  <Camera />
                </div>
                <h4 className="font-semibold text-lg mb-2">Photography</h4>
                <p className="text-gray-500 text-sm">
                  Vestibulum ac diam sit amet quam vehicula elementum
                </p>
              </div>

            </div>

            {/* Timeline */}
            <div className="space-y-6 mb-12">

              <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                <span className="font-bold text-blue-600 text-lg w-20">2019</span>
                <p className="text-gray-600">
                  Graduated with B.A. in Digital Design from Creative University
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                <span className="font-bold text-blue-600 text-lg w-20">2020</span>
                <p className="text-gray-600">
                  Joined InnovateTech as Junior Frontend Developer
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                <span className="font-bold text-blue-600 text-lg w-20">2023</span>
                <p className="text-gray-600">
                  Launched freelance career specializing in creative web solutions
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">

              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="text-xl">☕</span>
                <span className="text-gray-600 font-medium">
                  Coffee-fueled designer based in Portland
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#portfolio"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  View My Work
                </a>

                <a
                  href="#"
                  className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Download Resume
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
