import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import SectionDivider from '@/components/base/SectionDivider';
import GalleryGrid from '@/pages/gallery/components/GalleryGrid';

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t('pages.gallery.eyebrow')}
        title={t('pages.gallery.title')}
        intro={t('pages.gallery.intro')}
      />

      <SectionDivider variant="dots" className="bg-background-50" />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <GalleryGrid />
        </div>
      </section>

      <SectionDivider variant="leaf" className="bg-background-50" />

      <section className="bg-background-100 py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center md:px-8">
          <Reveal className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary-500" />
              <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                {t('home.reserve.label')}
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
              {t('pages.gallery.ctaTitle')}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-700">
              {t('pages.gallery.ctaText')}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/rezervacije"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
              >
                <i className="ri-calendar-check-line text-base" />
                {t('home.reserve.cta')}
              </Link>
              <Link
                to="/jedilnik"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
              >
                {t('home.dishes.ctaMenu')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}