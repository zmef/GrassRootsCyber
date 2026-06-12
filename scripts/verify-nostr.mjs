// scripts/verify-nostr.mjs
// Verifies a signed Nostr event for Grass Roots Cyber membership.
//
// Input:  NOSTR_EVENT env var containing the event JSON.
// Output: on success, prints {"npub": ..., "date": ..., "id": ...} to stdout.
// Exits non-zero with a message on any failure.
//
// Checks performed:
//   1. Valid JSON with the required fields of a Nostr event.
//   2. Schnorr signature verifies against the event id and pubkey
//      (nostr-tools recomputes the id from the serialized event, so a
//      tampered content/pubkey/created_at also fails here).
//   3. Event content references the Statement of Organization, so the
//      signature is bound to *this* document, not just any note.

import { verifyEvent, nip19 } from "nostr-tools";

const raw = process.env.NOSTR_EVENT;
if (!raw) {
  console.error("No NOSTR_EVENT provided.");
  process.exit(1);
}

let ev;
try {
  ev = JSON.parse(raw);
} catch {
  console.error("Event is not valid JSON.");
  process.exit(1);
}

for (const field of ["id", "pubkey", "sig", "content", "created_at", "kind"]) {
  if (!(field in ev)) {
    console.error(`Event is missing required field: ${field}`);
    process.exit(1);
  }
}

if (!verifyEvent(ev)) {
  console.error("Schnorr signature verification FAILED. This event was not signed by the claimed key.");
  process.exit(1);
}

const mustReference = /statement of organization/i;
if (!mustReference.test(ev.content)) {
  console.error("Event content does not reference the Statement of Organization.");
  process.exit(1);
}

const date = new Date(ev.created_at * 1000).toISOString().slice(0, 10);
process.stdout.write(
  JSON.stringify({
    npub: nip19.npubEncode(ev.pubkey),
    date,
    id: ev.id,
  })
);
