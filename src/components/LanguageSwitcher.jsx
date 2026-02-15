import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
          language === "fr"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
        title="Français"
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
          language === "en"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
