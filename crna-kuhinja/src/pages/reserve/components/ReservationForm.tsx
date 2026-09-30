import { useMemo, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'success' | 'error';

const TIME_SLOTS = [
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
];

const inputClass =
  'w-full rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/40';
const labelClass = 'mb-1.5 block font-label text-xs font-medium text-foreground-700';

const todayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().split('T')[0];
};

export default function ReservationForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [notesLength, setNotesLength] = useState(0);
  const minDate = useMemo(() => todayISO(), []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get('contact_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    const name = String(formData.get('name') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const date = String(formData.get('reservation_date') ?? '').trim();
    const time = String(formData.get('reservation_time') ?? '').trim();
    const guests = Number(formData.get('guests') ?? 0);
    const notes = String(formData.get('notes') ?? '').trim();

    if (!name || !phone || !date || !time || !guests) {
      setStatus('error');
      setErrorMsg(t('pages.reserve.formRequired'));
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('reservations').insert({
        name,
        phone,
        email: email || null,
        reservation_date: date,
        reservation_time: time,
        guests,
        notes: notes || null,
        status: 'pending',
      });

      if (error) {
        setStatus('error');
        setErrorMsg(t('pages.reserve.formError'));
        return;
      }

      // Send email notification (best-effort). The reservation is already
      // safely stored in the database above, so an email failure never
      // loses the booking.
      try {
        await supabase.functions.invoke('send-reservation-email', {
          body: { name, phone, email, date, time, guests, notes },
        });
      } catch {
        // ignore email errors, reservation is already saved
      }

      setStatus('success');
      form.reset();
      setNotesLength(0);
    } catch {
      setStatus('error');
      setErrorMsg(t('pages.reserve.formError'));
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-lg border border-primary-300/70 bg-background-50 px-6 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-accent-700">
          <i className="ri-checkbox-circle-line text-3xl" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-950">
          {t('pages.reserve.formSuccessTitle')}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-700">
          {t('pages.reserve.formSuccessText')}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-900/25 px-5 py-2.5 font-label text-sm font-medium text-foreground-900 transition-colors duration-200 hover:bg-foreground-950/5 cursor-pointer"
        >
          <i className="ri-add-line text-base" />
          {t('pages.reserve.formAnother')}
        </button>
      </div>
    );
  }

  return (
    <form data-readdy-form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="res-name">
            {t('pages.reserve.formName')}
          </label>
          <input id="res-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-phone">
            {t('pages.reserve.formPhone')}
          </label>
          <input id="res-phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-email">
            {t('pages.reserve.formEmail')}
          </label>
          <input id="res-email" name="email" type="email" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-date">
            {t('pages.reserve.formDate')}
          </label>
          <input
            id="res-date"
            name="reservation_date"
            type="date"
            required
            min={minDate}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-time">
            {t('pages.reserve.formTime')}
          </label>
          <select id="res-time" name="reservation_time" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t('pages.reserve.formTimePlaceholder')}
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="res-guests">
            {t('pages.reserve.formGuests')}
          </label>
          <select id="res-guests" name="guests" required defaultValue="2" className={inputClass}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {t('pages.reserve.formGuestsUnit')}
              </option>
            ))}
            <option value="13">13+ {t('pages.reserve.formGuestsUnit')}</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="res-notes">
          {t('pages.reserve.formNotes')}
        </label>
        <textarea
          id="res-notes"
          name="notes"
          rows={4}
          maxLength={500}
          onChange={(e) => setNotesLength(e.target.value.length)}
          placeholder={t('pages.reserve.formNotesPlaceholder')}
          className={inputClass}
        />
        <p className="mt-1 text-right font-label text-[11px] text-foreground-400">
          {notesLength}/500 · {t('pages.reserve.formCharCount')}
        </p>
      </div>

      <div className="form-website-alt-wrapper" aria-hidden="true">
        <label htmlFor="res-contact-alt">Contact</label>
        <input
          id="res-contact-alt"
          name="contact_alt"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          readOnly
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 disabled:opacity-60 cursor-pointer sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <i className="ri-loader-4-line animate-spin text-base" />
            {t('pages.reserve.formSending')}
          </>
        ) : (
          <>
            <i className="ri-calendar-check-line text-base" />
            {t('pages.reserve.formSubmit')}
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="flex items-start gap-2 rounded-md bg-accent-950/50 p-3.5 text-sm text-accent-100">
          <i className="ri-error-warning-line mt-0.5 text-base" />
          {errorMsg || t('pages.reserve.formError')}
        </p>
      )}
    </form>
  );
}