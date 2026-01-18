import { motion } from 'framer-motion';

const ServiceCard = ({ title, items = [], image, link }) => {
  // Determine if image should fill (cover) or fit (contain)
  const shouldFillImage = image && (image.includes('web.jpg') || image.includes('AI.jpg'));
  
  return (
    <motion.div 
      className="bg-fear-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-full relative group cursor-pointer"
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Container - only show if image is provided */}
      {image && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-white flex items-center justify-center">
          <motion.img
            src={image}
            alt={title}
            className={`w-full h-full ${shouldFillImage ? 'object-cover' : 'object-contain'}`}
            whileHover={{ scale: shouldFillImage ? 1.1 : 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-fear-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow relative">
        <motion.h3 
          className="font-josefin text-lg sm:text-xl md:text-2xl font-normal mb-4 sm:mb-6 whitespace-pre-line leading-tight text-black relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        <div className="mt-auto relative z-10">
          <motion.div 
            className="bg-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-fear-dark/20 backdrop-blur-sm group-hover:bg-white/60 transition-all duration-300"
            style={{ backgroundColor: 'rgba(191, 188, 182, 0.6)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul className="space-y-2 sm:space-y-3 mb-4">
              {items.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="text-gray-700 text-xs sm:text-sm font-medium flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  <motion.span
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black rounded-full flex-shrink-0 mt-1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  />
                  <span className="break-words flex-1">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Click Me Button - only show if link is provided */}
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 sm:py-3 px-4 bg-fear-dark text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group/btn"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Click Me
                  <motion.svg 
                    className="w-3 h-3 sm:w-4 sm:h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
