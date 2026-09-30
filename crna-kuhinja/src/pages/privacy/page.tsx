import { useTranslation } from 'react-i18next';
import DocumentPage from '@/components/feature/DocumentPage';

export default function PrivacyPage() {
  const { t } = useTranslation();

  const raw = t('pages.privacy.sections', { returnObjects: true });
  const sections = Array.isArray(raw) ? (raw as { title: string; body: string }[]) : [];

  return (
    <DocumentPage
      eyebrow={t('pages.privacy.eyebrow')}
      title={t('pages.privacy.title')}
      intro={t('pages.privacy.intro')}
      sections={sections}
      contactNote={t('pages.privacy.contactNote')}
      contact={{
        phone: t('contact.phone'),
        phoneHref: t('contact.phoneHref'),
        email: t('contact.email'),
      }}
    />
  );
}