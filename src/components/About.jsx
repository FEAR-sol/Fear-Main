import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    { name: 'YASHASWI', role: 'FULL STACK DEVELOPER', image: '/yashaswi.JPG' },
    { name: 'MAANASA', role: 'UI/UX DESIGNER', image: '/maanasa.jpeg' },
    { name: 'SUGEET', role: 'FULL STACK DEVELOPER', image: '/sugeet.jpeg' },
    { name: 'NIKITHA', role: 'DIGITAL MARKETING LEAD', image: '/nikitha.JPG' },
    { name: 'DWIRAJ', role: 'BACKEND DEVELOPER', image: '/dwiraj.jpeg' },
    { name: 'SHRAVANI', role: 'ASSOCIATE UI/UX DESIGNER', image: '/shravani.jpeg' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 flex items-center justify-center relative overflow-hidden w-full max-w-full">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #000 1px, transparent 1px), radial-gradient(circle at 80% 80%, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10 w-full max-w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header with Decorative Lines */}
        <motion.div className="text-center mb-6 sm:mb-8" variants={itemVariants}>
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 mb-4"
          >
            <motion.div
              className="h-px w-12 sm:w-20 bg-black"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.h2 
              className="font-jacques text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black"
            >
              Our story 
            </motion.h2>
            <motion.div
              className="h-px w-12 sm:w-20 bg-black"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div className="text-center mb-12 sm:mb-16">
          <motion.h3 
            className="font-jacques text-2xl sm:text-3xl md:text-4xl text-black tracking-tight inline-block relative px-4"
            variants={itemVariants}
          >
            THE BIRTH OF FEAR
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-black"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h3>
        </motion.div>

        {/* Content Box */}
        <motion.div 
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mb-16 sm:mb-20 relative overflow-hidden"
          style={{ backgroundColor: '#BFBCB6' }}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          {/* Decorative Corner Accents */}
          <motion.div
            className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-black/10"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-black/10"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring" }}
          />

          <motion.div 
            className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 sm:space-y-6 text-justify font-serif relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <span className="font-semibold text-black">Every great idea starts quietly. A thought. A sketch. A late-night conversation about "what if?"</span>
              <br /><br />
              But most ideas never make it past that stage not because they are not powerful, but because 
              turning vision into reality is overwhelming.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              FEAR was born to change that. We built FEAR as a place where ideas feel safe to grow. 
              A place where design meets engineering. Where branding connects with technology. 
              Where AI doesn't replace humans but empowers them. FEAR is for the ones who are building 
              something meaningful. For founders who care about quality. For brands that want to last.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              For ideas that deserve the right execution. If you're ready to turn vision into reality 
              FEAR is ready to walk with you.
            </motion.p>
            <motion.p 
              className="font-bold text-black"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              FEAR we design, develop & deploy.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Vision and Mission Section */}
        <motion.div 
          className="mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="font-jacques text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 text-black px-4"
            variants={itemVariants}
          >
            FEAR VISION AND MISSION
          </motion.h2>

          <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14"
              style={{ backgroundColor: '#BFBCB6' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="font-jacques text-2xl sm:text-3xl md:text-4xl text-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                FEAR — Vision
              </motion.h3>
              
              <motion.div 
                className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.p
                  className="font-semibold"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  To build a world where brands grow through clarity, systems, and intelligent design—not chaos.
                </motion.p>
                
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  FEAR envisions a future where businesses don't struggle to scale because of fragmented tools, scattered agencies, or shallow branding. We see brands operating as connected ecosystems—where identity, technology, and automation work seamlessly together.
                </motion.p>
                
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  Our vision is to become a studio that designs growth itself—quietly, precisely, and sustainably.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14"
              style={{ backgroundColor: '#BFBCB6' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="font-jacques text-2xl sm:text-3xl md:text-4xl text-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                FEAR — Mission
              </motion.h3>
              
              <motion.div 
                className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.p
                  className="font-semibold"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  To help ambitious brands transform ideas into scalable ecosystems through branding, technology, and intelligent automation—under one roof.
                </motion.p>
                
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  We exist to:
                </motion.p>

                <motion.ul 
                  className="space-y-3 pl-6"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08
                      }
                    }
                  }}
                >
                  <motion.li
                    className="list-disc"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    Create brand identities that feel intentional, premium, and timeless
                  </motion.li>
                  <motion.li
                    className="list-disc"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    Build digital experiences that convert, perform, and scale
                  </motion.li>
                  <motion.li
                    className="list-disc"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    Engineer systems that reduce complexity and increase leverage
                  </motion.li>
                  <motion.li
                    className="list-disc"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    Integrate AI and automation as silent infrastructure, not surface-level hype
                  </motion.li>
                  <motion.li
                    className="list-disc"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    Partner with founders who value long-term vision over short-term wins
                  </motion.li>
                </motion.ul>

                <motion.p
                  className="font-semibold pt-2"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  FEAR doesn't deliver projects. We build foundations for growth.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mt-20 sm:mt-24 md:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="font-jacques text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black inline-block relative px-4"
              variants={itemVariants}
            >
              Meet our Team
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center relative group w-full max-w-full"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Image Container with Photo */}
                <motion.div 
                  className="w-full aspect-[3/4] rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 overflow-hidden relative"
                  style={{ backgroundColor: '#BFBCB6' }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                
                {/* Name with Underline Animation */}
                <motion.div className="relative">
                  <motion.h4 
                    className="font-jacques text-xl sm:text-2xl text-black mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {member.name}
                  </motion.h4>
                  <motion.div
                    className="h-0.5 bg-black absolute -bottom-1 left-0 right-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  />
                </motion.div>
                
                {/* Role */}
                <motion.p 
                  className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide mt-3 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {member.role}
                </motion.p>

                {/* Decorative Corner on Hover */}
                <motion.div
                  className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
