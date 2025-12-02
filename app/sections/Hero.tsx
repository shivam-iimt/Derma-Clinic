"use client";

import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Pt. Yadram Skin Clinic
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Dr. Koshinder Vats (MBBS, MD)
          </h2>

          <p className="text-gray-600 text-lg max-w-lg">
            Advanced Dermatology, Skin & Hair Treatments in Yamuna Vihar using
            modern techniques & safe procedures.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
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

            <a
              href="https://maps.app.goo.gl/xxxxxxx"
              target="_blank"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg border flex items-center gap-2"
            >
              <MdLocationPin /> Directions
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="w-[260px] h-[330px] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/doctor-placeholder.jpg"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
