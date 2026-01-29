import { useState } from "react";
import { Grid, ArrowUpRight, Expand, Code2, Server } from "lucide-react";
import React from "react";

// Images (adapte selon tes vrais projets)
import img1 from "../assets/image/portfolio/portfolio-1.webp.jpg";
import img2 from "../assets/image/portfolio/portfolio-2.webp.jpg";
import img3 from "../assets/image/portfolio/portfolio-3.webp.jpg";
import img4 from "../assets/image/portfolio/portfolio-4.webp.jpg";
import img5 from "../assets/image/portfolio/portfolio-5.webp.jpg";
import img6 from "../assets/image/portfolio/portfolio-6.webp.jpg";

/* -------------------- FILTERS -------------------- */
const filters = [
  { name: "Tous les projets", value: "all", icon: <Grid size={18} /> },
  { name: "Frontend", value: "frontend", icon: <Code2 size={18} /> },
  { name: "Backend", value: "backend", icon: <Server size={18} /> },
  { name: "Fullstack", value: "fullstack" },
];

/* -------------------- PROJECTS -------------------- */
const projects = [
  {
    title: "Application de déclaration RNF",
    category: "fullstack",
    image: img1,
    description: "React, Node.js, Express, Prisma, PostgreSQL",
  },
  {
    title: "Dashboard Administrateur",
    category: "frontend",
    image: img2,
    description: "React, TailwindCSS, DataTable",
  },
  {
    title: "API REST de gestion des utilisateurs",
    category: "backend",
    image: img3,
    description: "Node.js, Express, JWT, Prisma",
  },
  {
    title: "Système d’authentification",
    category: "backend",
    image: img4,
    description: "JWT, rôles, permissions",
  },
  {
    title: "Formulaire multi-étapes",
    category: "frontend",
    image: img5,
    description: "React, validation, UX",
  },
  {
    title: "Gestion des avis de paiement",
    category: "fullstack",
    image: img6,
    description: "React + API + Base de données",
  },
];

/* -------------------- COMPONENT -------------------- */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none ">
              Projets
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            Une sélection de projets réalisés et en cours de développement
          </p>
        </div>

        {/* Filters */}
        <ul className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((filter) => (
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
              {filter.icon}
              {filter.name}
            </li>
          ))}
        </ul>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
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
                    <button
                      title="Aperçu"
                      className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
                    >
                      <Expand size={20} />
                    </button>

                    <button
                      title="Voir le code"
                      className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
                    >
                      <ArrowUpRight size={20} />
                    </button>
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
