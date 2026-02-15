import { useState } from "react";
import { Grid, ArrowUpRight, Expand, Code2, Server } from "lucide-react";
import React from "react";
import { projectsData, filters } from "../data/projectsData.js";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";

/* -------------------- COMPONENT -------------------- */
export default function Portfolio() {
  useAOS();
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none ">
              {t('portfolio.title')}
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <ul className="flex flex-wrap justify-center gap-4 mb-14" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => {
            const filterNameMap = {
              all: t('portfolio.all'),
              frontend: t('portfolio.frontend'),
              backend: t('portfolio.backend'),
              fullstack: t('portfolio.fullstack')
            };
            return (
            <li
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300
                ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1"
                }`}
            >
              {filter.value === "all" && <Grid size={18} />}
              {filter.value === "frontend" && <Code2 size={18} />}
              {filter.value === "backend" && <Server size={18} />}
              {filterNameMap[filter.value] || filter.name}
            </li>
            );
          })}
        </ul>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay="300"
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500 w-full">

                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>

                  <h3 className="text-white text-lg font-semibold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-200 text-sm mt-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Aperçu du projet"
                        aria-label="Voir le projet en direct"
                        className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
                      >
                        <Expand size={20} />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Code source"
                        aria-label="Voir le code sur GitHub"
                        className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
