"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AcneScarTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Acne Scar Treatment</h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/acne-scar-treatment.jpg"
              alt="Acne Scar Treatment"
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
              Effective Treatment for Acne Scars
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Acne scars can affect confidence, but with advanced dermatology,
              they can be significantly improved. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> specializes in
              treating all types of acne scars using modern technologies like
              microneedling, lasers, PRP, and chemical peels.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* TYPES OF ACNE SCARS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Acne Scars
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
            <div className="space-y-3">
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Ice pick scars
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Boxcar scars
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Rolling scars
              </p>
            </div>

            <div className="space-y-3">
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Post-inflammatory
                hyperpigmentation
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Red/brown marks
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Pigmented scars
              </p>
            </div>
          </div>
        </div>

        {/* TREATMENTS WE OFFER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Effective Treatments for Acne Scars
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Microneedling (Derma Roller / Derma Pen)",
              "Chemical Peels",
              "Laser Treatment for Scars",
              "PRP & GFC Therapy",
              "Subcision for Deep Scars",
              "Collagen Boosting Procedures",
              "Skin Rejuvenation Treatments",
              "Combined Treatment Plans",
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
                src="/acne-scar-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/acne-scar-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Acne Scar Treatment
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Visible scar reduction
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Smoother & clearer
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Even skin texture
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Boosted collagen
              production
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Improved skin
              confidence
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
