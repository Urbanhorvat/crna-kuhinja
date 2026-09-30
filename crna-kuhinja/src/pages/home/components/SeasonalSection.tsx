import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function SeasonalSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <Reveal delay={120}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-secondary-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-secondary-300">
              {t('home.seasonal.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.seasonal.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700">
            {t('home.seasonal.text')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}