import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/feature/LanguageSwitcher';

const navItems = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.story', to: '/zgodba' },
  { key: 'nav.menu', to: '/jedilnik' },
  { key: 'nav.wines', to: '/vina' },
  { key: 'nav.gallery', to: '/galerija' },
  { key: 'nav.visit', to: '/obisk' },
  { key: 'nav.gift', to: '/darilni-boni' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || open;

  const linkClass = (isActive: boolean) =>
    `relative whitespace-nowrap px-2.5 py-2 font-label text-sm tracking-wide transition-colors duration-200 xl:px-3 ${
      solid
        ? isActive
          ? 'text-accent-300'
          : 'text-foreground-700 hover:text-foreground-950'
        : isActive
          ? 'text-accent-300'
          : 'text-foreground-700/90 hover:text-foreground-950'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-background-300/60 bg-background-50/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="flex h-20 w-full items-center justify-between gap-3 px-4 md:px-8 lg:px-6 xl:px-10">
        <Link to="/" className="flex items-center cursor-pointer" aria-label={t('brand.name')}>
          <span
            className={`flex items-center justify-center rounded-md px-2.5 py-1.5 transition-colors duration-300 ${
              solid ? 'bg-background-100' : 'bg-transparent'
            }`}
          >
            <img
              src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3908b3bb29ee6048b30a3f1afa5e734f.png"
              alt="Črna Kuhna Restaurant"
              title="Črna Kuhna Restaurant"
              className="h-9 w-auto md:h-10"
            />
          </span>
        </Link>

        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => linkClass(isActive)}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher tone={solid ? 'light' : 'dark'} />
          <Link
            to="/rezervacije"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-4 py-2.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
          >
            <i className="ri-calendar-check-line text-base" />
            {t('cta.reserve')}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher tone={solid ? 'light' : 'dark'} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-200 cursor-pointer ${
              solid ? 'border-foreground-900/15 text-foreground-950' : 'border-foreground-700/40 text-foreground-950'
            }`}
          >
            <i className={open ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-background-300/60 bg-background-50 lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-md px-2 py-3 font-label text-sm transition-colors duration-200 ${
                    isActive ? 'text-accent-300' : 'text-foreground-700 hover:text-foreground-950'
                  }`
                }
              >
                {t(item.key)}
                <i className="ri-arrow-right-s-line text-base text-foreground-400" />
              </NavLink>
            ))}
            <Link
              to="/rezervacije"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-4 py-3 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
            >
              <i className="ri-calendar-check-line text-base" />
              {t('cta.reserve')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}