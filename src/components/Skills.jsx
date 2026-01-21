import { Code, Server, Palette, Cloud, Trophy, GitBranch, Users } from "lucide-react";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code className="w-7 h-7" />,
    skills: [
      { name: "HTML / CSS", percent: 95 },
      { name: "JavaScript", percent: 88 },
      { name: "Vue.js", percent: 82 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-7 h-7" />,
    skills: [
      { name: "PHP", percent: 78 },
      { name: "Laravel", percent: 75 },
      { name: "MySQL", percent: 72 },
    ],
  },
  {
    title: "Design & Tools",
    icon: <Palette className="w-7 h-7" />,
    skills: [
      { name: "Figma", percent: 85 },
      { name: "Photoshop", percent: 70 },
      { name: "Illustrator", percent: 68 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-7 h-7" />,
    skills: [
      { name: "AWS", percent: 76 },
      { name: "Docker", percent: 73 },
      { name: "Git", percent: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none text-gray-800">
              Skills
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            Professional expertise and technical experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

            {skillsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {card.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="font-bold text-blue-600">{skill.percent}%</span>
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
          <div className="bg-white rounded-2xl p-10 shadow-lg h-fit lg:sticky top-24">

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Professional Expertise
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              Creative developer with strong experience building modern web
              applications and digital solutions.
            </p>

            {/* Stats */}
            <div className="space-y-6 mb-10">
              <Stat icon={<Trophy />} number="5+" label="Years Experience" />
              <Stat icon={<GitBranch />} number="50+" label="Projects Completed" />
              <Stat icon={<Users />} number="30+" label="Happy Clients" />
            </div>

            {/* Badges */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Certifications
              </h4>

              <div className="flex flex-wrap gap-3">
                {["AWS Certified", "Laravel Expert", "Vue.js Developer", "UI/UX Design"].map(
                  (badge, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-500"
                    >
                      {badge}
                    </span>
                  )
                )}
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
