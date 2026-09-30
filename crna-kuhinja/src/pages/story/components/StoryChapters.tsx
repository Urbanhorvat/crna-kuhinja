import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

interface Chapter {
  key: string;
  src: string;
  label: string;
  title: string;
  text: string;
}

export default function StoryChapters() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  const chapters: Chapter[] = [
    {
      key: 'fire',
      src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9155b4900a2a6988420e02fcbe0779ed.png',
      label: t('home.fire.label'),
      title: t('home.fire.title'),
      text: t('home.fire.text'),
    },
    {
      key: 'grill',
      src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/fca12080b5f4497a3716b079c3c4dab3.png',
      label: t('home.grill.label'),
      title: t('home.grill.title'),
      text: t('home.grill.text'),
    },
    {
      key: 'space',
      src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/5ea6e2a5a3846fb3daaab48169d4d24d.png',
      label: t('home.space.label'),
      title: t('home.space.title'),
      text: t('home.space.text'),
    },
    {
      key: 'wine',
      src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9ff51f4af82153aec06d86116dd2952c.png',
      label: t('home.wines.label'),
      title: t('home.wines.title'),
      text: t('home.wines.text'),
    },
  ];

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') {
        setOpen((i) => (i === null ? i : (i + 1) % chapters.length));
      }
      if (e.key === 'ArrowLeft') {
        setOpen((i) => (i === null ? i : (i - 1 + chapters.length) % chapters.length));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, chapters.length]);

  useEffect(() => {
    document.body.style.overflow = open === null ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const current = open === null ? null : chapters[open];

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('pages.story.chaptersLabel')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('pages.story.chaptersTitle')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700">
            {t('pages.story.chaptersText')}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.key} delay={index * 90}>
              <button
                type="button"
                onClick={() => setOpen(index)}
                aria-label={chapter.title}
                className="group relative block w-full overflow-hidden rounded-lg border border-background-300/70 bg-background-100 text-left transition-colors duration-200 hover:border-primary-500/50 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={chapter.src}
                    alt={chapter.title}
                    title={chapter.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/35 to-transparent" />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-foreground-900/20 bg-background-50/70 text-foreground-900 transition-colors duration-200 group-hover:border-primary-500/50 group-hover:text-primary-300">
                    <i className="ri-expand-diagonal-line text-sm" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                      {chapter.label}
                    </span>
                    <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                      {chapter.title}
                    </h3>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(null)}
          className="lightbox-fade fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label={t('pages.gallery.closeLabel')}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
          >
            <i className="ri-close-line text-2xl" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i - 1 + chapters.length) % chapters.length));
            }}
            aria-label={t('pages.gallery.prevLabel')}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer md:left-6"
          >
            <i className="ri-arrow-left-s-line text-2xl" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i + 1) % chapters.length));
            }}
            aria-label={t('pages.gallery.nextLabel')}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer md:right-6"
          >
            <i className="ri-arrow-right-s-line text-2xl" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="lightbox-pop flex max-h-full w-full max-w-3xl flex-col items-center"
          >
            <img
              src={current.src}
              alt={current.title}
              title={current.title}
              className="max-h-[56vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-5 max-w-xl text-center">
              <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
                {current.label}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-700">{current.text}</p>
              <span className="mt-3 block text-xs text-foreground-500">
                {(open ?? 0) + 1} / {chapters.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}