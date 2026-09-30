import { useTranslation } from 'react-i18next';
import DocumentPage from '@/components/feature/DocumentPage';

export default function TermsPage() {
  const { t } = useTranslation();

  const raw = t('pages.terms.sections', { returnObjects: true });
  const sections = Array.isArray(raw) ? (raw as { title: string; body: string }[]) : [];

  return (
    <DocumentPage
      eyebrow={t('pages.terms.eyebrow')}
      title={t('pages.terms.title')}
      intro={t('pages.terms.intro')}
      sections={sections}
      contactNote={t('pages.terms.contactNote')}
      contact={{
        phone: t('contact.phone'),
        phoneHref: t('contact.phoneHref'),
        email: t('contact.email'),
      }}
    />
  );
}