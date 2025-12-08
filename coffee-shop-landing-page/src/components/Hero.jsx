import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
<section id="hero" className="relative w-full pt-[64px]">

  {/* Imagens */}
  <img 
    src="/pc-hero.webp"
    className="hidden w-full h-auto md:block"
  />
  <img
    src="/mobile-hero.webp"
    className="block w-full h-auto md:hidden"
  />

  {/* Overlay */}
  <div className="absolute inset-0 z-10 flex items-center">
    <div className="flex flex-col w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-[90px] lg:-mt-[100px] md:-mt-[0px]">
      
      <h1
        className="
          font-lora
          font-semibold
          text-[28px] md:text-[44px] lg:text-[80px]
          leading-[1.26]
          text-white
          text-center lg:text-left


          text-shadow-mobile
          md:text-shadow-tablet
          lg:text-shadow-desktopnpm run dev
        "
      >
        Welcome to Cozy <br />
        <span className="text-yellow-300">Corner</span>, your new <br />
        <span className="text-yellow-300">favorite</span> coffee spot.
      </h1>

      <button

        onClick={() => {
          const el = document.getElementById('menu');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}

        className="
          font-poppins
          w-[110px] h-[30px]
          md:w-[148px] md:h-[40px]
          lg:w-[208px] lg:h-[57px]
          bg-[#237EB7]
          hover:bg-[#1F6C99]     /* 🔥 */
          text-white
          text-[11px]
          md:text-[12px]
          lg:text-[17px]
          font-medium
          rounded-full
          mt-4
          mx-auto lg:mx-0
        "
      >
        Explore Our Menu
      </button>

    </div>
  </div>
</section>


  );
};

export default Hero;