"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Dr. Koshinder Vats</h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* DOCTOR SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/doctor.jpg"
              alt="Dr. Koshinder Vats"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-700">
              Dr. Koshinder Vats (MBBS, MD)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Dr. Koshinder Vats is a highly trusted dermatologist with over
              <strong> 10+ years of experience</strong> in diagnosing and
              treating a wide range of skin, hair, and cosmetic conditions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              He specializes in advanced dermatology procedures including
              lasers, acne treatments, hair regeneration therapies like PRP &
              GFC, anti-aging solutions, pigmentation treatments, and more.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With a patient-first approach, Dr. Vats focuses on safe,
              effective, and customized treatments for long-lasting results.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CLINIC STORY */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            About Pt. Yadram Skin Clinic
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Pt. Yadram Skin Clinic is dedicated to providing world-class
            dermatology services using modern technology and advanced treatment
            methods. We focus on delivering safe, effective, and long-lasting
            results to all patients.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-3">
              <FaCheckCircle className="text-blue-700 text-xl" />
              Provide safe, evidence-based skin & hair treatments.
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-blue-700 text-xl" />
              Deliver personalized care for every patient.
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-blue-700 text-xl" />
              Use advanced lasers & modern dermatology technology.
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
