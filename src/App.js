import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientLogos from './components/ClientLogos';
import HowWeWork from './components/HowWeWork';
import WhoWeAre from './components/WhoWeAre';
import TestimonialCarousel from './components/TestimonialCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurWorks from './components/OurWorks';
import WhatWeDesign from './components/WhatWeDesign';
import PricingSection from './components/Pricing';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <HowWeWork />
      <WhoWeAre />
      <TestimonialCarousel />
      <OurWorks />
      <WhatWeDesign />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;