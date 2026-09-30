import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function LocationSection() {
  const { t } = useTranslation();
  const mapsLink =
    'https://www.google.com/maps/search/?api=1&query=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija';

  const rawHours = t('home.hours.rows', { returnObjects: true });
  const hourRows = Array.isArray(rawHours) ? (rawHours as { day: string; time: string }[]) : [];

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <Reveal delay={120}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.location.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.location.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700">
            {t('home.location.text')}
          </p>
          <address className="mt-6 not-italic text-foreground-900">
            <p className="font-medium">{t('contact.addressLine1')}</p>
            <p className="text-sm text-foreground-600">{t('contact.addressLine2')}</p>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
            >
              <i className="ri-map-pin-line text-base" />
              {t('home.location.ctaDirections')}
            </a>
            <Link
              to="/obisk"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-6 py-3 font-label text-sm font-medium tracking-wide text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
            >
              {t('nav.visit')}
            </Link>
          </div>

          <div className="mt-8 rounded-lg border border-background-300/70 bg-background-100 p-5 md:p-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                <i className="ri-time-line text-base" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground-950 md:text-lg">
                {t('home.hours.title')}
              </h3>
            </div>
            <dl className="mt-4 divide-y divide-background-300/60">
              {hourRows.map((row) => (
                <div key={row.day} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="font-label text-sm text-foreground-700">{row.day}</dt>
                  <dd className="font-label text-sm font-medium text-foreground-950">{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-foreground-500">{t('home.hours.note')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}