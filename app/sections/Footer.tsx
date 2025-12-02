"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1 — Clinic Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pt. Yadram Skin Clinic</h3>
          <p className="text-gray-200">
            Advanced Dermatology, Skin & Hair Treatments by
            <strong> Dr. Koshinder Vats (MBBS, MD)</strong>.
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <MdLocationPin className="text-yellow-300 text-2xl" />
              <p>Yamuna Vihar, Delhi — 110053</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300 text-xl" />
              <a href="tel:7687077077" className="hover:underline">
                76870 77077
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 text-xl" />
              <a
                href="https://wa.me/917687077077"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#treatments" className="hover:text-yellow-300">
                Treatments
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-yellow-300">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Clinic Timings */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Clinic Timings</h3>
          <ul className="text-gray-200 space-y-1">
            <li>Mon, Tue, Thu: 1:00–2:00 PM / 5:00–8:30 PM</li>
            <li>Wed, Fri, Sat: 5:00–8:30 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom */}
      <div className="text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Pt. Yadram Skin Clinic — All Rights
        Reserved.
      </div>
    </footer>
  );
}
