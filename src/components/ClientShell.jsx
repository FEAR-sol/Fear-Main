'use client';

import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import MobileScrollFix from './MobileScrollFix';

export default function ClientShell({ children }) {
  return (
    <>
      <MobileScrollFix />
      <Loader />
      <div
        className="bg-radial-gray min-h-screen flex flex-col no-horizontal-scroll viewport-safe"
        style={{
          touchAction: 'auto',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'auto',
          minHeight: '100vh',
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
            height: 'auto',
          }}
        >
          {children}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
