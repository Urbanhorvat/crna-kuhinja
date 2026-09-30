import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'Matej Horvat',
    date: 'pred 3 tedni',
    rating: 5,
    text: 'Najboljši lokal v Markovcih! Kava je vedno sveža in odlična, osebje pa izjemno prijazno. Vsako jutro se ustavim na poti v službo. Parkirišče je vedno na voljo, ambient pa res topel in domač.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20man%20in%20his%20late%2030s%2C%20friendly%20smile%2C%20casual%20button%20shirt%2C%20warm%20natural%20lighting%2C%20clean%20simple%20studio%20background%20in%20cream%20tone%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field&width=120&height=120&seq=avatar-1&orientation=squarish',
  },
  {
    id: 2,
    name: 'Ana Krajnc',
    date: 'pred 1 tednom',
    rating: 5,
    text: 'Pri Oračih je res super vzdušje! Ob petkih se dobimo s prijatelji na pikadu in koktajlih. Cene so zelo ugodne, ponudba pijač pa res pestra. Posebej priporočam njihove osvežilne slushije poleti – zmaga!',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20woman%20in%20her%20early%2030s%2C%20warm%20genuine%20smile%2C%20casual%20elegant%20blouse%2C%20soft%20natural%20lighting%2C%20clean%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field&width=120&height=120&seq=avatar-2&orientation=squarish',
  },
  {
    id: 3,
    name: 'Tomaž Novak',
    date: 'pred 2 mesecema',
    rating: 5,
    text: 'Pri Oračih smo organizirali rojstnodnevno zabavo in bilo je fantastično! Lastnik je zelo ustrežljiv, vse smo se dogovorili brez težav. Prostor je odličen za manjša praznovanja, vsi gostje so bili navdušeni nad ambientom.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20man%20in%20his%20mid%2040s%2C%20confident%20friendly%20expression%2C%20casual%20dark%20shirt%2C%20warm%20studio%20lighting%2C%20clean%20cream%20background%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field&width=120&height=120&seq=avatar-3&orientation=squarish',
  },
  {
    id: 4,
    name: 'Nina Zupančič',
    date: 'pred 3 tedni',
    rating: 4,
    text: 'Zelo prijeten lokal s super lokacijo v središču Markovcev. Cappuccino je vrhunski, ambient pa res domač. Edino ob vikendih je včasih kar polno, ampak to pove vse o kvaliteti! Vsekakor se vrnem.',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20woman%20in%20her%20late%2020s%2C%20bright%20natural%20smile%2C%20casual%20light%20sweater%2C%20warm%20studio%20lighting%2C%20clean%20cream%20background%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field&width=120&height=120&seq=avatar-4&orientation=squarish',
  },
  {
    id: 5,
    name: 'Robert Dolenc',
    date: 'pred 1 mesecem',
    rating: 5,
    text: 'Že 10 let hodim k Oračih in nikoli nisem bil razočaran. Od jutranje kave do večernega piva – vedno odlično. Lastniki so res super ljudje, začuti se tista prava lokalna toplina. Priporočam vsem!',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20man%20in%20his%20early%2050s%2C%20kind%20smile%2C%20casual%20plaid%20shirt%2C%20warm%20natural%20lighting%2C%20clean%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field&width=120&height=120&seq=avatar-5&orientation=squarish',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`text-sm ${star <= rating ? 'ri-star-fill text-secondary-500' : 'ri-star-fill text-background-300'}`}
        ></i>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  return (
    <section id="testimonials" className="relative w-full py-16 md:py-24 bg-background-50 bg-texture-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-transparent to-background-50 pointer-events-none"></div>
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-5xl mx-auto relative z-10 reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Kaj pravijo gostje
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-4">
            Mnenja naših gostov
          </h2>
          <p className="text-foreground-600 text-sm md:text-base">
            Vaše zadovoljstvo je naša največja nagrada. Preberite, kaj o nas pravijo stalni gostje.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-secondary-500 font-heading font-bold text-lg">4.7</span>
            <StarRating rating={5} />
            <span className="text-foreground-500 text-xs">— Google ocena</span>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-background-100 rounded-lg border border-background-200/70 p-5 hover:border-background-300/60 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-sm text-foreground-900 truncate">{t.name}</p>
                  <p className="text-foreground-400 text-xs">{t.date}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <StarRating rating={t.rating} />
                </div>
              </div>
              <p className="text-foreground-600 text-sm leading-relaxed line-clamp-4">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-center mt-6">
          <a
            href="https://www.google.com/maps/place/Bar+Pri+Oračih"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors cursor-pointer"
          >
            <i className="ri-google-fill text-lg"></i>
            Preberite vse ocene na Google
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="md:hidden">
          <div className="bg-background-100 rounded-lg border border-background-200/70 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-semibold text-sm text-foreground-900">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-foreground-400 text-xs">{testimonials[activeIndex].date}</p>
              </div>
              <div className="ml-auto flex-shrink-0">
                <StarRating rating={testimonials[activeIndex].rating} />
              </div>
            </div>
            <p className="text-foreground-600 text-sm leading-relaxed">{testimonials[activeIndex].text}</p>

            <div className="flex items-center justify-between mt-5">
              <button
                onClick={goPrev}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200/70 hover:bg-background-300 text-foreground-700 cursor-pointer transition-colors"
                aria-label="Prejšnje mnenje"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${
                      i === activeIndex ? 'bg-primary-500 w-5' : 'bg-background-300'
                    }`}
                    aria-label={`Mnenje ${i + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={goNext}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200/70 hover:bg-background-300 text-foreground-700 cursor-pointer transition-colors"
                aria-label="Naslednje mnenje"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <a
              href="https://www.google.com/maps/place/Bar+Pri+Oračih"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors cursor-pointer"
            >
              <i className="ri-google-fill"></i>
              Vse ocene na Google
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}