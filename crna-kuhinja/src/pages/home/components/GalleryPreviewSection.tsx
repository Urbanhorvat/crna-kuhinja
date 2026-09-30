import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

interface PreviewPhoto {
  key: string;
  src: string;
}

const previewPhotos: PreviewPhoto[] = [
  {
    key: 'oven',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9155b4900a2a6988420e02fcbe0779ed.png',
  },
  {
    key: 'tomahawk',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/8f2b0934c7181d27cca3a334aa996ee8.png',
  },
  {
    key: 'chandelier',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/345679c63bb00fe510ce2abcc52daa28.png',
  },
  {
    key: 'wine',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9ff51f4af82153aec06d86116dd2952c.png',
  },
  {
    key: 'grill',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/fca12080b5f4497a3716b079c3c4dab3.png',
  },
  {
    key: 'interior',
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/5ea6e2a5a3846fb3daaab48169d4d24d.png',
  },
];

export default function GalleryPreviewSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.galleryPreview.label')}
            </span>
            <span className="h-px w-8 bg-accent-500" />
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.galleryPreview.title')}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-700">
            {t('home.galleryPreview.text')}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {previewPhotos.map((photo, index) => (
            <Reveal key={photo.key} delay={index * 70}>
              <Link
                to="/galerija"
                className="group block overflow-hidden rounded-lg border border-background-300/70 bg-background-50 transition-colors duration-200 hover:border-primary-500/40 cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-background-50">
                  <img
                    src={photo.src}
                    alt={t(`pages.gallery.photos.${photo.key}`)}
                    title={t(`pages.gallery.photos.${photo.key}`)}
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-background-50/85 text-foreground-800 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <i className="ri-expand-diagonal-line text-sm" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/galerija"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-6 py-3 font-label text-sm font-medium tracking-wide text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
          >
            {t('home.galleryPreview.cta')}
            <i className="ri-arrow-right-line text-base" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}