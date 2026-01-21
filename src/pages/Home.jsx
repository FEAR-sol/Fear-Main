import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ParallaxServices from '../components/ParallaxServices';
import WhyChooseFear from '../components/WhyChooseFear';

const Home = () => {
  return (
    <div 
      className="viewport-safe no-horizontal-scroll" 
      style={{ 
        overflowX: 'hidden', 
        maxWidth: '100vw', 
        width: '100vw',
        position: 'relative'
      }}
    >
      <Hero />
      <Services />
      <ParallaxServices />
      <WhyChooseFear />
    </div>
  );
};

export default Home;
