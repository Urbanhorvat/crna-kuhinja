import Reveal from '@/components/base/Reveal';

export type DividerVariant = 'diamond' | 'dots' | 'flame' | 'leaf' | 'ring' | 'double' | 'ember';

interface SectionDividerProps {
  variant?: DividerVariant;
  className?: string;
}

function Motif({ variant }: { variant: DividerVariant }) {
  switch (variant) {
    case 'dots':
      return (
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-secondary-400/70" />
        </div>
      );
    case 'flame':
      return (
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500/50 md:w-24" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-500/40 text-primary-400">
            <i className="ri-fire-line text-base" />
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500/50 md:w-24" />
        </div>
      );
    case 'leaf':
      return (
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500/50 md:w-24" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-500/40 text-secondary-300">
            <i className="ri-leaf-line text-base" />
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500/50 md:w-24" />
        </div>
      );
    case 'ring':
      return (
        <div className="flex items-center gap-3">
          <span className="h-1 w-1 rounded-full bg-primary-500/70" />
          <span className="h-px w-10 bg-primary-500/40 md:w-20" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-400/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400/90" />
          </span>
          <span className="h-px w-10 bg-primary-500/40 md:w-20" />
          <span className="h-1 w-1 rounded-full bg-primary-500/70" />
        </div>
      );
    case 'double':
      return (
        <div className="flex flex-col items-center gap-2">
          <span className="h-px w-28 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent md:w-44" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-accent-400/60 to-transparent md:w-28" />
        </div>
      );
    case 'ember':
      return (
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 bg-accent-500/60" />
          <span className="h-px w-16 bg-primary-500/50 md:w-28" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent-500/60" />
        </div>
      );
    case 'diamond':
    default:
      return (
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500/60 md:w-28" />
          <span className="h-2.5 w-2.5 rotate-45 border border-primary-400 bg-primary-500/70" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500/60 md:w-28" />
        </div>
      );
  }
}

/**
 * A soft, decorative seam placed between page sections.
 * Each variant uses a different motif so the rhythm of the page
 * never feels repetitive. The `className` should carry the
 * background of the section above so the seam blends into it.
 */
export default function SectionDivider({ variant = 'diamond', className = '' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full items-center justify-center px-4 py-7 md:py-9 ${className}`}
    >
      <Reveal>
        <Motif variant={variant} />
      </Reveal>
    </div>
  );
}