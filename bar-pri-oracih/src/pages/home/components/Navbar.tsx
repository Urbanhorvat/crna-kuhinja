import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { label: 'Domov', href: '#hero' },
  { label: 'O nas', href: '#about' },
  { label: 'Pikado', href: '#pikado' },
  { label: 'Ponudba', href: '#menu' },
  { label: 'Delovni čas', href: '#hours' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries.reduce((best, entry) => {
          return entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best;
        });

        setActiveSection(`#${topEntry.target.id}`);
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2"
          >
            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
              scrolled ? 'border-background-200' : 'border-white/40'
            }`}>
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/da965ff96d9348d893cbf38d3df7cf93.png"
                alt="Bar Pri Oračih logotip"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-heading font-bold text-lg md:text-xl whitespace-nowrap transition-colors duration-300 hidden sm:inline ${
              scrolled ? 'text-foreground-950' : 'text-white'
            }`}>
              Bar Pri Oračih
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium whitespace-nowrap cursor-pointer transition-colors duration-300 px-3 py-1.5 rounded-md ${
                    scrolled
                      ? isActive
                        ? 'text-primary-600'
                        : 'text-foreground-600 hover:text-primary-500'
                      : isActive
                        ? 'text-primary-300'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full transition-colors duration-300 ${
                      scrolled ? 'bg-primary-500' : 'bg-primary-400'
                    }`}></span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="tel:041904191"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              <i className="ri-phone-line"></i>
              Pokliči nas
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-colors ${
              scrolled ? 'text-foreground-950' : 'text-white'
            }`}
            aria-label="Meni"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-50 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-md cursor-pointer transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-foreground-700 hover:text-primary-500 hover:bg-background-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="tel:041904191"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-md text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-primary-600 transition-colors mt-2"
            >
              <i className="ri-phone-line"></i>
              Pokliči nas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}