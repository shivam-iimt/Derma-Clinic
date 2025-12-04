"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function MoleWartRemovalPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-primary">
              Safe & Effective Removal of Moles, Warts & Skin Tags
            </h2>

            <p className="text-textDark text-lg leading-relaxed">
              Moles, warts, and skin tags can appear anywhere on the body and
              may cause cosmetic concerns, discomfort, or skin irritation.
            </p>

            <p className="text-textDark text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> removes them
              safely using laser, radiofrequency, and micro-surgical techniques
              with minimal pain and minimal risk of scarring.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CONDITIONS WE TREAT */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Conditions We Remove
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Moles
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Warts (viral)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Skin tags
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Corns
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Seborrheic keratosis
            </li>
          </ul>
        </div>

        {/* TREATMENT METHODS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
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
                className="flex gap-3 p-4 bg-primaryBg rounded-xl shadow border"
              >
                <FaCheckCircle className="text-primary text-xl" />
                <span className="text-textDark">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BEFORE AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
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
          <h3 className="text-2xl font-bold text-primary mb-6">
            Benefits of Removal
          </h3>

          <ul className="space-y-3 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Quick, safe & painless
              procedure
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> No stitches required
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Minimal or no scarring
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Improves appearance
              instantly
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Prevents irritation &
              discomfort
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="tel:7687077077"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-lg text-lg shadow hover:bg-primaryLight transition"
          >
            <FaPhoneAlt /> Call Now for Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
