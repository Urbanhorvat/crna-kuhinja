import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import { normalizeLanguage } from '@/i18n';
import SectionDivider from '@/components/base/SectionDivider';

export default function WinesPage() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);
  const glassLabel = { sl: 'V kozarcu', en: 'In the glass', de: 'Im Glas' }[lang];
  const searchLink =
    'https://www.google.com/search?q=Vinski+raj+Glavini%C4%8D+Prlekija';

  return (
    <>
      <PageHero eyebrow={t('pages.wines.eyebrow')} title={t('pages.wines.title')} intro={t('pages.wines.intro')} />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" />
              <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                {glassLabel}
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
              {t('pages.wines.houseTitle')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground-700">
              {t('pages.wines.houseText')}
            </p>
          </Reveal>
          <Reveal delay={130}>
            <div className="relative mx-auto w-full max-w-[58%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100 lg:max-w-[64%]">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9ff51f4af82153aec06d86116dd2952c.png"
                alt="Steklenica vina Traminec iz kleti Glavinič – hišno vino v restavraciji Črna Kuhna"
                title="Traminec Glavinič – vina Črne Kuhne"
                className="block h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="leaf" className="bg-background-50" />

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="h-full rounded-lg border border-background-300/70 bg-background-50 p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-accent-300">
                <i className="ri-goblet-line text-lg" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                {t('pages.wines.tastingTitle')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-700">
                {t('pages.wines.tastingText')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-lg border border-background-300/70 bg-background-50 p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                <i className="ri-external-link-line text-lg" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                {t('pages.wines.externalTitle')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-700">
                {t('pages.wines.externalText')}
              </p>
              <div className="mt-6">
                <a
                  href={searchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-5 py-2.5 font-label text-sm font-medium tracking-wide text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
                >
                  {t('pages.wines.externalCta')}
                  <i className="ri-arrow-right-line text-base" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}