import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nazaj na vrh"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-primary-500 text-white cursor-pointer shadow-lg hover:bg-primary-600 hover:scale-110 transition-all duration-300 ${
        visible ? 'back-to-top-enter' : 'back-to-top-exit pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-line text-xl"></i>
    </button>
  );
}