"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function HairFallTreatmentPage() {
  return (
    <main className="bg-white text-textDark">
      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Hair Fall Treatment</h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* HAIR FALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/hair-fall-treatment.jpg"
              alt="Hair Fall Treatment"
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
              Advanced Hair Fall Treatment for Men & Women
            </h2>

            <p className="text-textDark text-lg leading-relaxed">
              Excessive hair fall is a very common concern. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> provides advanced,
              scientifically proven treatments to stop hair fall and promote
              natural hair regrowth.
            </p>

            <p className="text-textDark text-lg leading-relaxed">
              Based on your scalp condition, we create a customized treatment
              plan which may include PRP, GFC, medications, laser therapy and
              scalp nourishment.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* COMMON CAUSES OF HAIR FALL */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Common Causes of Hair Fall
          </h3>

          <ul className="space-y-3 text-lg text-textDark">
            {[
              "Stress & lifestyle imbalance",
              "Nutritional deficiencies",
              "Dandruff & scalp infections",
              "Hormonal imbalance (common in females)",
              "Genetics & aging",
              "Post-pregnancy hair fall",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TREATMENTS WE OFFER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Hair Fall Treatments Available
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "PRP Hair Therapy",
              "GFC Advanced Hair Therapy",
              "Hair Growth Medications",
              "Anti-Hair Fall Serums & Solutions",
              "Dandruff Treatment",
              "Scalp Nourishing Treatments",
              "Laser Hair Stimulation",
              "Diet & Lifestyle Guidance",
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

        {/* BEFORE & AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hairfall-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hairfall-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* TREATMENT PLAN */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Hair Fall Treatment Plan
          </h3>

          <ul className="space-y-3 text-lg text-textDark">
            {[
              "Weekly / Bi-weekly checkups (as needed)",
              "PRP or GFC sessions every 3–4 weeks",
              "3–6 months for full improvement",
              "Maintenance therapy for long-term results",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA SECTION */}
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
