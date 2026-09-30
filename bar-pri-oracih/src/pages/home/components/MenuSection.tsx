import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MenuSection() {
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="menu" className="relative w-full py-20 md:py-28 overflow-hidden">
      <img
        src="https://public.readdy.ai/ai/img_res/edited_48c51bf88d38d2e1dafc8b4dcdf0855f_554f62de.jpg"
        alt="Bar Pri Oračih – ponudba pijač"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/75"></div>

      <div
        ref={ref}
        className={`relative z-10 w-full px-4 md:px-6 max-w-4xl mx-auto text-center reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <span className="inline-block text-primary-300 font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-4">
          Naša ponudba
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
          Kava, pijače &amp; koktajli
        </h2>
        <p className="text-white/75 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Od prve jutranje kave do osvežilnega koktajla zvečer – pri nas najdete pijačo za vsak trenutek in vsakega gosta.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {[
            { icon: 'ri-cup-line', label: 'Topli napitki' },
            { icon: 'ri-goblet-line', label: 'Piva' },
            { icon: 'ri-flask-line', label: 'Koktajli' },
            { icon: 'ri-snowy-line', label: 'Slushiji' },
            { icon: 'ri-temp-hot-line', label: 'Brezalkoholne' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm hover:bg-primary-500/30 hover:border-primary-400/50 transition-all duration-300 hover:scale-110 cursor-default">
                <i className={`${item.icon} text-2xl text-primary-300`}></i>
              </div>
              <span className="text-white/70 text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <Link
          to="/ponudba"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-heading font-bold text-base rounded-md cursor-pointer hover:bg-primary-600 transition-all duration-300 whitespace-nowrap group hover:shadow-lg hover:shadow-primary-500/25"
        >
          <i className="ri-menu-2-line text-xl"></i>
          Oglej si celotno ponudbo
          <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-200"></i>
        </Link>
      </div>
    </section>
  );
}