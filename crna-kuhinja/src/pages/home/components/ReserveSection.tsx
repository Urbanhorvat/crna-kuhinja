import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function ReserveSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(85% 90% at 50% 0%, oklch(var(--primary-700) / 0.44) 0%, transparent 62%), radial-gradient(75% 85% at 10% 100%, oklch(var(--accent-800) / 0.3) 0%, transparent 58%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-4 text-center md:px-8">
        <Reveal className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.reserve.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-5xl">
            {t('home.reserve.title')}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-700/80">
            {t('home.reserve.text')}
          </p>

          <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/rezervacije"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer sm:w-auto md:text-base"
            >
              <i className="ri-calendar-check-line text-base" />
              {t('home.reserve.cta')}
            </Link>
            <a
              href={`tel:${t('contact.phoneHref')}`}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-700/40 px-6 py-3.5 font-label text-sm font-medium tracking-wide text-foreground-950 transition-colors duration-200 hover:bg-foreground-950/10 cursor-pointer sm:w-auto md:text-base"
            >
              <i className="ri-phone-line text-base" />
              {t('contact.phone')}
            </a>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-foreground-800/12 bg-foreground-950/5 p-5 text-left">
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-accent-300">
                {t('home.reserve.callLabel')}
              </p>
              <a
                href={`tel:${t('contact.phoneHref')}`}
                className="mt-2 block font-heading text-lg text-foreground-950 transition-colors duration-200 hover:text-accent-200"
              >
                {t('contact.phone')}
              </a>
            </div>
            <div className="rounded-lg border border-foreground-800/12 bg-foreground-950/5 p-5 text-left">
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-accent-300">
                {t('home.reserve.emailLabel')}
              </p>
              <a
                href={`mailto:${t('contact.email')}`}
                className="mt-2 block break-all font-heading text-lg text-foreground-950 transition-colors duration-200 hover:text-accent-200"
              >
                {t('contact.email')}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}