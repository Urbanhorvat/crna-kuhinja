import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function WinesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-accent-950 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-400" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.wines.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.wines.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700/80">
            {t('home.wines.text')}
          </p>
          <div className="mt-8">
            <Link
              to="/vina"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-foreground-700/40 px-6 py-3 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-foreground-950/10 cursor-pointer"
            >
              {t('home.wines.ctaWines')}
              <i className="ri-arrow-right-line text-base" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}