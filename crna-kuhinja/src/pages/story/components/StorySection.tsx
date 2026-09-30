import type { ReactNode } from 'react';
import Reveal from '@/components/base/Reveal';

interface StorySectionProps {
  label: string;
  title: string;
  text: string;
  photoLabel?: string;
  photoSrc?: string;
  photoAspect?: string;
  reverse?: boolean;
  dark?: boolean;
  children?: ReactNode;
}

export default function StorySection({
  label,
  title,
  text,
  photoLabel,
  photoSrc,
  photoAspect = 'aspect-[3/4]',
  reverse = false,
  dark = false,
  children,
}: StorySectionProps) {
  return (
    <section className={dark ? 'bg-background-100 py-16 md:py-24' : 'bg-background-50 py-16 md:py-24'}>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" />
            <span
              className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300"
            >
              {label}
            </span>
          </div>
          <h2
              className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl"
          >
            {title}
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-foreground-700/80"
          >
            {text}
          </p>
          {children}
        </Reveal>
        {photoSrc && (
          <Reveal delay={130} className={reverse ? 'lg:order-1' : ''}>
            <div className={`relative mx-auto ${photoAspect} w-full max-w-[76%] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100`}>
              <img
                src={photoSrc}
                alt={photoLabel ?? ''}
                title={photoLabel ?? ''}
                className="h-full w-full object-contain"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}