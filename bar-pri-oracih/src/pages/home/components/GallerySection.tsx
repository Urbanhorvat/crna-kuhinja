import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c4b7412acecc226bb97e0c0f05e83198.png',
    alt: 'Zunanji pogled na Bar Pri Oračih z Audi RS6 – vhod in terasa',
    title: 'Zunanjost lokala',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/7fcd767c053e83555ea0d2b6451f440b.png',
    alt: 'Elegantni kotički Bara Pri Oračih z lesenim pohištvom in toplo osvetlitvijo',
    title: 'Notranji ambient',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/05a383d2787ffd66a22dcaa2d063875a.png',
    alt: 'Bar Pri Oračih – šank z napravami, pikado in lepo urejen prostor za druženje',
    title: 'Šank & pikado',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/21b37293a244b08aedba491444cdaa77.png',
    alt: 'Prijetna notranjost Bara Pri Oračih z modernim ambientom in televizijo',
    title: 'Dnevni prostor',
  },
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section id="gallery" className="relative w-full py-16 md:py-24 bg-background-100 section-divider-wavy">
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-6xl mx-auto reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Fotografije
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-4">
            Galerija
          </h2>
          <p className="text-foreground-600 text-sm md:text-base">
            Oglejte si utrinke iz našega lokala – od prijetne notranjosti do živahne terase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {galleryImages.map((img, index) => (
            <div
              key={img.src}
              onClick={() => openLightbox(index)}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-sm font-heading font-semibold">{img.title}</span>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-zoom-in-line text-foreground-800 text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors z-10"
            aria-label="Zapri"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors z-10"
            aria-label="Prejšnja slika"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors z-10"
            aria-label="Naslednja slika"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>

          <div className="w-full max-w-4xl mx-auto px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-md"
            />
            <p className="text-center text-white/70 text-sm mt-4">
              {galleryImages[currentIndex].title} — {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${
                  i === currentIndex ? 'bg-primary-400 w-5' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Slika ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}