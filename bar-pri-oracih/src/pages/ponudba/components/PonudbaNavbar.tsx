import { Link } from 'react-router-dom';

export default function PonudbaNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-50/95 backdrop-blur-md border-b border-background-200/70 h-16 flex items-center px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground-900 hover:text-primary-600 transition-colors cursor-pointer">
          <i className="ri-arrow-left-line text-lg"></i>
          <span className="font-heading font-semibold text-sm hidden sm:inline">Nazaj na začetno stran</span>
          <span className="font-heading font-semibold text-sm sm:hidden">Nazaj</span>
        </Link>
        <div className="font-heading font-bold text-base md:text-lg text-foreground-950">
          Bar Pri Oračih
        </div>
        <div className="w-28 sm:w-36"></div>
      </div>
    </nav>
  );
}