interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
}

interface DocumentPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
  contactNote: string;
  contact: ContactInfo;
}

export default function DocumentPage({
  eyebrow,
  title,
  intro,
  sections,
  contactNote,
  contact,
}: DocumentPageProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background-50 pb-14 pt-32 md:pb-20 md:pt-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(85% 75% at 12% 0%, oklch(var(--primary-700) / 0.42) 0%, transparent 60%), radial-gradient(70% 75% at 92% 22%, oklch(var(--accent-800) / 0.28) 0%, transparent 58%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 md:px-8">
          <span className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-300">{eyebrow}</span>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-foreground-950 md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-foreground-700/80">{intro}</p>
        </div>
      </section>

      <section className="bg-background-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-l-2 border-primary-300/70 pl-5 md:pl-6">
                <h2 className="font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-background-300/70 bg-background-100 p-6">
            <p className="text-sm text-foreground-800">{contactNote}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center gap-2 text-sm text-foreground-900 transition-colors duration-200 hover:text-accent-300"
              >
                <i className="ri-phone-line text-base text-accent-300" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 break-all text-sm text-foreground-900 transition-colors duration-200 hover:text-accent-300"
              >
                <i className="ri-mail-line text-base text-accent-300" />
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}