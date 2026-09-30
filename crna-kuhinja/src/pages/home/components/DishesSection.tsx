import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function DishesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-5 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <div className="mx-auto grid w-full max-w-[80%] grid-cols-2 gap-3 md:gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/259b558e0f3c9bd344a355632cab8f3c.png"
                alt="Karpačo iz postrvi s svežimi breskvami in zelišči na belem krožniku v Črni Kuhni"
                title="Karpačo iz postrvi v Črni Kuhni – predjed za skupno mizo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/83c719b564f3ec99c5f3e63db203fb6e.png"
                alt="Domača juha z rezanci v beli porcelanasti skledi, postrežena v Črni Kuhni"
                title="Domača juha z rezanci v Črni Kuhni – jed iz prleške kuhinje"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/ef4a9f35016a56b4fb57defe0203202f.png"
                alt="Kremna bučna juha z bučnim oljem in zelišči v beli skledi v Črni Kuhni"
                title="Kremna bučna juha z bučnim oljem v Črni Kuhni – jed iz prleške kuhinje"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/8f2b0934c7181d27cca3a334aa996ee8.png"
                alt="Šef kuhinje v predpasniku Črna Kuhna drži tomahawk steak s prilogo iz pečene paprike na keramičnem krožniku"
                title="Glavna jed – tomahawk steak s prilogo v Črni Kuhni"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary-500/20 bg-background-100">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/b4d471548a673da19f6b9ce6e97848b5.png"
                alt="Domača sladica s sladkorjem v prahu na belem krožniku v Črni Kuhni"
                title="Domača sladica v Črni Kuhni – konec obroka za skupno mizo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" />
            <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">
              {t('home.dishes.label')}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground-950 md:text-4xl">
            {t('home.dishes.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-700">
            {t('home.dishes.text')}
          </p>

          <div className="mt-7 flex items-start gap-3 rounded-lg border border-background-300/70 bg-background-100 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
              <i className="ri-leaf-line text-base" />
            </span>
            <p className="text-sm leading-relaxed text-foreground-700">{t('home.dishes.note')}</p>
          </div>

          <div className="mt-8">
            <Link
              to="/jedilnik"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-6 py-3 font-label text-sm font-medium tracking-wide text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
            >
              {t('home.dishes.ctaMenu')}
              <i className="ri-arrow-right-line text-base" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}