import React from 'react';
import Hero from '../components/Hero';
import WhatWeBuild from '../components/WhatWeBuild';
import ParallaxServices from '../components/ParallaxServices';
import ProcessSection from '../components/ProcessSection';
import StartupFriendly from '../components/StartupFriendly';
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
      <WhatWeBuild />
      <ParallaxServices />
      <ProcessSection />
      <StartupFriendly />
      <WhyChooseFear />
    </div>
  );
};

export default Home;
