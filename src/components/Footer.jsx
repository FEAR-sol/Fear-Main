import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleNav = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <footer className="bg-fear-dark py-10 px-4 sm:px-6 md:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <p className="text-white text-2xl font-serif tracking-widest mb-1">FEAR</p>
            <p className="text-gray-500 text-xs mb-4">Face Everything And Rise</p>
            {/* Contact CTA */}
            <button
              onClick={() => handleNav('/contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors border border-white/15"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </button>
          </motion.div>

          {/* Nav links — all navbar items */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3">
              <button onClick={() => handleNav('/')} className="text-gray-400 text-sm hover:text-white transition-colors text-left">Home</button>
              <button onClick={handleServicesClick} className="text-gray-400 text-sm hover:text-white transition-colors text-left">Services</button>
              <button onClick={() => handleNav('/about')} className="text-gray-400 text-sm hover:text-white transition-colors text-left">About</button>
              <button onClick={() => handleNav('/contact')} className="text-white text-sm hover:text-gray-300 transition-colors text-left font-medium">Contact</button>
              <button onClick={() => handleNav('/articles')} className="text-gray-400 text-sm hover:text-white transition-colors text-left">Articles</button>
              <button onClick={() => handleNav('/blogs')} className="text-gray-400 text-sm hover:text-white transition-colors text-left">Blogs</button>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase mb-4">Legal</p>
            <a
              href="/TERMS AND POLICIES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-white transition-colors underline underline-offset-4 block"
            >
              Terms & Policies
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-5" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">© FEAR 2026. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built with precision. Shipped with purpose.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
