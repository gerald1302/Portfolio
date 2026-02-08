import { MapPin, Phone, Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
        <div className="mb-16">
          <h2 className="text-4xl font-bold relative inline-block">
            Contact
            <span className="block w-32 h-[2px] bg-blue-600 mt-3"></span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            N’hésitez pas à me contacter pour un projet ou une collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info */}
          <div className="bg-blue-600 text-white rounded-2xl p-10 space-y-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-3">Informations de contact</h3>
              <p className="text-white/80">
                Disponible pour des projets web et collaborations.
              </p>
            </div>

            <div className="flex gap-5">
              <MapPin size={26} />
              <p>Madagascar – Remote possible</p>
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Votre nom"
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
                placeholder="Votre email"
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
                placeholder="Sujet"
                className="md:col-span-2 border rounded-lg px-5 py-3
                          bg-white dark:bg-gray-700
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Votre message"
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
                  {loading ? "Envoi..." : "Envoyer le message"}
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
