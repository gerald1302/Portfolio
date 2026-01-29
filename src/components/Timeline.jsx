import { Briefcase, GraduationCap } from "lucide-react";

const data = [
  {
    year: "2023 - PRESENT",
    type: "experience",
    title: "Développeur Web",
    place: "Osmosis Business Solution",
    description: "Participant au développement du projet my_inscription",
  },
  {
    year: "2022",
    type: "experience",
    title: "Développeur Web",
    place: "Osmosis Business Solution",
    description: "Participant au développement du projet stalion_rh",
  },
  {
    year: "2021",
    type: "education",
    title: "Licence",
    place: "Université E-media Madagascar",
    description:
      "Obtention du diplôme de licence en informatique et télécommunication (Parcours Génie logiciel)",
  },
  {
    year: "2018",
    type: "education",
    title: "Baccalauréat",
    place: "Lycée Stella Maris Toamasina",
    description: "Obtention du diplôme BACC série C",
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-16">
          Experience & Education
          <span className="block w-40 h-[2px] bg-blue-600 mt-3"></span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-600 pl-10 space-y-12">

          {data.map((item, index) => (
            <div key={index} className="relative">

              {/* Icon */}
              <div className="absolute -left-[38px] top-1 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {item.type === "experience" ? (
                  <Briefcase size={20} />
                ) : (
                  <GraduationCap size={20} />
                )}
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition">
                <span className="text-sm text-blue-600 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 font-medium">
                  {item.place}
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
