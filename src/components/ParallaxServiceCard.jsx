import { motion } from 'framer-motion';

const ParallaxServiceCard = ({ image, link }) => {
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
      {/* Unified Responsive Image Container */}
      {image && (
        <div className="relative w-full bg-white overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
          <div className="w-full relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
            {/* Responsive Image with Proper Aspect Ratio */}
            <div className="relative w-full flex items-center justify-center" style={{
              height: 'clamp(140px, 20vw, 220px)', // Responsive height
              minHeight: '140px',
              maxHeight: '220px'
            }}>
              <motion.img
                src={image}
                alt="Service"
                className="max-w-full max-h-full object-contain drop-shadow-lg"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '90%', // Leave some padding
                  maxHeight: '90%',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                  transition: { duration: 0.3 }
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.style.objectFit = 'contain';
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.alt = 'Service Image';
                }}
                onLoad={(e) => {
                  // Ensure proper fitting after load
                  const img = e.target;
                  const container = img.parentElement;
                  const containerWidth = container.offsetWidth;
                  const containerHeight = container.offsetHeight;
                  const imgAspectRatio = img.naturalWidth / img.naturalHeight;
                  const containerAspectRatio = containerWidth / containerHeight;
                  
                  if (imgAspectRatio > containerAspectRatio) {
                    // Image is wider - fit to width
                    img.style.width = '90%';
                    img.style.height = 'auto';
                  } else {
                    // Image is taller - fit to height
                    img.style.height = '90%';
                    img.style.width = 'auto';
                  }
                }}
              />
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            {/* Hover overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-fear-dark/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl sm:rounded-t-3xl"
            />
          </div>
        </div>
      )}

      {/* Content Section - Click to Explore Button */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center relative w-full max-w-full overflow-hidden flex-grow">
        {/* Click to Explore Button */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 sm:py-4 md:py-5 px-4 sm:px-6 bg-fear-dark text-white rounded-xl font-medium text-sm sm:text-base md:text-lg hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group/btn"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Button shine effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <span>Click to Explore</span>
              <motion.svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
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
      </div>
    </motion.div>
  );
};

export default ParallaxServiceCard;