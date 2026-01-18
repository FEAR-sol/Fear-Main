import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ParallaxServices from '../components/ParallaxServices';
import WhyChooseFear from '../components/WhyChooseFear';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ParallaxServices />
      <WhyChooseFear />
    </>
  );
};

export default Home;
