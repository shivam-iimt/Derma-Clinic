"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdAccessTime } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        >
          Contact & Location
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <MdLocationPin className="text-blue-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  Pt. Yadram Skin Clinic, Yamuna Vihar, Delhi – 110053
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4">
              <MdAccessTime className="text-blue-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Clinic Timings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mon-Sat: 5:00 PM – 8:30 PM <br />
                  Sunday: 10:00 AM – 12:00 PM
                </p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="tel:7687077077"
                className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 flex items-center gap-2"
              >
                <FaPhoneAlt /> Call Now
              </a>

              <a
                href="https://wa.me/917687077077"
                target="_blank"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.148216792876!2d77.2758295!3d28.7020671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd66fbd2dc03%3A0xc477f6559ed49e46!2sDr%20koshinder%20vats's%20pt%20yadram%20skin%20clinic%20%2C%20laser%20and%20hair%20transplant%20centre!5e0!3m2!1sen!2sin!4v1735744800000!5m2!1sen!2sin"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-2xl shadow-md border"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
