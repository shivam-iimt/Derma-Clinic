"use client";
export const metadata = {
  title: "GFC Hair Treatment in Yamuna Vihar – Advanced Hair Regrowth",
  description:
    "GFC therapy for stronger, healthier hair regrowth. Safe & effective.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "GFC Hair Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "GFC therapy (Growth Factor Concentrate) for advanced hair growth stimulation.",
  url: "https://your-domain.com/treatments/gfc-hair-treatment",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
;

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function GfcTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">GFC Hair Treatment</h1>
      </section>

      {/* PAGE CONTENT */}
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
              src="/gfc-treatment.jpg"
              alt="GFC Treatment"
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
              Advanced GFC Hair Treatment for Faster Hair Regrowth
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              GFC (Growth Factor Concentrate) is an advanced, highly effective
              treatment for hair fall, thinning hair, and weak hair follicles.
              It is the upgraded version of PRP, offering superior results.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> uses clinically
              certified GFC kits that deliver **pure growth factors**, leading
              to faster, safer, and more visible hair regrowth.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* HOW GFC WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How GFC Treatment Works
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Blood is processed
              using a certified GFC kit
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Growth factors are
              extracted in pure form
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> GFC is injected into
              the scalp
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Stimulates hair
              follicles for regrowth
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Promotes stronger,
              thicker hair strands
            </li>
          </ul>
        </div>

        {/* BENEFITS OF GFC */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of GFC Hair Treatment
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "More effective than PRP",
              "Higher concentration of growth factors",
              "Faster improvement in hair thinning",
              "Completely safe and natural",
              "Zero downtime",
              "Painless procedure",
              "Strengthens hair follicles",
              "Visible results within 3–4 sessions",
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
                src="/gfc-before.jpg"
                alt="GFC Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/gfc-after.jpg"
                alt="GFC After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DIFFERENCE BETWEEN PRP & GFC */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            GFC vs PRP – Which Is Better?
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> GFC contains pure
              growth factors (PRP contains blood plasma)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Better results with
              fewer sessions
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> No pain, no swelling,
              quick recovery
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Ideal for both men &
              women
            </li>
          </ul>
        </div>

        {/* TREATMENT PLAN */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            GFC Treatment Plan
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> 1 session every 3–4
              weeks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> 4 sessions recommended
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Maintenance session
              every 6 months
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
