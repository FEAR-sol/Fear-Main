import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About FEAR Agency - Our Story, Vision & Team"
        description="Learn about FEAR Agency's journey, mission to empower brands through design and technology, and meet our talented team of developers, designers, and strategists."
        keywords="about FEAR agency, our team, company vision, digital agency team, web development company"
      />
      <div className="w-full max-w-full overflow-x-hidden">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
