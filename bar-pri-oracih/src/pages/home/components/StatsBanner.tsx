import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: 'ri-calendar-check-line', value: 15, suffix: '+', label: 'Let tradicije', color: 'primary' },
  { icon: 'ri-user-smile-line', value: 150, suffix: '+', label: 'Gostov tedensko', color: 'accent' },
  { icon: 'ri-goblet-line', value: 60, suffix: '+', label: 'Vrst pijač', color: 'secondary' },
  { icon: 'ri-star-fill', value: 4.7, suffix: '', label: 'Povprečna ocena', color: 'primary', decimal: true },
];

function useCountUp(end: number, duration: number, startCounting: boolean, decimal: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, startCounting, decimal]);

  return count;
}

function StatCard({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible, stat.decimal ?? false);

  const iconBgMap: Record<string, string> = {
    primary: 'bg-primary-100',
    accent: 'bg-accent-100',
    secondary: 'bg-secondary-100',
  };
  const iconColorMap: Record<string, string> = {
    primary: 'text-primary-600',
    accent: 'text-accent-600',
    secondary: 'text-secondary-600',
  };

  return (
    <div className="flex flex-col items-center text-center p-5">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${iconBgMap[stat.color]} mb-4`}>
        <i className={`${stat.icon} ${iconColorMap[stat.color]} text-2xl`}></i>
      </div>
      <div className="flex items-baseline gap-0.5 mb-1">
        <span className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">
          {stat.decimal ? count.toFixed(1) : count}
        </span>
        {stat.suffix && (
          <span className="font-heading font-bold text-xl md:text-2xl text-foreground-950">{stat.suffix}</span>
        )}
      </div>
      <span className="text-foreground-500 text-sm font-medium">{stat.label}</span>
    </div>
  );
}

export default function StatsBanner() {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="relative w-full py-12 md:py-16 bg-background-100/50 border-y border-background-200/60">
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-5xl mx-auto reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}