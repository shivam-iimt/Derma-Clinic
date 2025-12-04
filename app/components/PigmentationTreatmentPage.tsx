"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function PigmentationTreatmentPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Pigmentation Treatment
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
              src="/acne-scar-removal.jpg"
              alt="Pigmentation Treatment"
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
              Advanced Pigmentation & Melasma Treatment
            </h2>

            <p className="text-textDark text-lg leading-relaxed">
              Pigmentation occurs when the skin produces excess melanin, leading
              to dark spots, uneven tone, and patches. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> offers advanced
              treatments for pigmentation, melasma, tanning, and blemishes using
              modern dermatology technology.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* TYPES OF PIGMENTATION */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Types of Pigmentation We Treat
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-3">
              {["Melasma", "Tanning", "Post-inflammatory pigmentation"].map(
                (item, idx) => (
                  <p key={idx} className="flex gap-2">
                    <FaCheckCircle className="text-primary" /> {item}
                  </p>
                )
              )}
            </div>

            <div className="space-y-3">
              {["Age spots / Sun spots", "Freckles", "Dark patches"].map(
                (item, idx) => (
                  <p key={idx} className="flex gap-2">
                    <FaCheckCircle className="text-primary" /> {item}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        {/* CAUSES */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Common Causes of Pigmentation
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              "Sun exposure",
              "Hormonal imbalance (very common in women)",
              "Skin inflammation or acne marks",
              "Genetics & lifestyle",
              "Pollution & stress",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TREATMENTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Our Pigmentation Treatments
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Chemical Peels",
              "Laser Treatment for Pigmentation",
              "Melasma Treatment",
              "Carbon Peel / Hollywood Peel",
              "PRP for Pigmentation",
              "Skin Brightening Therapies",
              "Anti-pigmentation medicines",
              "Customized treatment plans",
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

        {/* BEFORE AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/acne-scar-removal.jpg"
                alt="Pigmentation Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/acne-scar-removal.jpg"
                alt="Pigmentation After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Benefits of Pigmentation Treatment
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              "Even skin tone",
              "Reduction in dark patches",
              "Brighter & glowing skin",
              "Fades acne marks and blemishes",
              "Long-lasting results with proper care",
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
