import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReservationsAccess from '@/components/feature/ReservationsAccess';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const rawHours = t('home.hours.rows', { returnObjects: true });
  const hourRows = Array.isArray(rawHours) ? (rawHours as { day: string; time: string }[]) : [];

  const directionsLink =
    'https://www.google.com/maps/search/?api=1&query=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija';
  const mapEmbed =
    'https://www.google.com/maps?q=Vinski%20Vrh%206%2C%202275%20Miklav%C5%BE%20pri%20Ormo%C5%BEu%2C%20Slovenija&output=embed';

  const links = [
    { key: 'nav.story', to: '/zgodba' },
    { key: 'nav.menu', to: '/jedilnik' },
    { key: 'nav.wines', to: '/vina' },
    { key: 'nav.gallery', to: '/galerija' },
    { key: 'nav.visit', to: '/obisk' },
    { key: 'nav.gift', to: '/darilni-boni' },
  ];

  return (
    <footer className="bg-secondary-950 text-foreground-800">
      <div className="w-full px-4 py-14 md:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="sm:max-w-[16rem]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-400/40 text-accent-300">
                    <i className="ri-fire-line text-base" />
                  </span>
                  <span className="font-heading text-lg font-semibold tracking-wide text-foreground-950">
                    {t('brand.name')}
                  </span>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-700/80">
                  {t('footer.tagline')}
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-lg border border-foreground-800/15 sm:flex-1">
                <iframe
                  title={t('pages.visit.mapTitle')}
                  src={mapEmbed}
                  className="h-40 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent-300 transition-colors duration-200 hover:text-accent-200 cursor-pointer"
            >
              <i className="ri-map-pin-line text-sm" />
              {t('home.location.ctaDirections')}
            </a>
          </div>

          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.22em] text-accent-300">
              {t('footer.linksTitle')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-foreground-700/80 transition-colors duration-200 hover:text-foreground-950"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.22em] text-accent-300">
              {t('footer.contactTitle')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${t('contact.phoneHref')}`}
                  className="flex items-start gap-2.5 text-sm text-foreground-700/80 transition-colors duration-200 hover:text-foreground-950"
                >
                  <i className="ri-phone-line mt-0.5 text-base text-accent-300" />
                  <span>{t('contact.phone')}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="flex items-start gap-2.5 text-sm text-foreground-700/80 transition-colors duration-200 hover:text-foreground-950"
                >
                  <i className="ri-mail-line mt-0.5 text-base text-accent-300" />
                  <span className="break-all">{t('contact.email')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.22em] text-accent-300">
              {t('footer.visitTitle')}
            </h4>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-foreground-700/80">
              <p>{t('contact.addressLine1')}</p>
              <p className="flex flex-wrap items-center">
                <span>{t('contact.addressLine2')}</span>
                <ReservationsAccess />
              </p>
            </address>
            <div className="mt-5">
              <p className="font-label text-[11px] uppercase tracking-[0.22em] text-accent-300">
                {t('home.hours.label')}
              </p>
              <dl className="mt-3 space-y-1.5">
                {hourRows.map((row) => (
                  <div key={row.day} className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <dt className="text-xs text-foreground-700/80">{row.day}</dt>
                    <dd className="text-xs font-medium text-foreground-900">{row.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-foreground-500/70">{t('home.hours.note')}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-foreground-800/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-500/70">
            © {year} {t('brand.name')}. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to="/zasebnost"
              className="text-xs text-foreground-500/70 transition-colors duration-200 hover:text-foreground-950"
            >
              {t('pages.privacy.title')}
            </Link>
            <Link
              to="/pogoji"
              className="text-xs text-foreground-500/70 transition-colors duration-200 hover:text-foreground-950"
            >
              {t('pages.terms.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}