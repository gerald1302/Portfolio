import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { cvData } from "../data/cvData.js";

export const useDownloadCV = (language) => {
  const data = cvData[language];

  const generateCV = () => {
    const cvElement = document.createElement("div");
    cvElement.innerHTML = `
      <div style="padding: 30px; font-family: Arial, sans-serif; color: #000;">
        <div style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="font-size: 28px; margin: 0; font-weight: bold;">${data.personalInfo.name}</h1>
          <p style="font-size: 16px; color: #0066cc; margin: 5px 0;">${data.personalInfo.title}</p>
          <div style="font-size: 11px; margin: 10px 0;">
            <span>${data.personalInfo.location}</span> • 
            <span>${data.personalInfo.email}</span> • 
            <span>${data.personalInfo.phone}</span>
          </div>
          <div style="font-size: 11px;">
            <span>${data.personalInfo.website}</span>
          </div>
        </div>

        <div style="margin-bottom: 15px; line-height: 1.6;">
          <p style="font-size: 12px; color: #333;">${data.summary}</p>
        </div>

        <div style="margin-bottom: 15px;">
          <h2 style="font-size: 13px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 10px;">
            ${language === "fr" ? "EXPÉRIENCE PROFESSIONNELLE" : "PROFESSIONAL EXPERIENCE"}
          </h2>
          ${data.experience
            .map(
              (job) => `
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <p style="font-weight: bold; margin: 0; font-size: 12px;">${job.position}</p>
                  <p style="color: #666; font-weight: bold; margin: 3px 0; font-size: 11px;">${job.company} • ${job.location}</p>
                </div>
                <p style="color: #666; font-size: 10px; margin: 0;">${job.startDate} - ${job.endDate}</p>
              </div>
              <ul style="margin: 5px 0; padding-left: 20px; font-size: 11px;">
                ${job.description.map((desc) => `<li style="margin: 3px 0;">${desc}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>

        <div style="margin-bottom: 15px;">
          <h2 style="font-size: 13px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 10px;">
            ${language === "fr" ? "FORMATIONS" : "EDUCATION"}
          </h2>
          ${data.education
            .map(
              (edu) => `
            <div style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <p style="font-weight: bold; margin: 0; font-size: 12px;">${edu.degree}</p>
                  <p style="color: #666; font-weight: bold; margin: 3px 0; font-size: 11px;">${edu.school}</p>
                  ${
                    edu.description
                      ? `<p style="color: #666; font-size: 10px; margin: 2px 0;">${language === "fr" ? "Parcours" : "Program"}: ${edu.description}</p>`
                      : ""
                  }
                </div>
                <p style="color: #666; font-size: 10px; margin: 0;">${edu.startDate} - ${edu.endDate}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div style="margin-bottom: 8px;">
          <h2 style="font-size: 13px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 8px;">
            ${language === "fr" ? "COMPÉTENCES" : "SKILLS"}
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 10px;">
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">${language === "fr" ? "Soft skills" : "Soft Skills"}</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.skills.softSkills.join(", ")}</p>
            </div>
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">Frontend</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.skills.frontend.join(", ")}</p>
            </div>
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">Backend</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.skills.backend.join(", ")}</p>
            </div>
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">${language === "fr" ? "Bases de données" : "Databases"}</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.skills.databases.join(", ")}</p>
            </div>
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">${language === "fr" ? "Outils" : "Tools"}</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.skills.tools.join(", ")}</p>
            </div>
            <div>
              <p style="font-weight: bold; margin: 0 0 3px 0;">${language === "fr" ? "Langues" : "Languages"}</p>
              <p style="color: #666; margin: 0; font-size: 9px;">${data.languages.map((lang) => `${lang.name} (${lang.level})`).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const opt = {
      margin: 8,
      filename: `CV_${data.personalInfo.name}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };

    html2pdf().set(opt).from(cvElement).save();
  };

  return { generateCV };
};
