import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import { normalizeLanguage } from '@/i18n';
import StorySection from '@/pages/story/components/StorySection';
import StoryChapters from '@/pages/story/components/StoryChapters';
import SectionDivider from '@/components/base/SectionDivider';

export default function StoryPage() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);

  const LABELS = {
    sl: { fire: 'Ogenj', soil: 'Zemlja' },
    en: { fire: 'Fire', soil: 'Soil' },
    de: { fire: 'Feuer', soil: 'Boden' },
  } as const;
  const labels = LABELS[lang];

  const rawValues = t('pages.story.values', { returnObjects: true });
  const values = Array.isArray(rawValues) ? (rawValues as string[]) : [];

  return (
    <>
      <PageHero eyebrow={t('pages.story.eyebrow')} title={t('pages.story.title')} intro={t('pages.story.intro')} />

      <SectionDivider variant="leaf" className="bg-background-50" />

      <section className="bg-background-100 py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-lg">
              <span className="mx-auto block h-px w-10 bg-primary-500" />
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center font-heading text-lg font-medium leading-relaxed text-foreground-800 md:text-2xl md:leading-relaxed">
              {t('pages.story.lead')}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="diamond" className="bg-background-100" />

      <StorySection
        label={labels.fire}
        title={t('pages.story.fireTitle')}
        text={t('pages.story.fireText')}
        photoAspect="aspect-[4/3]"
        photoLabel={t('pages.story.firePhotoLabel')}
        photoSrc="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9155b4900a2a6988420e02fcbe0779ed.png"
      />

      <SectionDivider variant="ring" className="bg-background-50" />

      <StorySection
        dark
        reverse
        label={labels.soil}
        title={t('pages.story.localTitle')}
        text={t('pages.story.localText')}
      >
        <ul className="mt-8 space-y-4">
          {values.map((value) => (
            <li key={value} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                <i className="ri-check-line text-sm" />
              </span>
              <span className="text-sm leading-relaxed text-foreground-700/80">{value}</span>
            </li>
          ))}
        </ul>
      </StorySection>

      <SectionDivider variant="flame" className="bg-background-100" />

      <StoryChapters />
    </>
  );
}