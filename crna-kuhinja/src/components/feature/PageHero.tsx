import type { ReactNode } from 'react';
import Reveal from '@/components/base/Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background-50 pb-14 pt-32 md:pb-20 md:pt-40">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(85% 75% at 12% 0%, oklch(var(--primary-700) / 0.42) 0%, transparent 60%), radial-gradient(70% 75% at 92% 22%, oklch(var(--accent-800) / 0.3) 0%, transparent 58%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(var(--foreground-50) / 0.035) 0px, oklch(var(--foreground-50) / 0.035) 1px, transparent 1px, transparent 18px)',
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {eyebrow}
            </span>
          </div>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-foreground-950 md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-700/80 md:text-lg">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}