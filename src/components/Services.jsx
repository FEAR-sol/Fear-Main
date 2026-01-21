import { motion } from 'framer-motion';

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
        'AI Voice Assistant'
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

  const ServiceCard = ({ title, items }) => {
    return (
      <motion.div 
        className="bg-fear-card rounded-2xl p-6 shadow-lg border border-fear-card/30 h-full"
        whileHover={{ 
          y: -5,
          scale: 1.01,
          boxShadow: "0 20px 25px -5px rgba(26, 26, 26, 0.15)",
          transition: { duration: 0.3 }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Service Title */}
        <motion.h3 
          className="text-xl font-medium text-fear-dark mb-6 whitespace-pre-line leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        {/* Service Items List */}
        <ul className="space-y-3">
          {items && items.map((item, index) => (
            <motion.li 
              key={index} 
              className="text-fear-text-gray text-sm flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              <motion.span
                className="w-2 h-2 bg-fear-dark rounded-full flex-shrink-0 mt-1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              />
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative bg-radial-gray w-full max-w-full">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16 sm:mb-20 relative z-10 w-full max-w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-fear-dark mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="h-1 w-16 sm:w-24 bg-fear-dark mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <ServiceCard title={service.title} items={service.items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
