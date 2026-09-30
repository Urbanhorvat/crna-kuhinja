import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Ali imate parkirišče?',
    answer: 'Da, pred lokalom je na voljo brezplačno parkirišče za vse naše goste. Parkirnih mest je dovolj tudi v času večjega obiska, dodatna parkirna mesta pa so na voljo tudi v neposredni bližini.',
  },
  {
    question: 'Ali prenašate športne dogodke na TV?',
    answer: 'Seveda! V lokalu imamo velik TV zaslon, na katerem predvajamo vse pomembnejše športne dogodke – nogomet, košarko, hokej in druge športe. Med prenosi je vzdušje vedno odlično, zato priporočamo, da pridete malo prej in si zagotovite najboljši sedež.',
  },
  {
    question: 'Ali ste odprti ob praznikih?',
    answer: 'Ob večini praznikov smo odprti po običajnem nedeljskem urniku (07:00 – 21:00). Za veliko noč, božič in novo leto se delovni čas lahko razlikuje – spremljajte naše objave na Facebooku in Instagramu za aktualne informacije. Med fašenkom imamo podaljšan delovni čas!',
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-background-200/70 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-semibold text-sm md:text-base transition-colors duration-200 ${
          isOpen ? 'text-primary-600' : 'text-foreground-800 group-hover:text-foreground-950'
        }`}>
          {item.question}
        </span>
        <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-background-200/70 text-foreground-500 group-hover:bg-background-300'
        }`}>
          <i className="ri-arrow-down-s-line text-lg"></i>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-foreground-600 text-sm leading-relaxed pr-10">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="relative w-full py-16 md:py-24 bg-background-100 section-divider-wavy">
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-4xl mx-auto reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Imate vprašanje?
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-4">
            Pogosta vprašanja
          </h2>
          <p className="text-foreground-600 text-sm md:text-base">
            Odgovori na najpogostejša vprašanja naših gostov. Če ne najdete odgovora, nas kontaktirajte.
          </p>
        </div>

        <div className="bg-background-50 rounded-lg border border-background-200/70 px-5 md:px-8">
          {faqItems.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}