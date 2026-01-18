import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      items: [
        'Web Design',
        'Web Development',
        'Host And Maintenance',
        'SEO optimization And Integration'
      ]
    },
    {
      title: 'App Development',
      items: [
        'App Design',
        'App Development',
        'Maintenance and Support',
        'ASO and Integration'
      ]
    },
    {
      title: 'AI Solutions',
      items: [
        'AI Customization',
        'AI Automation',
        'AI Chatbot',
        'AI Voice Assistant.'
      ]
    },
    {
      title: 'Branding\nAnd Collaboration',
      items: [
        'Logo Design',
        'Poster Design',
        'Thumbnail Design',
        'Brochure Design'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 overflow-hidden relative bg-gradient-to-b from-fear-dark/5 to-transparent">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Section Title */}
      <motion.div
        className="text-center mb-16 sm:mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="h-1 w-16 sm:w-24 bg-black mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.div>

      {/* Grid Layout with Staggered Animation */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -15,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{
                y: -20,
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              >
                <ServiceCard title={service.title} items={service.items} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-fear-dark/5 blur-xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-fear-dark/5 blur-xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
};

export default Services;
