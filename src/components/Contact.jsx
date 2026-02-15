import { MapPin, Phone, Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useAOS } from "../hooks/useAOS.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact() {
  useAOS();
  const { t } = useLanguage();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const formData = new FormData(formRef.current);
    const email = formData.get("from_email");

    // Validation email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("❌ Veuillez entrer une adresse email valide.");
      setLoading(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS keys missing", { serviceId, templateId, publicKey });
      const isProduction = window.location.hostname !== "localhost";
      const envMessage = isProduction
        ? "Ajoutez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans les variables d'environnement Vercel"
        : "Ajoutez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans .env.local (voir .env.example)";
      setError(`❌ Configuration EmailJS manquante. ${envMessage}`);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setSuccess("✅ Message envoyé avec succès !");
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          if (error && error.text && error.text.includes("The public key is required")) {
            setError("❌ Clé publique EmailJS manquante. Vérifiez VITE_EMAILJS_PUBLIC_KEY.");
          } else {
            setError("❌ Une erreur est survenue. Réessayez.");
          }
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl font-bold relative inline-block">
            {t('contact.title')}
            <span className="block w-32 h-[2px] bg-blue-600 mt-3"></span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info */}
          <div className="bg-blue-600 text-white rounded-2xl p-10 space-y-8 shadow-lg" data-aos="fade-right" data-aos-delay="200">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t('contact.info')}</h3>
              <p className="text-white/80">
                {t('contact.available')}
              </p>
            </div>

            <div className="flex gap-5">
              <MapPin size={26} />
              <p>{t('contact.location')}</p>
            </div>

            <div className="flex gap-5">
              <Phone size={26} />
              <p>+261 34 17 732 42</p>
            </div>

            <div className="flex gap-5">
              <Mail size={26} />
              <p>jeangerald1302@gmail.com</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg" data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="from_name"
                placeholder={t('contact.name')}
                required
                className="border rounded-lg px-5 py-3
                          bg-white dark:bg-gray-700
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="from_email"
                placeholder={t('contact.email')}
                required
                className="border rounded-lg px-5 py-3
                          bg-white dark:bg-gray-700
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="subject"
                placeholder={t('contact.subject')}
                className="md:col-span-2 border rounded-lg px-5 py-3
                          bg-white dark:bg-gray-700
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                rows="6"
                placeholder={t('contact.message')}
                required
                className="md:col-span-2 border rounded-lg px-5 py-3
                          bg-white dark:bg-gray-700
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-600"
              />


              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  {loading ? "Envoi..." : t('contact.send')}
                </button>
              </div>

              {success && (
                <p className="text-green-600 md:col-span-2">{success}</p>
              )}
              {error && (
                <p className="text-red-600 md:col-span-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
