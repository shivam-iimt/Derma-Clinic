"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/clinic1.jpg",
  "/clinic2.jpg",
  "/clinic3.jpg",
  "/clinic4.jpg",
  "/clinic5.jpg",
  "/clinic6.jpg",
];

export default function ClinicGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Clinic Gallery
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative w-full h-56 rounded-xl overflow-hidden 
                         shadow-md hover:shadow-xl transition border border-primaryBg"
            >
              <Image
                src={img}
                alt="Clinic Image"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
