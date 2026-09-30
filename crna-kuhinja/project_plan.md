# Črna Kuhna — Spletna stran restavracije

## 1. Project Description

Vrhunska, samozavestna in topla spletna stran za restavracijo **Črna Kuhna** (Vinski Vrh 6, 2275 Miklavž pri Ormožu, Slovenija).

**Pozicioniranje:** neodvisna kulinarična znamka, ki gradi identiteto na ognju v krušni peči, sezonski prleški kuhinji, vinogradih in gostoljubju. Ni generična »rustikalna gostilna«.

**Ciljni uporabniki:** domači gostje iz Prlekije in širše Slovenije, pari in družine za kosilo/večerjo, organizirane skupine, tuji gostje (angleška različica).

**Osnovna vrednost / glavna akcija:** hitra in jasna pot do **rezervacije mize** (spletni rezervacijski sistem, telefon, e-pošta).

**Pomembno pravilo vsebine:** ker pristne fotografije, logotip in gradiva niso bila priložena, stran uporablja **jasno označena mesta za pristne fotografije** (placeholderje). Ne prikazujemo generiranih podob jedi, notranjosti, ekipe ali posestva kot resničnih fotografij Črne Kuhne. Prav tako ne izmišljujemo jedi, cen, sestavin, članov ekipe, nagrad, letnic ali delovnega časa.

## 2. Page Structure

- `/` — Domača stran (Fire & bread oven, seasonal ingredients, signature dishes teaser, wines, space, location, reservation CTA)
- `/jedilnik` — Jedilnik (kategorije, jedi, alergeni, prehranske možnosti, PDF povezava, »Sezonski jedilnik se spreminja« stanje)
- `/rezervacije` — Rezervacije (vgrajen rezervacijski sistem + telefon + e-pošta)
- `/zgodba` — Zgodba (kuhanje v krušni peči, lokalni dobavitelji, portreti ekipe — ko jih lastnik posreduje)
- `/vina` — Vina in Vinski raj Glavinič (hišna vina, zunanje povezave, pokušine)
- `/obisk` — Obisk in kontakt (naslov, zemljevid, navigacija, telefon, e-pošta, delovni čas — ko je potrjen, Instagram)
- `/darilni-boni` — Darilni boni
- `/zasebnost` — Politika zasebnosti
- `/pogoji` — Pogoji uporabe
- `*` — 404

Vse strani so dvojezične (slovenščina kot glavni jezik, angleščina kot popolna različica) s preklopom jezika, ki ohrani isto stran.

## 3. Core Features

- [x] Dvojezičnost SL/EN s preklopom (ohrani trenutno stran)
- [x] Sticky navigacija + mobilni hamburger meni
- [x] Prefinjene scroll animacije (upoštevajo `prefers-reduced-motion`)
- [x] Stalno dosegljiv gumb »Rezerviraj mizo« na mobilnih napravah (ne prekriva vsebine)
- [x] Jasno označena mesta za pristne fotografije
- [ ] Rezervacijski tok prek vgrajenega Booking sistema
- [ ] Jedilnik iz baze (kategorije, jedi, alergeni, prehranske oznake, PDF)
- [ ] Upravljanje vsebine (jedilnik, urnik, obvestila, kontakt) prek Readdy Backend
- [ ] Obvestilo o prazničnem urniku / zaprti družbi
- [ ] Darilni boni
- [ ] SEO + strukturirani podatki za restavracijo, družbeno deljenje
- [ ] Pravne strani (zasebnost, pogoji)

## 4. Data Model Design

(Readdy Backend / baza pripravljena v Fazi 2+)

### Table: menu_categories
| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| name_sl / name_en | TEXT | Ime kategorije |
| sort_order | INT | Vrstni red |

### Table: menu_items
| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| category_id | BIGINT | FK -> menu_categories |
| name_sl / name_en | TEXT | Ime jedi |
| description_sl / description_en | TEXT | Kratek opis |
| price | NUMERIC | Cena (samo če jo restavracija potrdi) |
| allergens | TEXT[] | Alergeni (potrjeni) |
| dietary | TEXT[] | Vegetarijansko / brez glutena (samo ko potrjeno) |
| sort_order | INT | Vrstni red |

### Table: site_notices
| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| message_sl / message_en | TEXT | Obvestilo |
| active | BOOLEAN | Prikazano ali ne |
| starts_at / ends_at | TIMESTAMPTZ | Obdobje veljavnosti |

### Table: site_hours
| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| day_of_week | INT | 0–6 |
| opens / closes | TEXT | Urnik (potrjen) |
| note_sl / note_en | TEXT | Opomba |

### Table: site_content
| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| key | TEXT | Ključ vsebine |
| value_sl / value_en | TEXT | Besedilo |

## 5. Backend / Third-party Integration Plan

- **Database:** Readdy Backend — povezano. Vsebinske tabele se ustvarijo v Fazi 2.
- **Rezervacije:** lastni obrazec shranjuje rezervacije v tabelo `reservations` (Readdy Backend) in pošilja e-poštno obvestilo prek Resend Edge Function.
- **Resend (e-pošta):** povezano prek Resend Edge Function; pošiljanje uporablja privzeto domeno `@resend.dev`, dokler ni potrjena lastna domena.
- **Shopify / Stripe / PayPal / Toss / Square:** niso potrebni.

## 6. Development Phase Plan

### Phase 1: Temelj + Domača stran
- **Cilj:** oblikovni sistem (paleta, tipografija), dvojezičnost, skupna postavitev in popolna domača stran.
- **Rezultat:** dvojezična domača stran z navigacijo, footerjem, stalnim gumbom za rezervacijo in mesti za fotografije.

### Phase 2: Jedilnik
- **Cilj:** pregleden, z bazo podprt jedilnik.
- **Rezultat:** tabele `menu_categories` / `menu_items`, stran `/jedilnik` z stanjem »Sezonski jedilnik se spreminja« in PDF povezavo.

### Phase 3: Rezervacije
- **Cilj:** najpomembnejša funkcija — hitra rezervacija mize.
- **Rezultat:** stran `/rezervacije` z vgrajenim rezervacijskim sistemom, telefonom in e-pošto.

### Phase 4: Zgodba, Vina, Obisk
- **Cilj:** vsebinske strani z zgodbo, vini Glavinič in informacijami za obisk.
- **Rezultat:** strani `/zgodba`, `/vina`, `/obisk` z zemljevidom in navigacijo.

### Phase 5: Darilni boni
- **Cilj:** dodatna komercialna vsebina.
- **Rezultat:** stran `/darilni-boni` z možnostjo povpraševanja.

### Phase 6: Pravno, SEO in zaključni pregled
- **Cilj:** zaupanje, najdljivost in kakovost.
- **Rezultat:** `/zasebnost`, `/pogoji`, strukturirani podatki, dostopnost, zaključni pregled.

### Opcijske različice naslovnega slogana (za izbiro lastnika)
1. **(glavni, izbran)** »Iz ognja. Iz Prlekije. Za skupno mizo.«
2. (umirjena) »Kjer se ogenj, sezona in Prlekija srečajo za mizo.«
3. (umirjena) »Sezonska prleška kuhinja iz krušne peči.«