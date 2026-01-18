import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Cyra, FEAR's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // FEAR Knowledge Base
  const fearKnowledge = {
    about: {
      keywords: ['what is fear', 'about fear', 'tell me about fear', 'who are you', 'what do you do'],
      response: "FEAR is a creative studio that designs, develops, and deploys digital solutions. We help ambitious brands transform ideas into scalable ecosystems through branding, technology, and intelligent automation—all under one roof. We exist to build foundations for growth, not just deliver projects."
    },
    birth: {
      keywords: ['birth of fear', 'how fear started', 'fear origin', 'when fear started', 'fear history'],
      response: "Every great idea starts quietly. FEAR was born to change the overwhelming process of turning vision into reality. We built FEAR as a place where ideas feel safe to grow—where design meets engineering, branding connects with technology, and AI empowers humans. FEAR is for those building something meaningful, for founders who care about quality, and for brands that want to last."
    },
    vision: {
      keywords: ['vision', 'fear vision', 'what is your vision'],
      response: "FEAR's vision is to build a world where brands grow through clarity, systems, and intelligent design—not chaos. We envision a future where businesses operate as connected ecosystems, where identity, technology, and automation work seamlessly together. Our vision is to become a studio that designs growth itself—quietly, precisely, and sustainably."
    },
    mission: {
      keywords: ['mission', 'fear mission', 'what is your mission'],
      response: "Our mission is to help ambitious brands transform ideas into scalable ecosystems through branding, technology, and intelligent automation. We create brand identities that feel intentional and timeless, build digital experiences that convert and scale, engineer systems that reduce complexity, integrate AI as silent infrastructure, and partner with founders who value long-term vision over short-term wins."
    },
    services: {
      keywords: ['services', 'what services', 'what do you offer', 'offerings'],
      response: "FEAR offers four main pillars of services:\n\n1. Web Development - Web Design, Development, Hosting & Maintenance, SEO Optimization\n\n2. App Development - App Design, Development, Maintenance & Support, ASO Integration\n\n3. AI Solutions - AI Customization, Automation, Chatbots, Voice Assistants\n\n4. Branding & Collaboration - Logo Design, Poster Design, Thumbnail Design, Brochure Design"
    },
    web: {
      keywords: ['web development', 'website', 'web design', 'web services'],
      response: "Our Web Development services include:\n• Web Design - Creating beautiful, user-friendly interfaces\n• Web Development - Building robust, scalable websites\n• Hosting & Maintenance - Reliable hosting and ongoing support\n• SEO Optimization & Integration - Ensuring your site ranks well and performs optimally"
    },
    app: {
      keywords: ['app development', 'mobile app', 'application'],
      response: "Our App Development services include:\n• App Design - Intuitive and engaging mobile interfaces\n• App Development - Native and cross-platform solutions\n• Maintenance and Support - Ongoing updates and technical support\n• ASO and Integration - App Store Optimization and seamless integrations"
    },
    ai: {
      keywords: ['ai solutions', 'artificial intelligence', 'ai services', 'automation'],
      response: "Our AI Solutions include:\n• AI Customization - Tailored AI solutions for your business\n• AI Automation - Streamlining workflows and processes\n• AI Chatbot - Intelligent conversational interfaces\n• AI Voice Assistant - Voice-enabled AI interactions"
    },
    branding: {
      keywords: ['branding', 'design', 'logo', 'graphics'],
      response: "Our Branding & Collaboration services include:\n• Logo Design - Memorable brand identities\n• Poster Design - Eye-catching promotional materials\n• Thumbnail Design - Engaging visual content\n• Brochure Design - Professional marketing collateral"
    },
    team: {
      keywords: ['team', 'who works', 'team members', 'people'],
      response: "Meet our talented team:\n• YASHASWI - Full Stack Developer\n• MAANASA - UI/UX Designer\n• SUGEET - Full Stack Developer\n• NIKITHA - Digital Marketing Lead\n• DWIRAJ - Backend Developer\n• SHRAVANI - Associate UI/UX Designer"
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'get in touch', 'mail'],
      response: "You can reach FEAR at:\n📧 Email: [Your email here]\n📱 Instagram: [Your Instagram handle]\n💼 LinkedIn: [Your LinkedIn profile]\n📘 Facebook: [Your Facebook page]\n\nFeel free to reach out for any inquiries or collaborations!"
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'how much', 'rates'],
      response: "Our pricing varies based on project scope and requirements. Each project is unique, and we provide customized quotes. Please contact us with your specific needs, and we'll provide a detailed proposal tailored to your goals and budget."
    },
    process: {
      keywords: ['process', 'how do you work', 'workflow', 'methodology'],
      response: "Our process is simple yet effective:\n1. Discovery - Understanding your vision and goals\n2. Strategy - Planning the optimal approach\n3. Design - Creating beautiful, functional solutions\n4. Development - Building with precision and quality\n5. Testing - Ensuring everything works perfectly\n6. Launch - Deploying your solution\n7. Support - Ongoing maintenance and growth"
    }
  };

  const findResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check each knowledge category
    for (const [key, data] of Object.entries(fearKnowledge)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }

    // Greetings
    if (input.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'm Cyra, your FEAR assistant. I can help you learn about FEAR's services, team, vision, mission, and more. What would you like to know?";
    }

    // Thanks
    if (input.match(/(thank|thanks|appreciate)/)) {
      return "You're welcome! Is there anything else you'd like to know about FEAR?";
    }

    // Default response
    return "I'd be happy to help! I can tell you about:\n• FEAR's services (Web, App, AI, Branding)\n• Our vision and mission\n• The birth of FEAR\n• Our team members\n• How to contact us\n• Our work process\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse = { type: 'bot', text: findResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-fear-dark rounded-full shadow-lg flex items-center justify-center text-white hover:bg-black transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-fear-dark text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-fear-dark font-bold">
                C
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cyra</h3>
                <p className="text-xs text-gray-300">FEAR AI Assistant</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-fear-dark text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  id="chatbot-input"
                  name="chatbot-message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about FEAR..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-fear-dark text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-fear-dark text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
