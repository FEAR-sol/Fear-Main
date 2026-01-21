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
      {/* Responsive Image Container - Optimized for All Devices */}
      {image && (
        <div className="relative w-full bg-gray-50 overflow-hidden">
          {/* Mobile Image Container - Optimized */}
          <div className="block sm:hidden w-full relative overflow-hidden rounded-t-2xl bg-gray-50">
            <div 
              className="w-full relative flex items-center justify-center"
              style={{
                height: '160px',
                minHeight: '160px',
                maxHeight: '160px',
                padding: '0.5rem'
              }}
            >
              <img
                src={image}
                alt="Service"
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                onError={(e) => {
                  e.target.style.objectFit = 'contain';
                  e.target.style.backgroundColor = '#f5f5f5';
                }}
              />
            </div>
          </div>

          {/* Tablet Image Container - Optimized */}
          <div className="hidden sm:block lg:hidden w-full relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-gray-50">
            <div 
              className="w-full relative flex items-center justify-center"
              style={{
                height: '200px',
                minHeight: '200px',
                maxHeight: '200px',
                padding: '1rem'
              }}
            >
              <img
                src={image}
                alt="Service"
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                onError={(e) => {
                  e.target.style.objectFit = 'contain';
                  e.target.style.backgroundColor = '#f5f5f5';
                }}
              />
            </div>
          </div>
          
          {/* Desktop Image Container - Optimized */}
          <div className="hidden lg:block w-full relative overflow-hidden bg-gray-50">
            <div 
              className="w-full relative overflow-hidden flex items-center justify-center"
              style={{ 
                height: '240px',
                minHeight: '240px',
                maxHeight: '240px',
                padding: '1.5rem'
              }}
            >
              <motion.img
                src={image}
                alt="Service"
                className="max-w-full max-h-full object-contain"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.5 }
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.style.objectFit = 'contain';
                  e.target.style.backgroundColor = '#f5f5f5';
                }}
              />
              {/* Desktop hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-fear-dark/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Section - Only Click to Explore Button */}
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center relative w-full max-w-full overflow-hidden">
        {/* Responsive Click to Explore Button */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 sm:py-4 md:py-5 px-4 sm:px-6 bg-fear-dark text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base md:text-lg hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group/btn"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
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