import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, visible } = useScrollReveal({ threshold: 0.10 });

  return (
    <section id="about" className="relative w-full py-16 md:py-24 bg-background-50 bg-texture-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-transparent to-background-50 pointer-events-none"></div>
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-6xl mx-auto relative z-10 reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/7fcd767c053e83555ea0d2b6451f440b.png"
                alt="Elegantni kotički Bara Pri Oračih z lesenim pohištvom in toplo osvetlitvijo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
              Naša zgodba
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-5 leading-tight">
              Več kot le bar –{' '}
              <span className="text-primary-600">srce Markovcev</span>
            </h2>
            <div className="space-y-4 text-foreground-700 text-sm md:text-base leading-relaxed">
              <p>
                Bar Pri Oračih je več kot le kraj za kavo ali pijačo – je stičišče lokalnega
                utripa, kjer se prepletata bogata tradicija Markovcev in prijeten, sodoben
                ambient. Naš lokal nosi ime po legendarnih oračih, ki so skozi stoletja
                oblikovali značaj tega kraja.
              </p>
              <p>
                Pri nas vas vedno pričaka prijazna beseda, vrhunska kava za dober začetek
                dneva ter širok izbor piv, vin in brezalkoholnih pijač za sproščene trenutke
                s prijatelji. Posebno vzdušje pa zavlada med fašenkom, ko bar postane
                zbirališče pustnih veseljakov iz vse okolice.
              </p>
              <p>
                Ne glede na to, ali se oglasite na hitri jutranji kavi, popoldanskem klepetu
                ali večernem druženju – pri nas ste vedno dobrodošli.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-7">
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-100">
                  <i className="ri-user-heart-line text-primary-600 text-lg"></i>
                </div>
                <span className="font-medium">Prijazna postrežba</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-50">
                  <i className="ri-building-4-line text-primary-600 text-lg"></i>
                </div>
                <span className="font-medium">Lokalna tradicija</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-600 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100">
                  <i className="ri-emotion-happy-line text-secondary-600 text-lg"></i>
                </div>
                <span className="font-medium">Odlično vzdušje</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}