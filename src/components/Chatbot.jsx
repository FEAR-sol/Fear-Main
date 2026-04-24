'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Cyra, FEAR's AI assistant. I can help you learn about our services, process, team, and more. What would you like to know?" }
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
      response: "FEAR is a technology product studio and AI-driven digital agency. We design, develop, and deploy digital platforms — websites, mobile apps, AI tools, and brand identities — for startups and growing businesses. We're not just a service provider; we're a product-building partner."
    },
    birth: {
      keywords: ['birth of fear', 'how fear started', 'fear origin', 'when fear started', 'fear history'],
      response: "FEAR was born from a simple belief: great ideas deserve great execution. We built FEAR as a place where design meets engineering, branding connects with technology, and AI empowers humans. FEAR is for founders who care about quality and brands that want to last."
    },
    vision: {
      keywords: ['vision', 'fear vision', 'what is your vision'],
      response: "FEAR's vision is to build a world where brands grow through clarity, systems, and intelligent design — not chaos. We want to become a studio that designs growth itself — quietly, precisely, and sustainably."
    },
    mission: {
      keywords: ['mission', 'fear mission', 'what is your mission'],
      response: "Our mission is to help ambitious brands transform ideas into scalable digital products through design, technology, and AI — all under one roof. We build foundations for growth, not just deliver projects."
    },
    services: {
      keywords: ['services', 'what services', 'what do you offer', 'offerings'],
      response: "FEAR offers four core capabilities:\n\n1. Web Platforms — Custom websites and digital platforms built for performance and scale\n\n2. Mobile Applications — User-focused apps for iOS and Android\n\n3. AI Automation — Smart workflows, chatbots, and AI-powered tools\n\n4. Brand & Product Design — Logos, identities, and UI/UX design"
    },
    web: {
      keywords: ['web development', 'website', 'web design', 'web services'],
      response: "Our Web Development services include:\n• Web Design — Beautiful, conversion-focused interfaces\n• Web Development — Scalable, performant platforms\n• Hosting & Maintenance — Reliable infrastructure and ongoing support\n• SEO Optimization — Ensuring your site ranks and performs"
    },
    app: {
      keywords: ['app development', 'mobile app', 'application'],
      response: "Our App Development services include:\n• App Design — Intuitive mobile interfaces\n• App Development — Native and cross-platform solutions\n• Maintenance & Support — Ongoing updates and technical support\n• ASO & Integration — App Store Optimization and seamless integrations"
    },
    ai: {
      keywords: ['ai solutions', 'artificial intelligence', 'ai services', 'automation', 'chatbot'],
      response: "Our AI capabilities include:\n• AI Automation — Streamlining workflows and reducing manual work\n• AI Chatbots — Intelligent conversational interfaces for your product\n• AI Voice Assistants — Voice-enabled AI interactions\n• Custom AI Integration — Embedding AI into your existing systems"
    },
    branding: {
      keywords: ['branding', 'design', 'logo', 'graphics', 'brand identity'],
      response: "Our Branding services include:\n• Logo Design — Memorable, premium brand identities\n• Brand Identity Systems — Colors, typography, and visual language\n• Poster & Thumbnail Design — Engaging visual content\n• Brochure Design — Professional marketing collateral"
    },
    startup: {
      keywords: ['startup', 'founder', 'first website', 'early stage', 'mvp', 'new business'],
      response: "FEAR is startup-friendly by design. We work with early-stage founders who need quality execution without agency overhead. Whether you need your first website, a brand identity, a mobile MVP, or an AI chatbot — we scope it right, build it fast, and make sure it works. No bloated retainers. Just focused execution."
    },
    process: {
      keywords: ['process', 'how do you work', 'workflow', 'methodology', 'steps'],
      response: "Our process:\n1. Discovery — Understanding your business, goals, and challenges\n2. Design — Creating UI/UX concepts and digital architecture\n3. Development — Building scalable platforms with modern tech\n4. AI Integration — Adding automation and intelligent workflows where it adds real value\n5. Launch & Support — Deploying and maintaining your product long-term"
    },
    results: {
      keywords: ['results', 'outcomes', 'what results', 'success', 'track record'],
      response: "FEAR delivers measurable outcomes:\n• 100% client satisfaction rate\n• 8+ products shipped\n• 3x faster development with AI tools\n• 24/7 support and maintenance\n\nOur first client project was a full e-commerce platform — designed, built, and deployed end-to-end."
    },
    team: {
      keywords: ['team', 'who works', 'team members', 'people'],
      response: "Meet the FEAR team:\n• YASHASWI — Full Stack Developer\n• MAANASA — UI/UX Designer\n• SUGEET — Full Stack Developer\n• NIKITHA — Digital Marketing Lead\n• DWIRAJ — Backend Developer\n• SHRAVANI — Associate UI/UX Designer"
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'get in touch', 'mail', 'hire'],
      response: "Ready to build something? Head to our Contact page or reach out directly. We respond fast and love talking to founders with real ideas."
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget'],
      response: "Our pricing is scoped per project — no one-size-fits-all packages. We work with startups and growing businesses, so we're flexible on budget. Reach out with your project details and we'll give you a clear, honest proposal."
    },
    articles: {
      keywords: ['articles', 'blogs', 'content', 'insights', 'read'],
      response: "FEAR publishes articles and blog posts on AI, web design, branding, startups, and product building. Check out the Articles and Blogs sections in the navigation to read our latest insights."
    },
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-fear-dark rounded-full shadow-lg flex items-center justify-center text-white hover:bg-black transition-colors duration-300"
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
              className="w-5 h-5 sm:w-6 sm:h-6"
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
              className="w-5 h-5 sm:w-6 sm:h-6"
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
            className="fixed bottom-16 right-2 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1rem)] max-w-[380px] sm:w-96 h-[70vh] max-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-fear-dark text-white p-3 sm:p-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-fear-dark font-bold text-sm sm:text-base">
                C
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg truncate">Cyra</h3>
                <p className="text-xs text-gray-300 truncate">FEAR AI Assistant</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 min-h-0">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] p-2.5 sm:p-3 rounded-2xl break-words ${
                      message.type === 'user'
                        ? 'bg-fear-dark text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex-shrink-0">
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  id="chatbot-input"
                  name="chatbot-message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about FEAR..."
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-fear-dark text-xs sm:text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-fear-dark text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
