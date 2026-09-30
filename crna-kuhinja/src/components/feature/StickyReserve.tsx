import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function StickyReserve() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary-500/25 bg-background-100/95 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2 px-3 py-3">
        <a
          href={`tel:${t('contact.phoneHref')}`}
          aria-label={t('cta.call')}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-foreground-700/40 text-foreground-950 transition-colors duration-200 cursor-pointer"
        >
          <i className="ri-phone-line text-lg" />
        </a>
        <Link
          to="/rezervacije"
          className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-4 py-3 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
        >
          <i className="ri-calendar-check-line text-base" />
          {t('cta.reserve')}
        </Link>
      </div>
    </div>
  );
}