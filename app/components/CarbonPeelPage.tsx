"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function CarbonPeelPage() {
  return (
    <main className="bg-white text-textDark">
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
              src="/acne-scar-removal.jpg"
              alt="Carbon Peel Treatment"
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
              Advanced Carbon Peel for Instant Glow & Skin Rejuvenation
            </h2>

            <p className="text-lg leading-relaxed">
              The <strong>Carbon Peel</strong>, also known as the{" "}
              <strong>Hollywood Peel</strong>, is a powerful laser facial that
              instantly brightens the skin, deep cleans pores, controls acne &
              improves skin tone.
            </p>

            <p className="text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> performs Carbon
              Peel using a certified Q-Switched laser for safe, glowing results.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
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
                className="flex gap-3 p-4 bg-primaryBg rounded-xl shadow border"
              >
                <FaCheckCircle className="text-primary text-xl" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            How Carbon Peel Works
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            {[
              "A thin layer of carbon paste is applied to the skin",
              "Laser is passed over the carbon layer",
              "Carbon absorbs dirt, oil & impurities",
              "Laser blasts carbon, exfoliating dead skin instantly",
              "Skin appears brighter, clearer & rejuvenated immediately",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* BEFORE & AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {["acne-scar-removal.jpg", "acne-scar-removal.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/${img}`}
                  alt={idx === 0 ? "Before" : "After"}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BEST FOR */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Best For People With
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              "Dull or tired-looking skin",
              "Acne-prone or oily skin",
              "Enlarged pores",
              "Pigmentation & uneven tone",
              "People needing instant glow for events",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
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
