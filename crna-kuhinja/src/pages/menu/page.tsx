import { useTranslation } from 'react-i18next';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import { normalizeLanguage } from '@/i18n';
import { useMenuData } from '@/pages/menu/hooks/useMenuData';

export default function MenuPage() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);
  const { categories, totalItems, loading, error, reload } = useMenuData();

  const locale = lang === 'sl' ? 'sl-SI' : lang === 'de' ? 'de-DE' : 'en-GB';
  const pickName = (slValue: string, enValue: string | null, deValue: string | null) => {
    if (lang === 'sl') return slValue;
    if (lang === 'de') return deValue || enValue || slValue;
    return enValue || slValue;
  };
  const pickText = (slValue: string | null, enValue: string | null, deValue: string | null) => {
    if (lang === 'sl') return slValue;
    if (lang === 'de') return deValue || enValue || slValue;
    return enValue || slValue;
  };

  const formatPrice = (value: number | null) => {
    if (value === null || value === undefined) return null;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  };

  return (
    <>
      <PageHero eyebrow={t('pages.menu.eyebrow')} title={t('pages.menu.title')} intro={t('pages.menu.intro')} />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-3 rounded-lg border border-primary-800/50 bg-primary-950/40 p-5 md:flex-row md:items-center md:gap-4 md:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                <i className="ri-restaurant-2-line text-lg" />
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-foreground-950 md:text-lg">
                  {t('pages.menu.seasonalNotice')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground-700">
                  {t('pages.menu.seasonalNoticeText')}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12">
            {loading && (
              <div className="flex items-center justify-center gap-3 py-16 text-foreground-600">
                <i className="ri-loader-4-line animate-spin text-xl text-accent-300" />
                <span className="text-sm">{t('pages.menu.loading')}</span>
              </div>
            )}

            {!loading && error && (
              <div className="rounded-lg border border-accent-800/50 bg-accent-950/40 p-8 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <i className="ri-error-warning-line text-xl" />
                </span>
                <p className="mt-4 text-sm text-foreground-800">{t('pages.menu.error')}</p>
                <button
                  type="button"
                  onClick={reload}
                  className="mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-2.5 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
                >
                  <i className="ri-refresh-line text-base" />
                  {t('pages.menu.retry')}
                </button>
              </div>
            )}

            {!loading && !error && totalItems === 0 && (
              <Reveal>
                <div className="rounded-lg border border-background-300/80 bg-background-100 p-8 text-center md:p-12">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                    <i className="ri-leaf-line text-2xl" />
                  </span>
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
                    {t('pages.menu.emptyTitle')}
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-foreground-700">
                    {t('pages.menu.emptyText')}
                  </p>

                  {categories.length > 0 && (
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                      {categories.map((c) => (
                        <span
                          key={c.id}
                          className="rounded-full bg-secondary-100 px-3.5 py-1.5 font-label text-xs text-secondary-900"
                        >
                          {pickName(c.name_sl, c.name_en, c.name_de)}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`tel:${t('contact.phoneHref')}`}
                    className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-3 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 cursor-pointer"
                  >
                    <i className="ri-phone-line text-base" />
                    {t('pages.menu.ctaCall')}
                  </a>
                </div>
              </Reveal>
            )}

            {!loading && !error && totalItems > 0 && (
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16">
                {categories
                  .filter((category) => category.items.length > 0)
                  .map((category) => (
                  <Reveal key={category.id} className="break-inside-avoid">
                    <h2 className="border-b border-primary-300/60 pb-3 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                      {pickName(category.name_sl, category.name_en, category.name_de)}
                    </h2>
                    <ul className="mt-5 space-y-6">
                      {category.items.map((item) => {
                        const name = pickName(item.name_sl, item.name_en, item.name_de);
                        const desc = pickText(item.description_sl, item.description_en, item.description_de);
                        const price = formatPrice(item.price);
                        return (
                          <li key={item.id}>
                            <div className="flex gap-4">
                              {item.image_url && (
                                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md border border-primary-500/20 bg-background-100 md:h-16 md:w-16">
                                  <img
                                    src={item.image_url}
                                    alt={`${name} v Črni Kuhni`}
                                    title={`${name} – Črna Kuhna`}
                                    className="h-full w-full object-contain"
                                  />
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <div className="flex items-baseline justify-between gap-4">
                                  <h3 className="font-heading text-base font-semibold text-foreground-950">
                                    {name}
                                  </h3>
                                  {price && (
                                    <span className="font-label text-sm text-accent-300">{price}</span>
                                  )}
                                </div>
                                {desc && (
                                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">{desc}</p>
                                )}
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {(item.dietary ?? []).map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full bg-secondary-100 px-2.5 py-1 font-label text-[11px] text-secondary-900"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {(item.allergens ?? []).map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full bg-background-200 px-2.5 py-1 font-label text-[11px] text-foreground-700"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-background-300/70 bg-background-100 p-6 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-accent-700">
                  <i className="ri-heart-pulse-line text-lg" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                  {t('pages.menu.allergensTitle')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-700">
                  {t('pages.menu.allergensText')}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-700">
                  {t('pages.menu.dietaryText')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-lg border border-background-300/70 bg-background-100 p-6 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                  <i className="ri-file-pdf-line text-lg" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                  {t('pages.menu.pdfTitle')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-700">
                  {t('pages.menu.pdfText')}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href={`tel:${t('contact.phoneHref')}`}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-5 py-2.5 font-label text-sm font-medium text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
                  >
                    <i className="ri-phone-line text-base" />
                    {t('pages.menu.ctaCall')}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}