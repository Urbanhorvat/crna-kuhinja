import { Link } from 'react-router-dom';

export default function PonudbaFooterBar() {
  return (
    <footer className="w-full bg-primary-950 py-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-heading font-bold text-white text-base">Bar Pri Oračih</p>
          <p className="text-foreground-400 text-xs mt-0.5">Markovci 33, 2281 Markovci</p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary-500 text-white font-heading font-semibold text-sm cursor-pointer hover:bg-primary-600 transition-colors whitespace-nowrap"
        >
          <i className="ri-home-line"></i>
          Začetna stran
        </Link>
      </div>
    </footer>
  );
}