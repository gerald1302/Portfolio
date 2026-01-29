import { Code,Code2, Server,Settings, Palette, Cloud, Trophy, GitBranch, Users } from "lucide-react";
import React from "react";
import ThemeToggle from "../components/ThemeToggle";
const skillsData = [
  {
    title: "Frontend",
    icon: <Code2 />,
    skills: [
      { name: "React.js", percent: 75 },
      { name: "Tailwind CSS", percent: 80 },
      { name: "Material UI", percent: 70 },
      { name: "HTML / CSS", percent: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <Server />,
    skills: [
      { name: "Node.js", percent: 70 },
      { name: "Express.js", percent: 75 },
      { name: "Prisma ORM", percent: 65 },
      { name: "PostgreSQL", percent: 70 },
    ],
  },
  {
    title: "Autres technologies",
    icon: <Settings />,
    skills: [
      { name: "Git / GitHub", percent: 80 },
      { name: "API REST", percent: 75 },
      { name: "JWT / Auth", percent: 65 },
      { name: "React Native (Mobile)", percent: 65 },
      { name: "Python / PHP (bases)", percent: 55 },
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none dark:bg-gray-800">
              Compétences
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            Technologies que j’utilise dans mes projets web
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Grid */}
          <div className=" lg:col-span-2 grid md:grid-cols-2 gap-8">
            {skillsData.map((card, index) => (
              <div
                key={index}
                className="dark:bg-gray-800 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold ">
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {card.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium ">
                          {skill.name}
                        </span>
                        <span className="font-bold text-blue-600">
                          {skill.percent}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Summary */}
          <div className=" dark:bg-gray-800 bg-white rounded-2xl p-10 shadow-lg h-fit lg:sticky top-24">

            <h3 className="text-2xl font-bold  mb-4">
              Profil technique
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              Développeur web orienté projets concrets, avec une bonne maîtrise
              du frontend et une solide base backend. J’accorde une grande
              importance à la qualité du code et à la logique métier.
            </p>

            <div className="space-y-6 mb-10">
              <Stat icon={<Trophy />} number="10+" label="Projets réalisés" />
              <Stat icon={<GitBranch />} number="100+" label="Commits Git" />
              <Stat icon={<Users />} number="3+" label="Applications complètes" />
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Axes de progression
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "API REST",
                  "Authentification",
                  "Architecture MVC",
                  "Bonnes pratiques Git",
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-500"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, number, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white">
        {icon}
      </div>
      <div>
        <span className="block text-xl font-bold text-gray-800">{number}</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
    </div>
  );
}
