import HomeHero from '@/pages/home/components/HomeHero';
import FireSection from '@/pages/home/components/FireSection';
import GrillSection from '@/pages/home/components/GrillSection';
import SeasonalSection from '@/pages/home/components/SeasonalSection';
import DishesSection from '@/pages/home/components/DishesSection';
import WinesSection from '@/pages/home/components/WinesSection';
import SpaceSection from '@/pages/home/components/SpaceSection';
import LocationSection from '@/pages/home/components/LocationSection';
import GalleryPreviewSection from '@/pages/home/components/GalleryPreviewSection';
import ReserveSection from '@/pages/home/components/ReserveSection';
import SectionDivider from '@/components/base/SectionDivider';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FireSection />
      <SectionDivider variant="flame" className="bg-background-50" />
      <GrillSection />
      <SectionDivider variant="diamond" className="bg-background-100" />
      <SeasonalSection />
      <SectionDivider variant="leaf" className="bg-background-100" />
      <DishesSection />
      <SectionDivider variant="dots" className="bg-background-50" />
      <WinesSection />
      <SectionDivider variant="ring" className="bg-accent-950" />
      <SpaceSection />
      <SectionDivider variant="double" className="bg-background-100" />
      <LocationSection />
      <SectionDivider variant="ember" className="bg-background-50" />
      <GalleryPreviewSection />
      <SectionDivider variant="dots" className="bg-background-100" />
      <ReserveSection />
    </>
  );
}