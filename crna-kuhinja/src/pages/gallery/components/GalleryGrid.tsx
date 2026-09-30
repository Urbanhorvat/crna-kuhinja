import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Category = 'fire' | 'dishes' | 'space' | 'wine';

interface GalleryPhoto {
  key: string;
  src: string;
  category: Category;
  aspect: string;
}

const photos: GalleryPhoto[] = [
  {
    key: 'oven',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9155b4900a2a6988420e02fcbe0779ed.png',
    category: 'fire',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'grill',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/fca12080b5f4497a3716b079c3c4dab3.png',
    category: 'fire',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'carpaccio',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/259b558e0f3c9bd344a355632cab8f3c.png',
    category: 'dishes',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'soupNoodles',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/83c719b564f3ec99c5f3e63db203fb6e.png',
    category: 'dishes',
    aspect: 'aspect-square',
  },
  {
    key: 'pumpkinSoup',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/ef4a9f35016a56b4fb57defe0203202f.png',
    category: 'dishes',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'tomahawk',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/8f2b0934c7181d27cca3a334aa996ee8.png',
    category: 'dishes',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'dessert',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/b4d471548a673da19f6b9ce6e97848b5.png',
    category: 'dishes',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'preparation',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/ade6bace3649bb2a9a8a9e37fc404cc9.png',
    category: 'dishes',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'chandelier',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/345679c63bb00fe510ce2abcc52daa28.png',
    category: 'space',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'interior',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/5ea6e2a5a3846fb3daaab48169d4d24d.png',
    category: 'space',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'wine',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9ff51f4af82153aec06d86116dd2952c.png',
    category: 'wine',
    aspect: 'aspect-[3/4]',
  },
  {
    key: 'team',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/72e9ecf9d397994dba5192adfe8f1e38.png',
    category: 'space',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'host',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/4ded82cd627af7fb35c1244dad8014b1.png',
    category: 'space',
    aspect: 'aspect-[3/4]',
  },
];

const filters: Array<'all' | Category> = ['all', 'fire', 'dishes', 'space', 'wine'];

const captionKeys = ['preparation'];
// Photographs shown without any text caption underneath.
const captionlessKeys = ['team', 'host'];

export default function GalleryGrid() {
  const { t } = useTranslation();
  const [active, setActive] = useState<'all' | Category>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = active === 'all' ? photos : photos.filter((p) => p.category === active);

  useEffect(() => {
    setLightbox(null);
  }, [active]);

  useEffect(() => {
    if (lightbox === null) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, visible.length]);

  useEffect(() => {
    document.body.style.overflow = lightbox === null ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const current = lightbox === null ? null : visible[lightbox];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-background-300/70 bg-background-100 p-1.5 sm:inline-flex">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-label text-xs tracking-wide transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary-500 text-foreground-950'
                  : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              {t(`pages.gallery.filters.${f}`)}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-foreground-600">{t('pages.gallery.empty')}</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((photo, index) => {
            const hasCaption = captionKeys.includes(photo.key);
            const captionless = captionlessKeys.includes(photo.key);
            return (
              <button
                key={photo.key}
                type="button"
                onClick={() => setLightbox(index)}
                aria-label={t('pages.gallery.openLabel')}
                className="group flex w-full flex-col overflow-hidden rounded-lg border border-background-300/70 bg-background-100 text-left transition-colors duration-200 hover:border-primary-500/40 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200">
                  <img
                    src={photo.src}
                    alt={t(`pages.gallery.photos.${photo.key}`)}
                    title={t(`pages.gallery.photos.${photo.key}`)}
                    className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 px-3 py-2.5">
                  <div className="min-w-0">
                    {!captionless && (
                      <span
                        className={`text-xs leading-snug ${
                          hasCaption ? 'text-white' : 'text-foreground-700'
                        }`}
                      >
                        {hasCaption
                          ? t(`pages.gallery.captions.${photo.key}`)
                          : t(`pages.gallery.photos.${photo.key}`)}
                      </span>
                    )}
                  </div>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <i className="ri-expand-diagonal-line text-[13px]" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(`pages.gallery.photos.${current.key}`)}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-8"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={t('pages.gallery.closeLabel')}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
          >
            <i className="ri-close-line text-2xl" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
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
              setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
            }}
            aria-label={t('pages.gallery.nextLabel')}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer md:right-6"
          >
            <i className="ri-arrow-right-s-line text-2xl" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-5xl flex-col items-center"
          >
            <img
              src={current.src}
              alt={t(`pages.gallery.photos.${current.key}`)}
              title={t(`pages.gallery.photos.${current.key}`)}
              className="max-h-[76vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {captionlessKeys.includes(current.key) ? null : (
                <>
                  {captionKeys.includes(current.key)
                    ? t(`pages.gallery.captions.${current.key}`)
                    : t(`pages.gallery.photos.${current.key}`)}
                  <span className="mx-2 text-white/40">·</span>
                </>
              )}
              {(lightbox ?? 0) + 1} / {visible.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}