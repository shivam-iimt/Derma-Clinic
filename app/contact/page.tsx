"use client";
// export const metadata = {
//   title: "Contact Pt. Yadram Skin Clinic – Dermatologist in Yamuna Vihar",
//   description:
//     "Book an appointment with Pt. Yadram Skin Clinic. View address, phone number, WhatsApp and clinic timings.",
// };
  
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        {/* LEFT SIDE - DETAILS */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Pt. Yadram Skin Clinic
          </h2>

          {/* ADDRESS */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-gray-700 flex gap-3 items-start">
              <FaMapMarkerAlt className="text-blue-700 mt-1" />
              B-77, Yamuna Vihar, Delhi – 110053
            </p>
          </div>

          {/* TIMINGS */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Clinic Timings
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-3">
                <FaClock className="text-blue-700" />
                Mon-Sat: 5:00 PM – 8:30 PM
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-blue-700" />
                Sunday: 10:00 AM – 12:00 PM
              </li>
            </ul>
          </div>

          {/* CONTACT BUTTONS */}
          <div className="space-y-4">
            <a
              href="tel:7687077077"
              className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-lg text-lg w-fit shadow hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/917687077077"
              target="_blank"
              className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg text-lg w-fit shadow hover:bg-green-700 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.9650184048584!2d77.2758295!3d28.7020671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd66fbd2dc03%3A0xc477f6559ed49e46!2sDr%20koshinder%20vats's%20pt%20yadram%20skin%20clinic%20%2C%20laser%20and%20hair%20transplant%20centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
