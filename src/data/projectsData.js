import img1 from "../assets/image/portfolio/portfolio-1.webp.jpg";
import img2 from "../assets/image/portfolio/portfolio.jpeg";
import img3 from "../assets/image/portfolio/portfolio-3.webp.jpg";
import img4 from "../assets/image/portfolio/portfolio-4.webp.jpg";
import img5 from "../assets/image/portfolio/Food.jpeg";
import img6 from "../assets/image/portfolio/portfolio-6.webp.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Application de déclaration RNF",
    category: "fullstack",
    image: img1,
    description: "React, Node.js, Express, Prisma, PostgreSQL",
    technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/",
    liveLink: "https://",
    date: "2024",
  },
  {
    id: 2,
    title: "Portfolio personnel",
    category: "frontend",
    image: img2,
    description: "React, TailwindCSS, DataTable",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    githubLink: "https://github.com/gerald1302/Portfolio.git",
    liveLink: "https://raldakoo.vercel.app/",
    date: "2024",
  },
  {
    id: 3,
    title: "API REST de gestion des utilisateurs",
    category: "backend",
    image: img3,
    description: "Node.js, Express, JWT, Prisma",
    technologies: ["Node.js", "Express", "JWT", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/",
    liveLink: "https://",
    date: "2023",
  },
  {
    id: 4,
    title: "Système d'authentification",
    category: "backend",
    image: img4,
    description: "JWT, rôles, permissions",
    technologies: ["Node.js", "JWT", "Express", "PostgreSQL"],
    githubLink: "https://github.com/",
    liveLink: "https://",
    date: "2023",
  },
  {
    id: 5,
    title: "Restaurant Food",
    category: "frontend",
    image: img5,
    description: "React, validation, UX",
    technologies: ["React", "React Hook Form", "TailwindCSS"],
    githubLink: "https://github.com/gerald1302/foodies-restaurant.git",
    liveLink: "https://foodies-restaurant-mauve.vercel.app/",
    date: "2024",
  },
  {
    id: 6,
    title: "Gestion des avis de paiement",
    category: "fullstack",
    image: img6,
    description: "React + API + Base de données",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/",
    liveLink: "https://",
    date: "2024",
  },
];

export const filters = [
  { name: "Tous les projets", value: "all" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Fullstack", value: "fullstack" },
];
