import { useState, type FormEvent } from 'react';

function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const honeypot = (form.querySelector('[name="company_alt"]') as HTMLInputElement)?.value?.trim();

    if (honeypot) {
      setStatus('success');
      setMessage('Hvala za prijavo!');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const formData = new FormData(form);
      const response = await fetch('https://readdy.ai/api/form/d9q9tbcnlsngrm4llu90', {
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

      if (response.ok && code === 'OK') {
        setStatus('success');
        setMessage('Hvala za prijavo! Obveščali vas bomo o posebnih dogodkih in novostih.');
        form.reset();
      } else {
        setStatus('error');
        setMessage('Prišlo je do napake. Poskusite znova.');
      }
    } catch {
      setStatus('error');
      setMessage('Prišlo je do napake pri povezavi.');
    }
  };

  return (
    <div>
      <h4 className="font-heading font-semibold text-sm mb-3 text-white/80">E-novice</h4>
      <p className="text-white/40 text-xs mb-3 leading-relaxed">
        Prijavite se in bodite obveščeni o posebnih dogodkih, akcijah in novostih.
      </p>
      <form data-readdy-form="" onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            required
            placeholder="vasa@posta.si"
            className="flex-1 min-w-0 px-3 py-2 text-sm rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-md cursor-pointer hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'sending' ? (
              <i className="ri-loader-4-line animate-spin"></i>
            ) : (
              'Prijava'
            )}
          </button>
        </div>
        <div className="honeypot-field">
          <input
            type="text"
            name="company_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
          />
        </div>
        {status === 'success' && (
          <p className="text-accent-500 text-xs">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-primary-300 text-xs">{message}</p>
        )}
      </form>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary-950 text-white py-10 md:py-14">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Bar Pri Oračih</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Stičišče dobre kave, osvežilnih pijač in lokalnega družabnega življenja v Markovcih.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Bar+Pri+Oračih+Markovci+33+2281+Markovci"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Google Maps"
              >
                <i className="ri-map-pin-line text-base"></i>
              </a>
              <a
                href="tel:041904191"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Telefon"
              >
                <i className="ri-phone-line text-base"></i>
              </a>
              <a
                href="mailto:info@bar-pri-oracih.si"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="E-pošta"
              >
                <i className="ri-mail-line text-base"></i>
              </a>
              <a
                href="https://www.facebook.com/PriOracih/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/10 hover:bg-[#1877F2]/40 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-base"></i>
              </a>
              <a
                href="https://www.instagram.com/barprioracih/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/10 hover:bg-[#E4405F]/40 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-base"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-white/80">Hitre povezave</h4>
            <ul className="space-y-2">
              {[
                { label: 'O nas', href: '#about' },
                { label: 'Pikado', href: '#pikado' },
                { label: 'Ponudba', href: '#menu' },
                { label: 'Mnenja', href: '#testimonials' },
                { label: 'Delovni čas', href: '#hours' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontakt', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white/80 text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-white/80">Delovni čas</h4>
            <ul className="space-y-1.5 text-white/50 text-sm">
              <li>Pon–Čet: 06:30 – 22:00</li>
              <li>Pet: 06:30 – 00:00</li>
              <li>Sob: 07:00 – 00:00</li>
              <li>Ned: 07:00 – 21:00</li>
            </ul>
          </div>

          <NewsletterForm />
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Bar Pri Oračih. Vse pravice pridržane.
          </p>
          <p className="text-white/30 text-xs">
            Markovci 33, 2281 Markovci, Slovenija
          </p>
        </div>
      </div>
    </footer>
  );
}