import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <footer className="bg-[#3E2723] text-white py-12 px-4">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-[#D4A574]" />
              <span className="text-xl font-semibold font-lora">
                Cozy Corner Coffee
              </span>
            </div>

            <p className="text-sm text-white/80 font-poppins">
              Your neighborhood coffee shop where every cup tells a story and every visit feels like home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="block mb-4 text-lg font-semibold font-lora">
              Quick Links
            </span>

            <div className="space-y-2">
              <p className="text-white/80 text-sm font-poppins cursor-pointer hover:text-[#D4A574] transition-colors">Menu</p>
              <p className="text-white/80 text-sm font-poppins cursor-pointer hover:text-[#D4A574] transition-colors">Location</p>
              <p className="text-white/80 text-sm font-poppins cursor-pointer hover:text-[#D4A574] transition-colors">Gallery</p>
              <p className="text-white/80 text-sm font-poppins cursor-pointer hover:text-[#D4A574] transition-colors">Reviews</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="block mb-4 text-lg font-semibold font-lora">
              Follow Us
            </span>

            <div className="flex gap-4">
              <button
                onClick={handleSocialClick}
                className="p-3 transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Instagram className="w-5 h-5" />
              </button>

              <button
                onClick={handleSocialClick}
                className="p-3 transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Facebook className="w-5 h-5" />
              </button>

              <button
                onClick={handleSocialClick}
                className="p-3 transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center border-t border-white/20">
          <p className="text-sm text-white/60 font-poppins">
            © 2025 Cozy Corner Coffee. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
