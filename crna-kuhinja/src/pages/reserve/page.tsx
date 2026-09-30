import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import ReservationForm from '@/pages/reserve/components/ReservationForm';
import SectionDivider from '@/components/base/SectionDivider';

export default function ReservePage() {
  const { t } = useTranslation();

  const rawInfo = t('pages.reserve.infoItems', { returnObjects: true });
  const infoItems = Array.isArray(rawInfo) ? (rawInfo as string[]) : [];

  const mapsLink =
    'https://www.google.com/maps/search/?api=1&query=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija';

  return (
    <>
      <PageHero
        eyebrow={t('pages.reserve.eyebrow')}
        title={t('pages.reserve.title')}
      />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
          <Reveal>
            <div className="rounded-lg border border-background-300/70 bg-background-100 p-6 md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className="ri-calendar-check-line text-base" />
                </span>
                <h2 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                  {t('pages.reserve.formTitle')}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground-700">
                {t('pages.reserve.formIntro')}
              </p>

              <div id="booking-embed" className="mt-6">
                <ReservationForm />
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal>
              <a
                href={`tel:${t('contact.phoneHref')}`}
                className="flex h-full flex-col rounded-lg border border-background-300/70 bg-background-100 p-6 transition-colors duration-200 hover:border-primary-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className="ri-phone-line text-base" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-950">
                  {t('pages.reserve.phoneTitle')}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                  {t('pages.reserve.phoneText')}
                </p>
                <span className="mt-4 font-heading text-base text-accent-300">{t('contact.phone')}</span>
              </a>
            </Reveal>
            <Reveal delay={110}>
              <a
                href={`mailto:${t('contact.email')}`}
                className="flex h-full flex-col rounded-lg border border-background-300/70 bg-background-100 p-6 transition-colors duration-200 hover:border-primary-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className="ri-mail-line text-base" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-950">
                  {t('pages.reserve.emailTitle')}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                  {t('pages.reserve.emailText')}
                </p>
                <span className="mt-4 break-all font-heading text-base text-accent-300">
                  {t('contact.email')}
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" className="bg-background-50" />

      <section className="bg-background-100 pb-14 pt-14 md:pb-20 md:pt-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <Reveal>
            <div className="mx-auto h-[180px] w-full max-w-5xl overflow-hidden rounded-lg bg-background-100 md:h-[320px]">
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%20of%20dry%20firewood%20burning%20in%20a%20rustic%20stone%20hearth%2C%20bright%20orange%20flames%20and%20glowing%20embers%2C%20warm%20golden%20light%20dancing%20across%20a%20dark%20smoky%20background%2C%20moody%20editorial%20photography%2C%20high%20detail%2C%20cinematic%20contrast%2C%20deep%20shadows%20and%20rich%20amber%20tones&width=1600&height=900&seq=reserve-fire-wood-2026&orientation=landscape"
                alt="Goreča drva v ognju v Črni Kuhni – toplina ognja ob rezervaciji mize"
                title="Goreča drva ob ognju v Črni Kuhni – rezervirajte mizo"
                className="h-full w-full object-contain"
              />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-6xl grid-cols-1 gap-10 px-4 md:mt-20 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              {t('pages.reserve.infoTitle')}
            </h2>
            <ul className="mt-6 space-y-4">
              {infoItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <i className="ri-check-line text-sm" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-background-300/70 bg-background-50 p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                {t('pages.reserve.groupText')}
              </h3>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${t('contact.phoneHref')}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-3 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
                >
                  <i className="ri-phone-line text-base" />
                  {t('contact.phone')}
                </a>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-5 py-3 font-label text-sm font-medium text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
                >
                  <i className="ri-map-pin-line text-base" />
                  {t('cta.directions')}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}