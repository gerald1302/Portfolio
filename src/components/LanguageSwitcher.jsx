import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const toggle = () => {
    changeLanguage(language === "fr" ? "en" : "fr");
  };

  // use a single button to save horizontal space (especially on mobile)
  return (
    <button
      onClick={toggle}
      className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
        language === "fr"
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
      title={language === "fr" ? "Français" : "English"}
    >
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}
