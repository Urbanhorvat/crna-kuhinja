import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsBanner from './components/StatsBanner';
import PikadoSection from './components/PikadoSection';
import TestimonialsSection from './components/TestimonialsSection';
import MenuSection from './components/MenuSection';
import HoursSection from './components/HoursSection';
import GallerySection from './components/GallerySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';

const siteUrl = import.meta.env.VITE_SITE_URL;

const barOrPubLD = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'Bar Pri Oračih',
  image: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c4b7412acecc226bb97e0c0f05e83198.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Markovci 33',
    addressLocality: 'Markovci',
    postalCode: '2281',
    addressCountry: 'SI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.3958,
    longitude: 15.9308,
  },
  url: siteUrl,
  telephone: '+38641904191',
  email: 'info@bar-pri-oracih.si',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '06:30', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '06:30', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '07:00', closes: '21:00' },
  ],
  priceRange: '\u20AC',
  servesCuisine: ['Kava', 'Pivo', 'Vino', 'Koktajli', 'Brezalkoholne pijače'],
  sameAs: [
    'https://www.facebook.com/PriOracih/',
    'https://www.instagram.com/barprioracih/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '86',
  },
};

const faqLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ali imate parkirišče?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, pred lokalom je na voljo brezplačno parkirišče za vse naše goste. Parkirnih mest je dovolj tudi v času večjega obiska, dodatna parkirna mesta pa so na voljo tudi v neposredni bližini.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ali prenašate športne dogodke na TV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seveda! V lokalu imamo velik TV zaslon, na katerem predvajamo vse pomembnejše športne dogodke – nogomet, košarko, hokej in druge športe. Med prenosi je vzdušje vedno odlično.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ali ste odprti ob praznikih?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ob večini praznikov smo odprti po običajnem nedeljskem urniku (07:00 – 21:00). Za veliko noč, božič in novo leto se delovni čas lahko razlikuje – spremljajte naše objave na družbenih omrežjih.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(barOrPubLD)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqLD)}
      </script>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsBanner />
      <PikadoSection />
      <TestimonialsSection />
      <MenuSection />
      <HoursSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <CookieConsent />
    </main>
  );
}