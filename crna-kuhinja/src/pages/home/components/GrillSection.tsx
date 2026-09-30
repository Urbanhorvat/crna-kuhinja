import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function GrillSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[68%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-50">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/fca12080b5f4497a3716b079c3c4dab3.png"
                alt="Žar z odprtim ognjem in pripravo hrane v Črni Kuhni"
                title="Žar na odprtem ognju v Črni Kuhni – kuhanje na ognju"
                className="h-full w-full object-contain"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" />
              <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                {t('home.grill.label')}
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
              {t('home.grill.title')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground-700/80">
              {t('home.grill.text')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}