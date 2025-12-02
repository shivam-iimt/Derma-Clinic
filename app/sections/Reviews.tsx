"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Riya Sharma",
    review:
      "Amazing experience. The doctor explained everything clearly and the treatment worked very well for my acne.",
    stars: 5,
  },
  {
    name: "Mohit Verma",
    review:
      "Laser hair removal service was painless and very effective. Clinic is clean and fully hygienic.",
    stars: 5,
  },
  {
    name: "Pooja Gupta",
    review:
      "I took pigmentation treatment and saw visible improvement within a few weeks. Highly recommended!",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        >
          What Our Patients Say
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array(item.stars)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {item.review}
              </p>

              {/* Name */}
              <h3 className="font-semibold text-gray-900 text-sm">
                — {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
