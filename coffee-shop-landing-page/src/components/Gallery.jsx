import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section id="gallery" className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">Our Gallery</h2>
          <p className="text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
            A glimpse into our warm and welcoming space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Coffee shop interior with comfortable seating"
              className="object-cover w-full h-full"
             src="/image-one.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Barista making latte art"
              className="object-cover w-full h-full"
             src="/image-two.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Fresh pastries display"
              className="object-cover w-full h-full"
             src="/image-three.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Coffee and pastry on wooden table"
              className="object-cover w-full h-full"
             src="/image-four.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Customers enjoying coffee"
              className="object-cover w-full h-full"
             src="/image-five.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-2xl"
          >
            <img 
              alt="Coffee shop outdoor seating"
              className="object-cover w-full h-full"
             src="/image-six.webp" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;