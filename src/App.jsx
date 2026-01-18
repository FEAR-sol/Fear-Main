import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader';
import PageLoader from './components/PageLoader';

function AppContent() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

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
      <div className="bg-radial-gray min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
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
    <Router>
      {isInitialLoading ? <Loader /> : <AppContent />}
    </Router>
  );
}

export default App;
