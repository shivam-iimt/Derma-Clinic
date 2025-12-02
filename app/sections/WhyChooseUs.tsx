"use client";

import { motion } from "framer-motion";
import {
  FaUserMd,
  FaShieldAlt,
  FaCheckCircle,
  FaSmileBeam,
  FaHeartbeat,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

const features = [
  {
    icon: <FaUserMd className="text-blue-700 text-4xl" />,
    title: "10+ Years Experience",
  },
  {
    icon: <FaShieldAlt className="text-blue-700 text-4xl" />,
    title: "US-FDA Approved Equipment",
  },
  {
    icon: <FaCheckCircle className="text-blue-700 text-4xl" />,
    title: "Safe & Hygienic Procedures",
  },
  {
    icon: <MdMedicalServices className="text-blue-700 text-4xl" />,
    title: "Personalised Treatments",
  },
  {
    icon: <FaHeartbeat className="text-blue-700 text-4xl" />,
    title: "Affordable & Effective Care",
  },
  {
    icon: <FaSmileBeam className="text-blue-700 text-4xl" />,
    title: "Thousands of Happy Patients",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        >
          Why Choose Our Clinic?
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 shadow-md rounded-xl p-8 flex flex-col items-center text-center border hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
