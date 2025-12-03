"use client";
export const metadata = {
  title: "Hydra Facial in Yamuna Vihar – Instant Glow Treatment",
  description:
    "Hydra Facial for deep cleansing, hydration & instant glow at Pt. Yadram Skin Clinic.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Hydra Facial",
  medicalSpecialty: "Dermatology",
  description:
    "Deep cleansing, exfoliation and hydration with Hydra Facial treatment.",
  url: "https://your-domain.com/treatments/hydra-facial",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
;

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function HydraFacialPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hydra Facial Treatment
        </h1>
      </section>

      {/* CONTENT */}
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
              src="/hydra-facial.jpg"
              alt="Hydra Facial"
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
              Advanced Hydra Facial for Instant Glow & Hydration
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Hydra Facial is one of the most popular treatments for glowing,
              hydrated, and fresh-looking skin. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> uses a certified
              Hydra Facial machine for deep cleansing, exfoliation, hydration,
              and facial rejuvenation.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              The procedure is gentle, painless, and suitable for all skin types
              with instant results.
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
            Benefits of Hydra Facial
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Instant glow & hydration",
              "Deep cleansing & exfoliation",
              "Reduces oil & unclogs pores",
              "Improves skin texture & tone",
              "Reduces acne & blackheads",
              "Brightens dull skin",
              "No pain, no downtime",
              "Suitable for all skin types",
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

        {/* HOW HYDRA FACIAL WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How Hydra Facial Works
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Deep cleansing removes
              dirt & oil
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Exfoliation removes
              dead skin layer
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Extraction clears
              blackheads
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Hydration infuses
              serums for glowing skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> LED therapy improves
              skin health
            </li>
          </ul>
        </div>

        {/* BEFORE & AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hydra-before.jpg"
                alt="Hydra Facial Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hydra-after.jpg"
                alt="Hydra Facial After"
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
              <FaCheckCircle className="text-blue-700" /> Dull or dehydrated
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Acne or blackheads
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Pigmentation & dark
              spots
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Open pores
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Uneven skin tone
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
