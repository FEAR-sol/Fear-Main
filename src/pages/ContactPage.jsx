import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact FEAR Agency - Let's Build Something Amazing"
        description="Get in touch with FEAR Agency for web development, app development, AI solutions, and branding services. Let's transform your digital presence together."
        keywords="contact FEAR agency, get quote, web development inquiry, hire developers, digital agency contact"
      />
      <div className="w-full max-w-full overflow-x-hidden">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
