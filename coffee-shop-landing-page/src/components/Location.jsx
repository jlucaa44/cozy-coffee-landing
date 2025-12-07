import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 px-4 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">Visit Us</h2>
          <p className="font-poppins text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
            We can't wait to welcome you to our cozy corner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white shadow-lg rounded-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B6F47] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-lora text-xl font-semibold text-[#3E2723] mb-2">Address</h3>
                  <p className="font-poppins text-[#5D4037]/80">123 Maple Street</p>
                  <p className="font-poppins text-[#5D4037]/80">Downtown, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8B6F47] p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-lora text-xl font-semibold text-[#3E2723] mb-2">Opening Hours</h3>
                  <p className="font-poppins text-[#5D4037]/80">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="font-poppins text-[#5D4037]/80">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8B6F47] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-lora text-xl font-semibold text-[#3E2723] mb-2">Contact</h3>
                  <p className="font-poppins text-[#5D4037]/80">(555) 123-4567</p>
                  <p className="font-poppins text-[#5D4037]/80">hello@cozycorner.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9352%2C40.7489&layer=mapnik&marker=40.7308%2C-73.9706"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Coffee Shop Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;