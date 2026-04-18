import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhatWeBuild from '../components/WhatWeBuild';
import ParallaxServices from '../components/ParallaxServices';
import ProcessSection from '../components/ProcessSection';
import StartupFriendly from '../components/StartupFriendly';
import WhyChooseFear from '../components/WhyChooseFear';

const Home = () => {
  return (
    <>
      <SEO 
        title="FEAR Agency - Premium Web Development, AI Solutions & Branding Services"
        description="Transform your digital presence with FEAR Agency. We deliver scalable web development, mobile apps, AI solutions, and premium branding for growing businesses."
        keywords="web development agency, AI solutions, app development, branding services, digital transformation, FEAR agency, custom software development"
      />
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
    </>
  );
};

export default Home;
