import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const MenuItem = ({ item, index }) => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
      className="bg-[#FAF8F5] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-[#E8DCC8]"
    >
      <h3 className="text-xl font-semibold text-[#3E2723] mb-2 font-lora">{item.name}</h3>
      <p className="text-[#5D4037]/70 mb-4 text-sm font-poppins">{item.description}</p>
      <span className="text-[#8B6F47] font-bold text-lg font-lora">{item.price}</span>
    </motion.div>
  );
};

export default MenuItem;