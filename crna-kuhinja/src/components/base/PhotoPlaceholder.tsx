import { useTranslation } from 'react-i18next';

interface PhotoPlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

export default function PhotoPlaceholder({
  label,
  aspect = 'aspect-[4/3]',
  className = '',
}: PhotoPlaceholderProps) {
  const { t } = useTranslation();

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative mx-auto w-full max-w-[76%] ${aspect} overflow-hidden rounded-lg border border-primary-500/20 bg-background-100 ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(120% 95% at 18% 12%, oklch(var(--primary-700) / 0.55) 0%, transparent 55%), radial-gradient(110% 110% at 88% 92%, oklch(var(--accent-800) / 0.5) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(var(--foreground-50) / 0.05) 0px, oklch(var(--foreground-50) / 0.05) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-400/40 text-accent-300">
          <i className="ri-camera-lens-line text-lg" />
        </span>
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-accent-200/90">
          {t('photo.badge')}
        </p>
        <p className="max-w-xs text-sm leading-relaxed text-foreground-700/80">{label}</p>
      </div>
    </div>
  );
}