"use client";
export const metadata = {
  title: "Acne Treatment in Yamuna Vihar – Dr. Koshinder Vats",
  description:
    "Get clear, acne-free skin with advanced acne treatments by Dr. Koshinder Vats at Pt. Yadram Skin Clinic, Yamuna Vihar. Safe, effective & personalized care.",
};

export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Acne Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Advanced acne treatment offered at Pt. Yadram Skin Clinic using peels, medications, laser & personalized plans.",
  url: "https://your-domain.com/treatments/acne",
  provider: {
    "@type": "Physician",
    name: "Dr. Koshinder Vats",
  },
};

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AcneTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Acne Treatment</h1>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/acne-treatment.jpg"
              alt="Acne Treatment"
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
              Professional Acne & Pimple Treatment in Yamuna Vihar
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At Pt. Yadram Skin Clinic,{" "}
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> provides advanced
              acne treatment designed to reduce pimples, inflammation,
              blackheads, and prevent future breakouts.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Every patient gets a personalised treatment plan based on skin
              type and severity for long-lasting results.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CAUSES */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Causes of Acne
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            {[
              "Excess oil production",
              "Blocked pores",
              "Bacterial infection",
              "Hormonal imbalance",
              "Pollution & stress",
              "Wrong skincare products",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TREATMENTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Treatments We Offer
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Medical treatment for acne",
              "Chemical peels",
              "Comedone extraction",
              "Anti-acne medications",
              "Salicylic/Glycolic peels",
              "Sebum control therapy",
              "Lifestyle & diet planning",
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

        {/* BEFORE AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/acne-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/acne-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

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
