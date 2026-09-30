import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

const quickLinks = [
  { key: 'nav.story', to: '/zgodba' },
  { key: 'nav.menu', to: '/jedilnik' },
  { key: 'nav.wines', to: '/vina' },
  { key: 'nav.visit', to: '/obisk' },
  { key: 'nav.gift', to: '/darilni-boni' },
];

export default function HomeHero() {
  const { t } = useTranslation();
  const lead = t('home.hero.lead');

  return (
    <section className="relative w-full overflow-hidden bg-background-50 pb-16 pt-24 md:pb-20 md:pt-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(95% 75% at 14% 0%, oklch(var(--primary-900) / 0.24) 0%, transparent 56%), radial-gradient(85% 80% at 90% 18%, oklch(var(--accent-900) / 0.14) 0%, transparent 54%), radial-gradient(75% 65% at 50% 118%, oklch(var(--primary-950) / 0.4) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-background-50/40" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(var(--foreground-50) / 0.035) 0px, oklch(var(--foreground-50) / 0.035) 1px, transparent 1px, transparent 18px)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Flanking images — identical shape, size and framing so they read as a matched pair */}
        <div className="pointer-events-none absolute inset-x-0 top-8 z-0 flex items-start justify-between px-2 sm:px-3 md:top-12 md:px-8 lg:top-16 lg:px-10">
          <figure className="w-[92px] overflow-hidden rounded-lg bg-background-100 ring-1 ring-primary-500/25 sm:w-[136px] md:w-[168px] lg:w-[216px] xl:w-[256px]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_1c770497d37cfd3662e28e51dff9732d_abdadf74.jpg"
                alt="Zračni posnetek posestva Črna Kuhna z vinogradi in prleško pokrajino ob sončnem zahodu"
                title="Črna Kuhna iz zraka – vinogradi in prleška pokrajina ob sončnem zahodu"
                className="block h-full w-full object-cover"
              />
            </div>
          </figure>
          <figure className="w-[92px] overflow-hidden rounded-lg bg-background-100 ring-1 ring-primary-500/25 sm:w-[136px] md:w-[168px] lg:w-[216px] xl:w-[256px]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_14190057110f074892e0262c3bb2b49c_65ccf3d4.jpg"
                alt="Zunanjost restavracije Črna Kuhna s pergolo iz lesa in senčenim vrtom ob sončnem zahodu"
                title="Zunanjost Črne Kuhne – pergola in vrt ob sončnem zahodu"
                className="block h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>

        <Reveal className="relative z-10 flex w-full flex-col items-center text-center">
          <h1 className="flex w-full flex-col items-center">
            <span className="sr-only">{t('home.hero.title')}</span>
            <img
              src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3908b3bb29ee6048b30a3f1afa5e734f.png"
              alt="Črna Kuhna Restaurant"
              title="Črna Kuhna Restaurant"
              className="mt-[108px] h-auto w-[min(150px,44%)] sm:mt-[132px] sm:w-[min(230px,58%)] md:mt-6 md:w-[min(320px,72%)]"
            />
          </h1>
          <span className="mt-8 font-label text-[11px] uppercase tracking-[0.3em] text-primary-300">
            {t('home.hero.eyebrow')}
          </span>
          <p className="mt-5 font-heading text-xl italic text-accent-300 md:text-2xl">
            {t('home.hero.tagline')}
          </p>
          {lead ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-700/80 md:text-lg">
              {lead}
            </p>
          ) : null}

          <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/rezervacije"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer sm:w-auto md:text-base"
            >
              <i className="ri-calendar-check-line text-base" />
              {t('home.hero.ctaReserve')}
            </Link>
            <Link
              to="/jedilnik"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-700/40 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-foreground-950/10 cursor-pointer sm:w-auto md:text-base"
            >
              {t('home.hero.ctaMenu')}
            </Link>
          </div>

          <div className="mt-10 w-full">
            <p className="font-label text-[11px] uppercase tracking-[0.22em] text-primary-300">
              {t('home.hero.linksNote')}
              <span className="mx-2 text-primary-300/60">·</span>
              <a
                href={`tel:${t('contact.phoneHref')}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium tracking-[0.18em] text-primary-300 underline decoration-primary-300/40 underline-offset-4 transition-colors duration-200 hover:text-primary-200 hover:decoration-primary-200 cursor-pointer"
              >
                <i className="ri-phone-line text-sm" />
                {t('contact.phone')}
              </a>
            </p>
            <div className="mt-2 flex flex-col items-center" aria-hidden="true">
              <span className="block h-6 w-px bg-primary-300/60" />
              <i className="ri-arrow-down-line -mt-1 text-lg text-primary-300/80" />
            </div>
            <div className="mt-1 w-full rounded-lg border border-primary-400/30 bg-background-100/60 px-4 py-5 md:px-6 md:py-6">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 whitespace-nowrap border-b border-foreground-700/30 pb-0.5 font-label text-sm tracking-wide text-foreground-950 transition-colors duration-200 hover:border-accent-300 hover:text-accent-300 cursor-pointer"
                  >
                    {t(item.key)}
                    <i className="ri-arrow-right-up-line text-xs text-foreground-600/70 transition-colors duration-200 group-hover:text-accent-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-14">
          <div className="relative mx-auto w-full max-w-[72%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
            <img
              src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/345679c63bb00fe510ce2abcc52daa28.png"
              alt="Notranjost restavracije Črna Kuhna z lestencem iz zelenih steklenic in zeleno steno z rastlinami"
              title="Notranjost Črne Kuhne – ambient z lestencem iz steklenic"
              className="block h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}