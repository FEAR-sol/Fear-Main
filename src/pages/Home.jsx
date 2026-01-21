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
        touchAction: 'auto',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        overflowX: 'hidden',
        height: 'auto'
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
