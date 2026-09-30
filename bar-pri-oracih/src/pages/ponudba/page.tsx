import { useState } from 'react';
import { Link } from 'react-router-dom';
import PonudbaNavbar from './components/PonudbaNavbar';
import PonudbaHero from './components/PonudbaHero';
import PonudbaMenu from './components/PonudbaMenu';
import PonudbaFooterBar from './components/PonudbaFooterBar';

const siteUrl = import.meta.env.VITE_SITE_URL;

const menuLD = {
  '@context': 'https://schema.org',
  '@type': 'MenuPage',
  url: `${siteUrl}/ponudba`,
  name: 'Ponudba – Bar Pri Oračih',
  description: 'Celotna ponudba toplih napitkov, piv, koktajlov, vin, kuhančkov, whiskeyjev, žganih pijač, likerjev, brezalkoholnih pijač, vod in slushijev v Baru Pri Oračih.',
  hasMenu: {
    '@type': 'Menu',
    name: 'Ponudba pijač',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Topli napitki',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Espresso / dolga kava', offers: { '@type': 'Offer', price: '1.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Macchiato', offers: { '@type': 'Offer', price: '1.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Bela kava', offers: { '@type': 'Offer', price: '2.20', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Cappuccino', offers: { '@type': 'Offer', price: '1.80', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Latte macchiato', offers: { '@type': 'Offer', price: '2.20', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Ledena kava', offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Vroča čokolada', offers: { '@type': 'Offer', price: '2.40', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Čaj', offers: { '@type': 'Offer', price: '1.70', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Piva',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Zlatorog 0,5 l', offers: { '@type': 'Offer', price: '2.60', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Union 0,5 l', offers: { '@type': 'Offer', price: '2.60', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Heineken točeno 0,5 l', offers: { '@type': 'Offer', price: '3.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Kozel temni 0,5 l', offers: { '@type': 'Offer', price: '2.70', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Radler 0,5 l', offers: { '@type': 'Offer', price: '2.70', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Koktajli',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Mojito', offers: { '@type': 'Offer', price: '4.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Cuba Libre', offers: { '@type': 'Offer', price: '4.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Pina Colada', offers: { '@type': 'Offer', price: '5.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Blue Lagoon', offers: { '@type': 'Offer', price: '5.50', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Vina',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Domače belo vino 0,1 l', offers: { '@type': 'Offer', price: '1.10', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Refošk 0,1 l', offers: { '@type': 'Offer', price: '1.20', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Cviček 0,1 l', offers: { '@type': 'Offer', price: '1.20', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Rumeni muškat 0,1 l', offers: { '@type': 'Offer', price: '2.90', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Whiskey',
        hasMenuItem: [
          { '@type': 'MenuItem', name: "Ballantine's 0,03 l", offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Jameson 0,03 l', offers: { '@type': 'Offer', price: '2.70', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Chivas Regal 0,03 l', offers: { '@type': 'Offer', price: '3.50', priceCurrency: 'EUR' } },
        ],
      },
    ],
  },
};

export default function Ponudba() {
  return (
    <main className="relative min-h-screen bg-background-50">
      <script type="application/ld+json">
        {JSON.stringify(menuLD)}
      </script>
      <PonudbaNavbar />
      <PonudbaHero />
      <PonudbaMenu />
      <PonudbaFooterBar />
    </main>
  );
}