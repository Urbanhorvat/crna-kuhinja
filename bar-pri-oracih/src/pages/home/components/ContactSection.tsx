import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const honeypot = (form.querySelector('[name="phone_alt"]') as HTMLInputElement)?.value?.trim();

    if (honeypot) {
      setFormState('success');
      setFormMessage('Sporočilo je bilo uspešno poslano! Hvala za vaš stik.');
      return;
    }

    setFormState('sending');
    setFormMessage('');

    try {
      const formData = new FormData(form);
      const response = await fetch('https://readdy.ai/api/form/d9i7u8ec26n1c7c5pqig', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();
      let parsed: Record<string, unknown> | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const code = (parsed as { code?: string })?.code;
      const serverMeta = (parsed as { meta?: { message?: string; detail?: string } })?.meta;
      const serverMsg =
        serverMeta?.message || serverMeta?.detail || (parsed as { message?: string })?.message || '';

      if (response.ok && code === 'OK') {
        setFormState('success');
        setFormMessage('Sporočilo je bilo uspešno poslano! Hvala za vaš stik. Odgovorimo vam v najkrajšem možnem času.');
        form.reset();
      } else {
        setFormState('error');
        setFormMessage(
          serverMsg && !serverMsg.toLowerCase().includes('spam')
            ? serverMsg
            : 'Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova ali nas pokličite.'
        );
      }
    } catch {
      setFormState('error');
      setFormMessage('Prišlo je do napake pri povezavi. Prosimo, preverite internetno povezavo in poskusite znova.');
    }
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-background-100 section-divider-wavy">
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-6xl mx-auto reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Kje smo
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-4">
            Kontakt &amp; Lokacija
          </h2>
          <p className="text-foreground-600 text-sm md:text-base">
            Najdete nas v središču Markovcev. Pridite na klepet!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-7/12 space-y-6">
            <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/21b37293a244b08aedba491444cdaa77.png"
                alt="Prijetna notranjost Bara Pri Oračih z modernim ambientom"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-background-50 rounded-lg border border-background-200/70 overflow-hidden h-[320px] md:h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.1234567890123!2d15.9308!3d46.3958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDIzJzQ0LjkiTiAxNcKwNTUnNTAuOSJF!5e0!3m2!1ssl!2ssi!4v1690000000000!5m2!1ssl!2ssi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Bar Pri Oračih na Google Maps"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-background-50 rounded-lg border border-background-200/70 p-6 md:p-8">
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 flex-shrink-0">
                    <i className="ri-map-pin-line text-primary-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground-900 text-sm mb-0.5">Naslov</p>
                    <p className="text-foreground-600 text-sm">Markovci 33, 2281 Markovci</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 flex-shrink-0">
                    <i className="ri-phone-line text-primary-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground-900 text-sm mb-0.5">Telefon</p>
                    <a href="tel:041904191" className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors cursor-pointer">
                      041 904 191
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 flex-shrink-0">
                    <i className="ri-mail-line text-secondary-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground-900 text-sm mb-0.5">E-pošta</p>
                    <a href="mailto:info@bar-pri-oracih.si" className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors cursor-pointer">
                      info@bar-pri-oracih.si
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-background-200/70">
                  <p className="font-heading font-semibold text-foreground-900 text-xs uppercase tracking-wider mb-3">Sledite nam</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/PriOracih/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 transition-colors cursor-pointer"
                      aria-label="Facebook"
                    >
                      <i className="ri-facebook-fill text-[#1877F2] text-xl"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/barprioracih/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F]/20 transition-colors cursor-pointer"
                      aria-label="Instagram"
                    >
                      <i className="ri-instagram-line text-[#E4405F] text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <form
                data-readdy-form=""
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    Ime in priimek
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Vaše ime"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-background-300 bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    E-pošta
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="vasa@posta.si"
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-background-300 bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    Sporočilo
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    maxLength={500}
                    placeholder="Vaše sporočilo (največ 500 znakov)..."
                    className="w-full px-4 py-2.5 text-sm rounded-md border border-background-300 bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="honeypot-field">
                  <input
                    type="text"
                    name="phone_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full px-5 py-3 bg-primary-500 text-white font-heading font-semibold text-sm rounded-md cursor-pointer hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {formState === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      Pošiljanje...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-send-plane-line"></i>
                      Pošlji sporočilo
                    </span>
                  )}
                </button>

                {formState === 'success' && (
                  <div className="text-center p-3 rounded-md bg-primary-50 border border-primary-200 text-primary-700 text-sm">
                    <i className="ri-check-line mr-1"></i>
                    {formMessage}
                  </div>
                )}
                {formState === 'error' && (
                  <div className="text-center p-3 rounded-md bg-primary-50 border border-primary-200 text-primary-700 text-sm">
                    <i className="ri-error-warning-line mr-1"></i>
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}