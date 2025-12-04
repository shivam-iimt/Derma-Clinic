"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function ChemicalPeelPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Chemical Peel Treatment
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO BLOCK */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/chemical-peel.jpg"
              alt="Chemical Peel"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">
              Advanced Chemical Peel for Glowing & Clear Skin
            </h2>

            <p className="text-textDark text-lg leading-relaxed">
              Chemical peels are one of the most popular dermatology procedures
              for glowing skin, acne reduction, pigmentation improvement, and
              smooth skin texture.
            </p>

            <p className="text-textDark text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> uses safe and
              medically approved peels customised to your skin type for fast and
              effective results.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CONDITIONS IT TREATS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Chemical Peel Helps Treat
          </h3>

          <ul className="space-y-3 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Acne & acne marks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Pigmentation & melasma
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Dark spots & tanning
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Uneven skin tone
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Fine lines & dull skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Open pores
            </li>
          </ul>
        </div>

        {/* TYPES OF PEELS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Types of Chemical Peels We Offer
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Salicylic Acid Peel",
              "Glycolic Acid Peel",
              "Lactic Acid Peel",
              "TCA Peel",
              "Party Peel / Instant Glow Peel",
              "Yellow Peel",
              "Anti-Pigmentation Peel",
              "Acne Control Peel",
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

        {/* HOW IT WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            How Chemical Peel Works
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Removes the damaged top
              layer of skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Promotes fresh &
              healthy skin growth
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Reduces pigmentation
              and dark spots
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Clears acne and unclogs
              pores
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Gives instant
              smoothness and glow
            </li>
          </ul>
        </div>

        {/* BEFORE & AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/chemical-peel-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/chemical-peel-after.jpg"
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
            Benefits of Chemical Peel
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Brighter and glowing
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Reduction in acne &
              marks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Lightens pigmentation
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Smooth & even skin
              texture
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Quick 20–30 min
              procedure
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Visible results within
              days
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
