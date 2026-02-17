import { Code, Code2, Server, Settings, Palette, Cloud, Trophy, GitBranch, Users } from "lucide-react";
import React from "react";
import { skillsData, statsData, progressAreas } from "../data/skillsData.js";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";

// Map icon names to components
const iconMap = {
  Code2,
  Server,
  Settings,
  Trophy,
  GitBranch,
  Users,
};

const getIcon = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
};
export default function Skills() {
  useAOS();
  const { t } = useLanguage();
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="pb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-wide leading-none dark:bg-gray-800">
              {t('skills.title')}
            </h2>
            <span className="w-28 h-px bg-blue-600"></span>
          </div>
          <p className="mt-2 text-gray-500 font-medium">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Grid */}
          <div className=" lg:col-span-2 grid md:grid-cols-2 gap-8">
            {skillsData.map((card, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={`${200 + index * 100}`}
                className="dark:bg-gray-800 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {getIcon(card.iconName)}
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
          <div className=" dark:bg-gray-800 bg-white rounded-2xl p-10 shadow-lg h-fit lg:sticky top-24" data-aos="fade-left" data-aos-delay="200">

            <h3 className="text-2xl font-bold  mb-4">
              {t('skills.profile')}
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              {t('skillsProfile')}
            </p>

            <div className="space-y-6 mb-10">
              {statsData.map((stat, i) => (
                <Stat key={i} icon={getIcon(stat.iconName)} number={stat.number} label={stat.label} />
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Axes de progression
              </h4>

              <div className="flex flex-wrap gap-3">
                {progressAreas.map((badge, i) => (
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
