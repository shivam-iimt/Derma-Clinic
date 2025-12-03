"use client";
export const metadata = {
  title: "Hair Fall Treatment in Yamuna Vihar – Dermatologist Recommended",
  description:
    "Get advanced hair fall solutions including PRP, GFC & medical treatments.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Hair Fall Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Advanced medical and non-surgical treatments to control hair fall and boost growth.",
  url: "https://your-domain.com/treatments/hair-fall-treatment",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
;

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function HairFallTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-blue-700">
              Advanced Hair Fall Treatment for Men & Women
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Excessive hair fall is one of the most common concerns today. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> offers
              scientifically proven treatments to stop hair fall and promote
              natural regrowth.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Based on your scalp condition, we customize a detailed hair fall
              treatment plan which may include PRP, GFC, medications, laser
              therapy and scalp nourishment.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* COMMON CAUSES OF HAIR FALL */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Common Causes of Hair Fall
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Stress & lifestyle
              imbalance
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Nutritional
              deficiencies
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Dandruff & scalp
              infections
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Hormonal imbalance
              (common in females)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Genetics & aging
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Post-pregnancy hair
              fall
            </li>
          </ul>
        </div>

        {/* TREATMENTS WE OFFER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
                className="flex gap-3 p-4 bg-gray-50 rounded-xl shadow border"
              >
                <FaCheckCircle className="text-blue-700 text-xl" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BEFORE & AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Hair Fall Treatment Plan
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Weekly / Bi-weekly
              checkups (as needed)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> PRP or GFC sessions
              every 3–4 weeks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> 3–6 months for
              complete improvement
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Maintenance therapy
              for long-term results
            </li>
          </ul>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <a
            href="tel:7687077077"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-700 text-white rounded-lg text-lg shadow hover:bg-blue-800 transition"
          >
            <FaPhoneAlt /> Call Now for Appointment
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
