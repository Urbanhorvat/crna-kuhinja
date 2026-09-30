import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import SectionDivider from '@/components/base/SectionDivider';

export default function GiftPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero eyebrow={t('pages.gift.eyebrow')} title={t('pages.gift.title')} intro={t('pages.gift.intro')} />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-lg border border-background-300/70 bg-background-100 p-6 md:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className="ri-gift-line text-base" />
                </span>
                <h2 className="mt-4 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                  {t('pages.gift.howTitle')}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">{t('pages.gift.howText')}</p>
              </div>
              <div className="rounded-lg border border-background-300/70 bg-background-100 p-6 md:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                  <i className="ri-price-tag-3-line text-base" />
                </span>
                <h2 className="mt-4 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                  {t('pages.gift.valueTitle')}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                  {t('pages.gift.valueText')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="flame" className="bg-background-50" />

      <section className="bg-background-100 py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              {t('pages.gift.vouchersTitle')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-700 md:text-base">
              {t('pages.gift.vouchersText')}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { value: '50 €', icon: 'ri-gift-line' },
              { value: '100 €', icon: 'ri-gift-2-line' },
            ].map((voucher, index) => (
              <Reveal key={voucher.value} delay={index * 120}>
                <div className="flex h-full flex-col items-center rounded-lg border border-background-300/70 bg-background-50 px-6 py-8 text-center md:px-8 md:py-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <i className={`${voucher.icon} text-xl`} />
                  </span>
                  <p className="mt-5 font-heading text-4xl font-semibold text-foreground-950 md:text-5xl">
                    {voucher.value}
                  </p>
                  <p className="mt-2 font-label text-sm uppercase tracking-[0.15em] text-foreground-700">
                    {t('pages.gift.voucherName')}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground-700">
                    <i className="ri-store-2-line text-base text-accent-600" />
                    <span>{t('pages.gift.voucherBuyLabel')}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-foreground-600">
              {t('pages.gift.voucherBuyNote')}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="dots" className="bg-background-100" />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center md:px-8">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 md:text-4xl">
              {t('pages.gift.ctaTitle')}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-700/80 md:text-base">
              {t('pages.gift.ctaText')}
            </p>
            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${t('contact.phoneHref')}`}
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3.5 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer sm:w-auto"
              >
                <i className="ri-phone-line text-base" />
                {t('cta.call')}
              </a>
              <a
                href={`mailto:${t('contact.email')}`}
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-700/40 px-6 py-3.5 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-foreground-950/10 cursor-pointer sm:w-auto"
              >
                <i className="ri-mail-line text-base" />
                {t('cta.email')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}