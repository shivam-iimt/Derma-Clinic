"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function MoleWartRemovalPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Mole, Wart & Skin Tag Removal
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/mole-removal.jpg"
              alt="Mole Removal"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-700">
              Safe & Effective Removal of Moles, Warts & Skin Tags
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Moles, warts, and skin tags can appear anywhere on the body and
              may cause cosmetic concerns, discomfort, or skin irritation.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> removes them safely
              using laser, radiofrequency, and micro-surgical techniques with
              minimal pain and no scarring.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CONDITIONS WE TREAT */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Conditions We Remove
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Moles
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Warts (viral)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Skin tags
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Corns
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Seborrheic keratosis
            </li>
          </ul>
        </div>

        {/* TREATMENT METHODS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Treatment Options Available
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Laser Removal",
              "Radiofrequency Removal",
              "Cryotherapy",
              "Micro-surgical Excision",
              "Chemical Cauterization",
              "Safe, sterile & painless procedures",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 p-4 bg-gray-50 rounded-xl shadow border"
              >
                <FaCheckCircle className="text-blue-700 text-xl" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BEFORE AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/mole-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/mole-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Removal
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Quick, safe & painless
              procedure
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> No stitches required
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Minimal or no scarring
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Improves appearance
              instantly
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Prevents irritation &
              discomfort
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="tel:7687077077"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-700 text-white rounded-lg text-lg shadow hover:bg-blue-800 transition"
          >
            <FaPhoneAlt /> Call Now for Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
