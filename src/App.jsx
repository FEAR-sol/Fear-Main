import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import ArticlePage from './pages/ArticlePage';
import Loader from './components/Loader';
import PageLoader from './components/PageLoader';
import PageTransition from './components/PageTransition';
import { useMobileScrollFix } from './hooks/useMobileScrollFix';

function AppContent() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

  // CRITICAL: Apply mobile scroll fix
  useMobileScrollFix();

  useEffect(() => {
    // Show page loader on route change
    setIsPageLoading(true);
    
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader isLoading={isPageLoading} />
      <div 
        className="bg-radial-gray min-h-screen flex flex-col no-horizontal-scroll viewport-safe"
        style={{
          touchAction: 'auto',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'auto',
          minHeight: '100vh'
        }}
      >
        <Navbar />
        <main 
          className="flex-grow no-horizontal-scroll viewport-safe"
          style={{
            touchAction: 'auto',
            WebkitOverflowScrolling: 'touch',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: 'auto'
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition locationKey={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/articles" element={<BlogsPage type="article" />} />
                <Route path="/articles/:slug" element={<ArticlePage />} />
                <Route path="/blogs" element={<BlogsPage type="blog" />} />
                <Route path="/blogs/:slug" element={<ArticlePage />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {isInitialLoading ? <Loader /> : <AppContent />}
    </Router>
  );
}

export default App;
