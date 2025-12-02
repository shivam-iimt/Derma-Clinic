"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const beforeAfterImages = [
  { before: "/before1.jpg", after: "/after1.jpg" },
  { before: "/before2.jpg", after: "/after2.jpg" },
  { before: "/before3.jpg", after: "/after3.jpg" },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        >
          Before & After Results
        </motion.h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full max-w-4xl mx-auto"
        >
          {beforeAfterImages.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-lg"
              >
                {/* BEFORE */}
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-gray-600 mb-2">Before</h3>
                  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.before}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* AFTER */}
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-gray-600 mb-2">After</h3>
                  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.after}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
