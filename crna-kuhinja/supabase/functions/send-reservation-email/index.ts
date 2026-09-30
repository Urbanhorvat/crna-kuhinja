// Edge Function: send-reservation-email
// Sends a table-reservation notification email to the restaurant via Resend.
// Secrets required: RESEND_API_KEY, RESEND_FROM_DOMAIN

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const RESEND_FROM_DOMAIN = Deno.env.get('RESEND_FROM_DOMAIN');
const NOTIFY_EMAIL = 'crnakuhna.mb@gmail.com';
// Fallback sender: Resend default domain works without verifying a custom domain.
const FROM_ADDRESS = RESEND_FROM_DOMAIN
  ? `Črna Kuhna <noreply@${RESEND_FROM_DOMAIN}>`
  : 'Črna Kuhna <onboarding@resend.dev>';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, max = 500) {
  return String(value ?? '').trim().slice(0, max);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405);
  }

  try {
    const body = await req.json().catch(() => null);

    const name = clean(body?.name, 200);
    const phone = clean(body?.phone, 100);
    const email = clean(body?.email, 200);
    const date = clean(body?.date, 40);
    const time = clean(body?.time, 20);
    const guests = Number(body?.guests) || 0;
    const notes = clean(body?.notes, 500);

    if (!name || !phone || !date || !time || !guests) {
      return json({ error: 'missing_fields' }, 400);
    }

    if (!RESEND_API_KEY) {
      return json({ error: 'email_not_configured' }, 500);
    }

    const from = FROM_ADDRESS;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #1c1c1c; max-width: 560px;">
        <h2 style="margin: 0 0 16px;">Nova rezervacija mize</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; color: #666; width: 140px;">Ime in priimek</td><td style="padding: 6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefon</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">E-pošta</td><td style="padding: 6px 0;">${email ? escapeHtml(email) : '—'}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Datum</td><td style="padding: 6px 0;">${escapeHtml(date)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Ura</td><td style="padding: 6px 0;">${escapeHtml(time)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Število oseb</td><td style="padding: 6px 0;">${guests}</td></tr>
          <tr><td style="padding: 6px 0; color: #666; vertical-align: top;">Opomba</td><td style="padding: 6px 0;">${notes ? escapeHtml(notes) : '—'}</td></tr>
        </table>
      </div>
    `;

    const text = [
      'Nova rezervacija mize',
      `Ime in priimek: ${name}`,
      `Telefon: ${phone}`,
      `E-pošta: ${email || '—'}`,
      `Datum: ${date}`,
      `Ura: ${time}`,
      `Število oseb: ${guests}`,
      `Opomba: ${notes || '—'}`,
    ].join('\n');

    const payload: Record<string, unknown> = {
      from,
      to: [NOTIFY_EMAIL],
      subject: `Nova rezervacija mize — ${name} (${guests} oseb, ${date} ob ${time})`,
      html,
      text,
    };

    if (email) {
      payload.reply_to = email;
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resText = await res.text();
    if (!res.ok) {
      return json({ error: 'send_failed', detail: resText }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ error: 'server_error', detail: String(err) }, 500);
  }
});