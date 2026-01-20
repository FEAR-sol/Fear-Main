import { motion } from 'framer-motion';

const ServiceCard = ({ title, items = [], image, link }) => {
  // Determine image optimization strategy based on image type
  const getImageStrategy = (imagePath) => {
    if (!imagePath) return { objectFit: 'contain', aspectRatio: '16/9' };
    
    const fileName = imagePath.toLowerCase();
    
    if (fileName.includes('web.jpg') || fileName.includes('ai.jpg')) {
      return { objectFit: 'cover', aspectRatio: '16/9' };
    } else if (fileName.includes('app.png') || fileName.includes('branding.png')) {
      return { objectFit: 'contain', aspectRatio: '4/3' };
    }
    
    return { objectFit: 'cover', aspectRatio: '16/9' };
  };

  const imageStrategy = getImageStrategy(image);
  
  return (
    <motion.div 
      className="bg-fear-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-full relative group cursor-pointer w-full max-w-full"
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
      {/* Mobile-First Responsive Image Container */}
      {image && (
        <div className="relative w-full bg-white overflow-hidden">
          {/* Mobile Image Container - Fixed dimensions with CSS class */}
          <div className="block sm:hidden mobile-image-container rounded-t-2xl">
            <img
              src={image}
              alt={title}
              loading="lazy"
              onError={(e) => {
                e.target.style.objectFit = 'contain';
                e.target.style.padding = '1rem';
                e.target.style.backgroundColor = '#f5f5f5';
              }}
            />
            {/* Mobile overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Tablet and Desktop Image Container */}
          <div 
            className="hidden sm:block w-full relative overflow-hidden"
            style={{ 
              aspectRatio: imageStrategy.aspectRatio,
              minHeight: '200px',
              maxHeight: '280px'
            }}
          >
            <motion.img
              src={image}
              alt={title}
              className={`w-full h-full ${imageStrategy.objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
              style={{
                objectFit: imageStrategy.objectFit,
                objectPosition: 'center',
              }}
              whileHover={{ 
                scale: imageStrategy.objectFit === 'cover' ? 1.1 : 1.05,
                transition: { duration: 0.5 }
              }}
              loading="lazy"
              onError={(e) => {
                e.target.style.objectFit = 'contain';
                e.target.style.padding = '1rem';
              }}
            />
            {/* Desktop hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-fear-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col flex-grow relative w-full max-w-full overflow-hidden">
        <motion.h3 
          className="font-josefin text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 md:mb-6 whitespace-pre-line leading-tight text-black relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        <div className="mt-auto relative z-10">
          <motion.div 
            className="bg-white/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-fear-dark/20 backdrop-blur-sm group-hover:bg-white/60 transition-all duration-300"
            style={{ backgroundColor: 'rgba(191, 188, 182, 0.6)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4">
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
                  <span className="break-words flex-1 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Responsive Click Me Button */}
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 bg-fear-dark text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group/btn"
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
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                  <span>Click Me</span>
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

        {/* Responsive Corner Accent */}
        <motion.div
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
