import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-foreground-950/95 backdrop-blur-md border-t border-foreground-800/50 px-4 py-4 md:py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-foreground-300 text-xs md:text-sm leading-relaxed text-center sm:text-left">
          Ta spletna stran uporablja piškotke za zagotavljanje najboljše uporabniške izkušnje.
          Z nadaljnjo uporabo strani se strinjate z uporabo piškotov.
        </p>
        <button
          onClick={accept}
          className="px-5 py-2 bg-primary-500 text-white text-xs md:text-sm font-semibold rounded-md cursor-pointer hover:bg-primary-600 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Sprejemam
        </button>
      </div>
    </div>
  );
}