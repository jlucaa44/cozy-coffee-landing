import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'The perfect neighborhood spot! The coffee is exceptional and the atmosphere makes you want to stay all day. My favorite place to work and relax.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      review: 'Best coffee in town, hands down. The baristas really know their craft, and the pastries are always fresh. It\'s become my daily ritual.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      review: 'Such a cozy and welcoming place! The staff remembers my order and always greet me with a smile. Feels like a second home.',
      rating: 5
    },
    {
      name: 'David Martinez',
      review: 'Great selection of drinks and food. The atmosphere is peaceful and perfect for reading or catching up with friends. Highly recommend!',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      review: 'I love everything about this place - from the warm ambiance to the delicious coffee and treats. The perfect corner to escape to.',
      rating: 5
    },
    {
      name: 'James Wilson',
      review: 'Outstanding quality and service! The attention to detail in every cup is remarkable. This is what a neighborhood coffee shop should be.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Título Lora */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-lora">
            What Our Guests Say
          </h2>

          {/* Subtítulo Poppins */}
          <p className="text-lg text-[#5D4037]/80 max-w-2xl mx-auto font-poppins">
            Don't just take our word for it - hear from our wonderful community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              {/* Estrelas (mantém igual) */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A574] text-[#D4A574]" />
                ))}
              </div>

              {/* Review Poppins */}
              <p className="text-[#5D4037]/80 mb-4 italic font-poppins">
                "{testimonial.review}"
              </p>

              {/* Nome com Lora */}
              <p className="text-[#3E2723] font-semibold font-lora">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
