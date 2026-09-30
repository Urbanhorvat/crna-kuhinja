import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function SpaceSection() {
  const { t } = useTranslation();

  const features = [
    { icon: 'ri-group-line', key: 'home.space.feature1' },
    { icon: 'ri-goblet-line', key: 'home.space.feature2' },
    { icon: 'ri-time-line', key: 'home.space.feature3' },
  ];

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.space.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.space.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700">
            {t('home.space.text')}
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f.key} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className={`${f.icon} text-base`} />
                </span>
                <span className="text-sm text-foreground-800">{t(f.key)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={140}>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[76%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-50">
            <img
              src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/5ea6e2a5a3846fb3daaab48169d4d24d.png"
              alt={t('home.space.photoLabel')}
              title={t('home.space.photoLabel')}
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}