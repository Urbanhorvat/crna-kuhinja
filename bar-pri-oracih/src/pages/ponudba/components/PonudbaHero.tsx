export default function PonudbaHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
      <img
        src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/21b37293a244b08aedba491444cdaa77.png"
        alt="Bar Pri Oračih – prijetna notranjost"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60"></div>
      <div className="relative z-10 text-center px-4">
        <span className="inline-block text-primary-300 font-heading font-semibold text-xs tracking-widest uppercase mb-3">
          Bar Pri Oračih
        </span>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
          Naša Ponudba
        </h1>
        <p className="text-white/75 text-sm md:text-base max-w-lg mx-auto">
          Od jutranje kave do večernega koktajla – vse kar potrebujete za popoln dan.
        </p>
      </div>
    </section>
  );
}