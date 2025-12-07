import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">Our Gallery</h2>
          <p className="text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
            A glimpse into our warm and welcoming space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Coffee shop interior with comfortable seating"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1682142882978-c19f975d2407" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Barista making latte art"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1610324566780-38beb64916dc" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Fresh pastries display"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1652101270782-7b9187a6dafb" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Coffee and pastry on wooden table"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1644591353939-6939fc5e84f1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Customers enjoying coffee"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1568680466895-34b9504c8b10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
          >
            <img 
              alt="Coffee shop outdoor seating"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1700657363022-c64596839966" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;