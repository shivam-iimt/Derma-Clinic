"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function PrpTreatmentPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">PRP Hair Treatment</h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/prp-treatment.jpg"
              alt="PRP Hair Treatment"
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
              Natural Hair Regrowth with PRP Therapy
            </h2>

            <p className="text-textDark text-lg leading-relaxed">
              PRP (Platelet Rich Plasma) is one of the most effective treatments
              for hair fall, thinning, and weak hair roots. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> performs PRP using
              advanced centrifuge technology for the highest growth factor
              concentration.
            </p>

            <p className="text-textDark text-lg leading-relaxed">
              PRP is a safe and natural procedure that strengthens hair
              follicles, improves thickness, and boosts overall hair regrowth.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* HOW PRP WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            How PRP Hair Treatment Works
          </h3>

          <ul className="space-y-3 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> A small amount of blood
              is drawn
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Platelet-rich plasma is
              extracted using centrifuge
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> PRP contains growth
              factors that stimulate hair roots
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Injected into the scalp
              using micro-needles
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Visible improvement
              within weeks
            </li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Benefits of PRP Hair Treatment
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reduces hair fall significantly",
              "Strengthens weak hair roots",
              "Improves hair density & thickness",
              "Boosts natural hair regrowth",
              "Safe & non-surgical treatment",
              "No major side effects",
              "Quick recovery with zero downtime",
              "Effective for men & women",
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
                src="/prp-before.jpg"
                alt="PRP Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/prp-after.jpg"
                alt="PRP After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* TREATMENT PLAN */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            PRP Treatment Plan
          </h3>

          <ul className="space-y-3 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> 1 session every 3–4
              weeks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> 4–6 sessions
              recommended
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-primary" /> Visible improvement
              after 2nd–3rd session
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
