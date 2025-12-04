"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AntiAgingTreatmentPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Anti-Aging Treatment</h1>
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
              alt="Anti-Aging Treatment"
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
              Look Younger with Advanced Anti-Aging Treatments
            </h2>

            <p className="text-lg leading-relaxed">
              Aging signs like wrinkles, sagging skin, and uneven texture appear
              due to stress, sun exposure, and natural aging.
            </p>

            <p className="text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> offers advanced,
              medically proven anti-aging treatments to restore youthful,
              glowing, and firm skin.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CONCERNS IT TREATS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Anti-Aging Treatments Help With
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              "Fine lines & wrinkles",
              "Loose & sagging skin",
              "Uneven texture & dullness",
              "Dark spots & pigmentation",
              "Loss of facial volume",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TYPES OF TREATMENTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Anti-Aging Treatments Available
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Chemical Peels for rejuvenation",
              "Laser Facial for skin tightening",
              "Carbon Peel for glow & texture",
              "Hydra Facial with anti-aging serums",
              "Micro-needling for collagen boost",
              "Anti-aging medical skincare routine",
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
            How Anti-Aging Treatment Works
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            {[
              "Boosts collagen & elastin",
              "Improves skin elasticity",
              "Reduces wrinkles & fine lines",
              "Brightens skin tone",
              "Tightens and firms the skin",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* BEFORE AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {["acne-scar-removal.jpg", "acne-scar-removal.jpg"].map(
              (img, idx) => (
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
              )
            )}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Benefits of Anti-Aging Treatments
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              "Natural & youthful appearance",
              "Non-invasive & safe procedures",
              "Minimal downtime",
              "Long-lasting results",
              "Customized anti-aging plan",
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
