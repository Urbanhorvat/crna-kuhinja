import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center bg-background-50 px-4 pb-20 pt-32 text-center">
      <span className="font-heading text-7xl font-semibold text-accent-500 md:text-9xl">404</span>
      <h1 className="mt-6 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
        {t('footer.notFoundTitle')}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-600">
        {t('footer.notFoundText')}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
      >
        <i className="ri-arrow-left-line text-base" />
        {t('cta.back')}
      </Link>
    </section>
  );
}