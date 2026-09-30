import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setOffsetY(window.scrollY * 0.35);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative w-full h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c4b7412acecc226bb97e0c0f05e83198.png"
        alt="Zunanji pogled na Bar Pri Oračih z Audi RS6 pred vhodom"
        className="absolute inset-0 w-full h-[115%] object-cover object-center"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55"></div>

      <div className="relative z-10 w-full px-4 md:px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs md:text-sm font-medium mb-6 backdrop-blur-sm">
          <i className="ri-star-fill text-primary-400 text-sm"></i>
          <span>4.7 / 5 – Ocenjeno s strani naših gostov</span>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
          Dobrodošli v{' '}
          <span className="text-primary-400">Bar Pri Oračih</span>
        </h1>

        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Stičišče odlične kave, osvežilnih pijač in prijetnega lokalnega družabnega življenja
          v srcu Markovcev – kjer se tradicija sreča s toplim ambientom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Bar+Pri+Oračih+Markovci+33+2281+Markovci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-500 text-white font-heading font-semibold text-sm rounded-md cursor-pointer hover:bg-primary-600 transition-all duration-300 whitespace-nowrap w-full sm:w-auto justify-center cta-glow"
          >
            <i className="ri-map-pin-line text-lg"></i>
            Navodila za pot
          </a>
          <a
            href="#hours"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hours')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 text-white font-heading font-semibold text-sm rounded-md border border-white/30 cursor-pointer hover:bg-white/25 transition-all duration-300 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <i className="ri-time-line text-lg"></i>
            Delovni čas
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium">Spoznajte nas</span>
            <i className="ri-arrow-down-line text-lg animate-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
}