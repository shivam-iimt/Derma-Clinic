"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function CarbonPeelPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Carbon Peel (Hollywood Peel)
        </h1>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/carbon-peel.jpg"
              alt="Carbon Peel Treatment"
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
              Advanced Carbon Peel for Instant Glow & Skin Rejuvenation
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              The **Carbon Peel**, also known as the **Hollywood Peel**, is a
              popular laser facial treatment that provides instant brightening,
              deep cleansing, acne control, and even skin tone.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> uses a high-quality
              Q-Switched laser for safe and effective carbon facial results.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Carbon Peel
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Instant glow & brightening",
              "Deep cleansing of pores",
              "Reduces acne & oil production",
              "Controls blackheads & whiteheads",
              "Helps pigmentation & dark spots",
              "Improves skin texture",
              "Minimises open pores",
              "No pain, no downtime",
              "Perfect for an event or party",
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

        {/* HOW IT WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How Carbon Peel Works
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> A thin layer of carbon
              paste is applied to the skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Laser is passed over
              the carbon layer
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Carbon absorbs dirt,
              oil, and impurities
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Laser blasts carbon,
              exfoliating dead skin instantly
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Skin appears brighter,
              clear, and rejuvenated immediately
            </li>
          </ul>
        </div>

        {/* BEFORE & AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/carbon-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/carbon-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* WHO SHOULD GET IT */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Best For People With
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Dull or tired-looking
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Acne-prone or oily
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Enlarged pores
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Pigmentation & uneven
              tone
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> People needing instant
              glow for events
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
