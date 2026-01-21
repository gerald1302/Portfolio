import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Contact
            <span className="block w-32 h-[2px] bg-blue-600 mt-3"></span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info Box */}
          <div className="bg-blue-600 text-white rounded-2xl p-10 space-y-8 shadow-lg">

            <div>
              <h3 className="text-2xl font-bold mb-3">Contact Info</h3>
              <p className="text-white/80">
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              </p>
            </div>

            {/* Item */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Location</h4>
                <p className="text-white/80">A108 Adam Street</p>
                <p className="text-white/80">New York, NY 535022</p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone Number</h4>
                <p className="text-white/80">+1 5589 55488 55</p>
                <p className="text-white/80">+1 6678 254445 41</p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Address</h4>
                <p className="text-white/80">info@example.com</p>
                <p className="text-white/80">contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Get In Touch</h3>
            <p className="text-gray-500 mb-8">
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="md:col-span-2 border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="md:col-span-2 border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
