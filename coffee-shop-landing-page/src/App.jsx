import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Location from '@/components/Location';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Cozy Corner Coffee - Your Neighborhood Coffee Shop</title>
        <meta name="description" content="Welcome to Cozy Corner Coffee - a warm, inviting neighborhood coffee shop serving artisanal coffee, fresh pastries, and delicious food in a cozy atmosphere." />
      </Helmet>
      <div className="min-h-screen bg-[#FAF8F5]">
        <Header />
        <Hero />
        <Menu />
        <Location />
        <Gallery />
        <Testimonials />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;