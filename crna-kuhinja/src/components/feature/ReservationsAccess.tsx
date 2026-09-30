import { useEffect, useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

type Reservation = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  notes: string | null;
  status: string;
  created_at: string;
};

type Status = 'locked' | 'checking' | 'unlocked' | 'error';

function formatDate(value: string) {
  const parts = String(value ?? '').split('-');
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }
  return value;
}

function formatReceived(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString('sl-SI', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function ReservationsAccess() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<Status>('locked');
  const [error, setError] = useState('');
  const [items, setItems] = useState<Reservation[]>([]);
  const [confirmItem, setConfirmItem] = useState<Reservation | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [deleteError, setDeleteError] = useState('');

  const openModal = () => {
    setOpen(true);
    setCode('');
    setStatus('locked');
    setError('');
    setDeleteError('');
  };

  const closeModal = () => {
    setOpen(false);
    setCode('');
    setStatus('locked');
    setError('');
    setConfirmItem(null);
    setDeleteError('');
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) return;

    setStatus('checking');
    setError('');

    try {
      const { data, error: fnError } = await supabase.functions.invoke('get-reservations', {
        body: { code: trimmed },
      });

      if (fnError || !data?.reservations) {
        setStatus('error');
        setError('Napačna koda. Poskusi znova.');
        return;
      }

      setItems(data.reservations as Reservation[]);
      setStatus('unlocked');
    } catch {
      setStatus('error');
      setError('Napaka pri povezavi. Poskusi znova.');
    }
  };

  const confirmDelete = async () => {
    if (!confirmItem) return;
    const id = confirmItem.id;
    setDeletingId(id);
    setDeleteError('');
    try {
      const { data, error: fnError } = await supabase.functions.invoke('get-reservations', {
        body: { code: code.trim(), action: 'delete', id },
      });

      if (fnError || !data?.success) {
        setDeleteError('Brisanje ni uspelo. Poskusi znova.');
        return;
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
      setConfirmItem(null);
    } catch {
      setDeleteError('Brisanje ni uspelo. Poskusi znova.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label="Prejete rezervacije"
        title="Prejete rezervacije"
        className="ml-1 inline-flex h-5 items-center rounded px-1 align-middle text-sm leading-none text-foreground-500/70 transition-colors duration-200 hover:text-accent-300 cursor-pointer"
      >
        <span className="tracking-[0.2em]">...</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 py-10 sm:items-center"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="w-full max-w-2xl rounded-lg border border-background-300/70 bg-background-100"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Prejete rezervacije"
          >
            <div className="flex items-center justify-between border-b border-background-300/60 px-5 py-4">
              <h2 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground-950">
                <i className="ri-calendar-check-line text-accent-300" />
                Prejete rezervacije
              </h2>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Zapri"
                className="flex h-8 w-8 items-center justify-center rounded-md text-foreground-600 transition-colors duration-200 hover:bg-foreground-950/5 hover:text-foreground-950 cursor-pointer"
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>

            <div className="px-5 py-5">
              {status !== 'unlocked' && (
                <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
                  <label
                    htmlFor="res-access-code"
                    className="mb-1.5 block font-label text-xs font-medium text-foreground-700"
                  >
                    Vnesi kodo za dostop
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="res-access-code"
                      type="password"
                      inputMode="numeric"
                      autoComplete="off"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="••••"
                      className="w-full rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 text-center text-base tracking-[0.3em] text-foreground-900 placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/40"
                    />
                    <button
                      type="submit"
                      disabled={status === 'checking'}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-2.5 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 disabled:opacity-60 cursor-pointer"
                    >
                      {status === 'checking' ? (
                        <i className="ri-loader-4-line animate-spin text-base" />
                      ) : (
                        <i className="ri-lock-unlock-line text-base" />
                      )}
                      Odpri
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="mt-3 flex items-start gap-2 rounded-md bg-accent-950/50 p-3 text-sm text-accent-100">
                      <i className="ri-error-warning-line mt-0.5 text-base" />
                      {error}
                    </p>
                  )}
                </form>
              )}

              {status === 'unlocked' && (
                <div>
                  <p className="mb-4 flex items-center gap-2 text-xs text-foreground-600">
                    <i className="ri-checkbox-circle-line text-base text-accent-300" />
                    Skupaj {items.length} {items.length === 1 ? 'rezervacija' : items.length === 2 ? 'rezervaciji' : 'rezervacij'}
                  </p>

                  {deleteError && (
                    <p className="mb-4 flex items-start gap-2 rounded-md bg-accent-950/50 p-3 text-sm text-accent-100">
                      <i className="ri-error-warning-line mt-0.5 text-base" />
                      {deleteError}
                    </p>
                  )}

                  {items.length === 0 ? (
                    <p className="rounded-md border border-background-300/60 bg-background-50 px-4 py-8 text-center text-sm text-foreground-600">
                      Ni še prejetih rezervacij.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="rounded-md border border-background-300/60 bg-background-50 p-4"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                            <span className="font-heading text-sm font-semibold text-foreground-950">
                              {item.name}
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="font-label text-xs text-foreground-500">
                                Prejeto: {formatReceived(item.created_at)}
                              </span>
                              <button
                                type="button"
                                onClick={() => setConfirmItem(item)}
                                aria-label={`Izbriši rezervacijo ${item.name}`}
                                title="Izbriši rezervacijo"
                                className="flex h-7 w-7 items-center justify-center rounded-md text-foreground-500 transition-colors duration-200 hover:bg-accent-950/40 hover:text-accent-200 cursor-pointer"
                              >
                                <i className="ri-delete-bin-line text-base" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground-700">
                            <span className="inline-flex items-center gap-1.5">
                              <i className="ri-calendar-line text-accent-300" />
                              {formatDate(item.reservation_date)} ob {item.reservation_time}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <i className="ri-group-line text-accent-300" />
                              {item.guests} {item.guests === 1 ? 'oseba' : item.guests === 2 ? 'osebi' : item.guests < 5 ? 'osebe' : 'oseb'}
                            </span>
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground-700">
                            <a
                              href={`tel:${item.phone}`}
                              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent-300"
                            >
                              <i className="ri-phone-line text-accent-300" />
                              {item.phone}
                            </a>
                            {item.email && (
                              <a
                                href={`mailto:${item.email}`}
                                className="inline-flex items-center gap-1.5 break-all transition-colors duration-200 hover:text-accent-300"
                              >
                                <i className="ri-mail-line text-accent-300" />
                                {item.email}
                              </a>
                            )}
                          </div>
                          {item.notes && (
                            <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                              <span className="text-foreground-500">Opomba: </span>
                              {item.notes}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          {confirmItem && (
            <div
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4"
              onClick={(e) => {
                e.stopPropagation();
              }}
              role="presentation"
            >
              <div
                className="w-full max-w-sm rounded-lg border border-background-300/70 bg-background-100 p-5"
                role="dialog"
                aria-modal="true"
                aria-label="Potrdi brisanje"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-950/50 text-accent-200">
                    <i className="ri-delete-bin-line text-lg" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground-950">
                      Izbriši rezervacijo?
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground-600">
                      Rezervacija <strong className="text-foreground-900">{confirmItem.name}</strong> ({formatDate(confirmItem.reservation_date)} ob {confirmItem.reservation_time}) bo trajno izbrisana. Tega ni mogoče razveljaviti.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setConfirmItem(null)}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-background-300 bg-background-50 px-4 py-2 font-label text-sm font-medium text-foreground-800 transition-colors duration-200 hover:bg-background-200 cursor-pointer"
                  >
                    Prekliči
                  </button>
                  <button
                    type="button"
                    onClick={confirmDelete}
                    disabled={deletingId !== null}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-4 py-2 font-label text-sm font-medium text-foreground-950 transition-colors duration-200 hover:bg-primary-400 disabled:opacity-60 cursor-pointer"
                  >
                    {deletingId !== null ? (
                      <i className="ri-loader-4-line animate-spin text-base" />
                    ) : (
                      <i className="ri-delete-bin-line text-base" />
                    )}
                    Izbriši
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}