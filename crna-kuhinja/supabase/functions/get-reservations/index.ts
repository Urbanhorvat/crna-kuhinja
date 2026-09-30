// Edge Function: get-reservations
// Returns received table reservations, but only when the caller provides the
// correct access code. The code is verified here (server-side) so it is never
// exposed to the browser. Uses the service role key to read the protected
// reservations table.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ACCESS_CODE = '1324';

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405);
  }

  try {
    const body = await req.json().catch(() => null);
    const code = String(body?.code ?? '').trim();
    const action = String(body?.action ?? 'list');

    if (!code || code !== ACCESS_CODE) {
      return json({ error: 'invalid_code' }, 401);
    }

    const url = Deno.env.get('SUPABASE_URL');
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!url || !serviceKey) {
      return json({ error: 'server_not_configured' }, 500);
    }

    const admin = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    if (action === 'delete') {
      const id = Number(body?.id);
      if (!id || Number.isNaN(id)) {
        return json({ error: 'invalid_id' }, 400);
      }

      const { error: delError } = await admin
        .from('reservations')
        .delete()
        .eq('id', id);

      if (delError) {
        return json({ error: 'delete_failed', detail: delError.message }, 500);
      }

      return json({ success: true, id });
    }

    const { data, error } = await admin
      .from('reservations')
      .select('id, name, phone, email, reservation_date, reservation_time, guests, notes, status, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      return json({ error: 'fetch_failed', detail: error.message }, 500);
    }

    return json({ reservations: data ?? [] });
  } catch (err) {
    return json({ error: 'server_error', detail: String(err) }, 500);
  }
});
