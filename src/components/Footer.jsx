import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-fear-dark py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side - Copyright */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-sm sm:text-base font-medium">
            © FEAR 2026
          </p>
        </motion.div>

        {/* Right Side - Terms and Conditions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/TERMS AND POLICIES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm sm:text-base font-medium hover:text-gray-300 transition-colors duration-300 underline underline-offset-4"
          >
            Terms and Conditions
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
