import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import SectionDivider from '@/components/base/SectionDivider';

type HourRow = { day: string; time: string };

type InfoCard =
  | { kind: 'info'; icon: string; title: string; lines: string[]; href?: string }
  | { kind: 'hours'; icon: string; title: string; rows: HourRow[]; note: string };

export default function VisitPage() {
  const { t } = useTranslation();

  const directionsLink =
    'https://www.google.com/maps/search/?api=1&query=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija';
  const mapEmbed =
    'https://www.google.com/maps?q=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija&output=embed';

  const rawHours = t('home.hours.rows', { returnObjects: true });
  const hourRows: HourRow[] = Array.isArray(rawHours)
    ? (rawHours as HourRow[])
    : [];

  const cards: InfoCard[] = [
    {
      kind: 'info',
      icon: 'ri-map-pin-line',
      title: t('pages.visit.addressTitle'),
      lines: [t('contact.addressLine1'), t('contact.addressLine2')],
    },
    {
      kind: 'info',
      icon: 'ri-phone-line',
      title: t('pages.visit.phoneTitle'),
      lines: [t('contact.phone')],
      href: `tel:${t('contact.phoneHref')}`,
    },
    {
      kind: 'info',
      icon: 'ri-mail-line',
      title: t('pages.visit.emailTitle'),
      lines: [t('contact.email')],
      href: `mailto:${t('contact.email')}`,
    },
    {
      kind: 'hours',
      icon: 'ri-time-line',
      title: t('pages.visit.hoursTitle'),
      rows: hourRows,
      note: t('home.hours.note'),
    },
  ];

  return (
    <>
      <PageHero eyebrow={t('pages.visit.eyebrow')} title={t('pages.visit.title')} intro={t('pages.visit.intro')} />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 90}>
                <div className="h-full rounded-lg border border-background-300/70 bg-background-100 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                    <i className={`${card.icon} text-base`} />
                  </span>
                  <h2 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {card.title}
                  </h2>

                  {card.kind === 'info' ? (
                    <div className="mt-2 space-y-1">
                      {card.lines.map((line) =>
                        card.href ? (
                          <a
                            key={line}
                            href={card.href}
                            className="block break-all text-sm text-foreground-700 transition-colors duration-200 hover:text-accent-300"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm leading-relaxed text-foreground-700">
                            {line}
                          </p>
                        ),
                      )}
                    </div>
                  ) : (
                    <div className="mt-2">
                      <dl className="divide-y divide-background-300/60">
                        {card.rows.map((row) => (
                          <div key={row.day} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 py-2">
                            <dt className="font-label text-xs text-foreground-600">{row.day}</dt>
                            <dd className="font-label text-sm font-medium text-foreground-950">{row.time}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-3 text-xs leading-relaxed text-foreground-500">{card.note}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="diamond" className="bg-background-50" />

      <section className="bg-background-100 py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-background-300/70">
              <iframe
                title={t('pages.visit.mapTitle')}
                src={mapEmbed}
                className="h-[320px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              {t('pages.visit.mapTitle')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-700">{t('pages.visit.intro')}</p>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-3 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
            >
              <i className="ri-navigation-line text-base" />
              {t('pages.visit.directionsCta')}
            </a>

            <div className="mt-8 rounded-lg border border-background-300/70 bg-background-50 p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground-950">
                {t('pages.visit.socialTitle')}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                {t('pages.visit.socialText')}
              </p>
            </div>

            <div className="mt-5 rounded-lg border border-background-300/70 bg-background-50 p-6">
              <p className="text-sm leading-relaxed text-foreground-700">{t('pages.visit.groupText')}</p>
              <a
                href={`tel:${t('contact.phoneHref')}`}
                className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-5 py-2.5 font-label text-sm font-medium text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
              >
                <i className="ri-phone-line text-base" />
                {t('contact.phone')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}