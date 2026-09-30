import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PikadoSection() {
  const { ref, visible } = useScrollReveal({ threshold: 0.10 });

  return (
    <section id="pikado" className="relative w-full py-16 md:py-24 bg-background-100 section-divider-wavy">
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-6xl mx-auto reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/05a383d2787ffd66a22dcaa2d063875a.png"
                alt="Bar Pri Oračih – prostor za pikado s tarčo in družabno vzdušje"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-600 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
              Zabava za vsakogar
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-5 leading-tight">
              Igrajte <span className="text-primary-600">pikado</span> pri nas!
            </h2>
            <div className="space-y-4 text-foreground-700 text-sm md:text-base leading-relaxed">
              <p>
                Pri nas lahko ob kavi ali pivu sproščeno preizkusite svojo natančnost –
                na voljo imamo pikado, ki poskrbi za odlično zabavo in prijateljsko
                tekmovanje. Ne glede na to, ali ste začetnik ali izkušen igralec, je
                pikado vedno dobra izbira za popestritev večera.
              </p>
              <p>
                Zberite ekipo, naročite osvežilno pijačo in se pomerite – kdo bo
                nocojšnji prvak? Pikado je brezplačen za vse naše goste, le dobro
                voljo prinesite s seboj!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-7">
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-50">
                  <i className="ri-crosshair-line text-primary-600 text-lg"></i>
                </div>
                <span className="font-medium">Profesionalna tarča</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100">
                  <i className="ri-team-line text-secondary-600 text-lg"></i>
                </div>
                <span className="font-medium">Turnirji s prijatelji</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-100">
                  <i className="ri-emotion-laugh-line text-primary-600 text-lg"></i>
                </div>
                <span className="font-medium">Brezplačno za goste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}