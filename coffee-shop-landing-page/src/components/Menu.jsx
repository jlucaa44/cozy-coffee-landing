import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuItem from '@/components/MenuItem';

const Menu = () => {
  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Rich and bold single shot', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk foam', price: '$4.50' },
      { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '$4.75' },
      { name: 'Cold Brew', description: 'Smooth, refreshing cold coffee', price: '$4.25' },
      { name: 'Mocha', description: 'Espresso with chocolate and milk', price: '$5.00' },
      { name: 'Flat White', description: 'Velvety microfoam with espresso', price: '$4.50' }
    ],
    pastries: [
      { name: 'Croissant', description: 'Buttery, flaky French pastry', price: '$3.75' },
      { name: 'Blueberry Muffin', description: 'Fresh baked with wild blueberries', price: '$3.50' },
      { name: 'Cinnamon Roll', description: 'Warm with cream cheese frosting', price: '$4.25' },
      { name: 'Almond Biscotti', description: 'Perfect for dipping', price: '$2.50' },
      { name: 'Chocolate Chip Cookie', description: 'Homemade and gooey', price: '$2.75' },
      { name: 'Scone', description: 'Traditional with clotted cream', price: '$3.50' }
    ],
    food: [
      { name: 'Avocado Toast', description: 'Sourdough with fresh avocado', price: '$8.50' },
      { name: 'Breakfast Sandwich', description: 'Egg, cheese, and bacon', price: '$7.50' },
      { name: 'Greek Yogurt Bowl', description: 'With granola and fresh berries', price: '$6.75' },
      { name: 'Grilled Panini', description: 'Choice of chicken or veggie', price: '$9.00' },
      { name: 'Garden Salad', description: 'Fresh greens with house dressing', price: '$8.00' },
      { name: 'Soup of the Day', description: 'Ask about today\'s special', price: '$6.50' }
    ]
  };

  return (
    <section id="menu" className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">Our Menu</h2>
          <p className="font-poppins text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
            Handcrafted with love, served with a smile
          </p>
        </motion.div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-[#F5F0E8] p-1 rounded-full">
            <TabsTrigger 
              value="coffee" 
              className="font-poppins rounded-full data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white transition-all duration-300"
            >
              Coffee
            </TabsTrigger>
            <TabsTrigger 
              value="pastries"
              className="font-poppins rounded-full data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white transition-all duration-300"
            >
              Pastries
            </TabsTrigger>
            <TabsTrigger 
              value="food"
              className="font-poppins rounded-full data-[state=active]:bg-[#8B6F47] data-[state=active]:text-white transition-all duration-300"
            >
              Food
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                  <MenuItem key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;