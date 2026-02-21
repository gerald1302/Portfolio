import React, { useRef } from "react";
import { X, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import { cvData } from "../data/cvData.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const CVModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const cvRef = useRef();
  const data = cvData[language];

  const handleDownloadPDF = () => {
    if (!cvRef.current) return;

    const element = cvRef.current;
    const opt = {
      margin: 10,
      filename: `CV_${data.personalInfo.name}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };

    html2pdf().set(opt).from(element).save();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-bold">
            {language === "fr" ? "Mon CV" : "My CV"}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={20} />
              {language === "fr" ? "Télécharger" : "Download"}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
          <div
            ref={cvRef}
            className="bg-white text-gray-900 p-12 text-sm leading-relaxed"
          >
            {/* Header */}
            <div className="mb-8 text-center border-b-2 border-gray-300 pb-6">
              <h1 className="text-3xl font-bold tracking-wide">
                {data.personalInfo.name}
              </h1>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                {data.personalInfo.title}
              </p>
              <div className="flex justify-center gap-4 mt-3 text-xs">
                <span>{data.personalInfo.location}</span>
                <span>•</span>
                <span>{data.personalInfo.email}</span>
                <span>•</span>
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex justify-center gap-4 mt-2 text-xs">
                <span>{data.personalInfo.website}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <p className="text-gray-700 leading-6">{data.summary}</p>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold tracking-wide mb-4 border-b-2 border-gray-300 pb-2">
                {language === "fr"
                  ? "EXPÉRIENCE PROFESSIONNELLE"
                  : "PROFESSIONAL EXPERIENCE"}
              </h2>
              <div className="space-y-4">
                {data.experience.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900">
                          {job.position}
                        </p>
                        <p className="text-gray-600 font-semibold">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <p className="text-gray-600 text-xs">
                        {job.startDate} - {job.endDate}
                      </p>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-xs">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-lg font-bold tracking-wide mb-4 border-b-2 border-gray-300 pb-2">
                {language === "fr" ? "FORMATIONS" : "EDUCATION"}
              </h2>
              <div className="space-y-3">
                {data.education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900">
                          {edu.degree}
                        </p>
                        <p className="text-gray-600 font-semibold">
                          {edu.school}
                        </p>
                        {edu.description && (
                          <p className="text-gray-600 text-xs">
                            {language === "fr" ? "Parcours" : "Program"} : {edu.description}
                          </p>
                        )}
                      </div>
                      <p className="text-gray-600 text-xs">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-bold tracking-wide mb-4 border-b-2 border-gray-300 pb-2">
                {language === "fr" ? "COMPÉTENCES" : "SKILLS"}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {language === "fr" ? "Soft skills" : "Soft Skills"}
                  </p>
                  <p className="text-gray-700 text-xs">
                    {data.skills.softSkills.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Frontend</p>
                  <p className="text-gray-700 text-xs">
                    {data.skills.frontend.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Backend</p>
                  <p className="text-gray-700 text-xs">
                    {data.skills.backend.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {language === "fr" ? "Bases de données" : "Databases"}
                  </p>
                  <p className="text-gray-700 text-xs">
                    {data.skills.databases.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {language === "fr" ? "Outils" : "Tools"}
                  </p>
                  <p className="text-gray-700 text-xs">
                    {data.skills.tools.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {language === "fr" ? "Langues" : "Languages"}
                  </p>
                  <p className="text-gray-700 text-xs">
                    {data.languages
                      .map((lang) => `${lang.name} (${lang.level})`)
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
