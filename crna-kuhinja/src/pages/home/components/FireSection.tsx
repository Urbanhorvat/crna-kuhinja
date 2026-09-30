import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function FireSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="overflow-hidden rounded-lg border border-primary-900/30 bg-background-100 p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary-500" />
                <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                  {t('home.fire.label')}
                </span>
              </div>
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
                {t('home.fire.title')}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground-700/80">
                {t('home.fire.text')}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[74%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-50">
                <img
                  src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9155b4900a2a6988420e02fcbe0779ed.png"
                  alt="Krušna peč s plamenom v jedilnici Črne Kuhne"
                  title="Krušna peč v Črni Kuhni – ogenj kot izhodišče kuhinje"
                  className="h-full w-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}