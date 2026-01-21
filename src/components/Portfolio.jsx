import { useState } from "react";
import { Grid, ArrowUpRight, Expand } from "lucide-react";

// Images (à adapter selon ton projet)
import img1 from "../assets/image/portfolio/portfolio-1.webp.jpg";
import img2 from "../assets/image/portfolio/portfolio-2.webp.jpg";
import img4 from "../assets/image/portfolio/portfolio-4.webp.jpg";
import img5 from "../assets/image/portfolio/portfolio-5.webp.jpg";
import img7 from "../assets/image/portfolio/portfolio-6.webp.jpg";
import img8 from "../assets/image/portfolio/portfolio-4.webp.jpg";
import img10 from "../assets/image/portfolio/portfolio-2.webp.jpg";
import img11 from "../assets/image/portfolio/portfolio-1.webp.jpg";

const filters = [
  { name: "All Projects", value: "all", icon: <Grid size={18} /> },
  { name: "UI/UX", value: "ui" },
  { name: "Development", value: "development" },
  { name: "Photography", value: "photography" },
  { name: "Marketing", value: "marketing" },
];

const projects = [
  { title: "Mobile Banking App", category: "ui", image: img1 },
  { title: "Smart Home Interface", category: "ui", image: img2 },
  { title: "E-Learning Platform", category: "development", image: img10 },
  { title: "Cloud Management System", category: "development", image: img11 },
  { title: "Urban Architecture", category: "photography", image: img7 },
  { title: "Nature Collection", category: "photography", image: img8 },
  { title: "Social Media Campaign", category: "marketing", image: img4 },
  { title: "Brand Strategy", category: "marketing", image: img5 },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none text-gray-800">
              Portfolio
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            Some of my recent creative work
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
              {filter.icon && filter.icon}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500 w-full">

                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>

                  <h3 className="text-white text-xl font-semibold mt-2 mb-4">
                    {project.title}
                  </h3>

                  <div className="flex gap-4">
                    <button className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition">
                      <Expand size={20} />
                    </button>

                    <button className="w-11 h-11 flex items-center justify-center bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition">
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
