"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Clinic Gallery</h1>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-heading text-center">
          Before / After & Clinic Images
        </h2>

        <p className="text-textLight text-lg text-center mt-4 max-w-2xl mx-auto">
          Real patient results and a glimpse of our clinic facilities. This
          gallery reflects our commitment to quality care.
        </p>

        {/* GALLERY GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={img}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover hover:scale-110 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
