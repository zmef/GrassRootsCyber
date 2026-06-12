# Grass Roots Cyber — Marketing Playbook

**Version 1.0 · June 2026**

## The strategy in one sentence

We don't advertise — we garden in public, and the garden is the ad.

A volunteer nonprofit can't out-spend anyone, but it can out-genuine everyone. Every tactic below converts something we'd do anyway (run the org, fix things, teach people) into visible, shareable proof of who we are. The marketing budget is roughly zero dollars and a few hours a month, by design.

## Launch story: "We hacked ourselves first"

The original membership automation had a shell injection vulnerability — anyone could open a GitHub issue and run arbitrary code with the org's access token. We found it, fixed it, and published the diff. That's the launch post, and it's a better one than any mission statement: a cybersecurity nonprofit demonstrating vulnerability disclosure, in public, on itself, with humility and a working patch.

Run it as a short writeup ("Our signup form could have pwned us. Here's the fix.") posted to LinkedIn, the Fediverse, and Nostr, linking to the actual commit. It demonstrates competence, transparency, and the no-fear voice all at once, and it gives security-minded people a reason to respect the org on day one. This is the single highest-leverage piece of content available right now.

## The flagship growth engine: Patch Parties at libraries

Public libraries are the perfect host: free rooms, built-in event calendars, an audience that already trusts the institution, and a mission overlap so strong it's almost unfair. Pitch Metamora, Washington, Morton, and the Peoria library systems on a monthly "Patch Party: bring your device, leave it safer." The library's own newsletter and event calendar become the distribution channel — that's free, credible local marketing that no ad budget can buy.

Each Patch Party generates its own content cycle: announce it, run it, then publish a short "harvest report" (devices patched, passwords managed, questions asked) to social channels. Numbers from real events beat any slogan.

A second venue worth testing seasonally: a farmers market booth. "Grass Roots Cyber" at a farmers market is the brand made physical, and the foot traffic is exactly the audience — regular people, not techies.

## The physical artifact: seed packets

Print actual seed-packet-styled handouts (the website's join card is the design). Front: the GRC-001 "Digital Resilience" specimen art. Back: five plain-language security steps anyone can do this week, plus a QR code to the site. Optionally tuck real marigold seeds inside — the brand story ("marigolds repel pests; so does this checklist") makes it unforgettable, and it costs pennies.

Leave them at libraries, coffee shops, and the farmers market booth. A seed packet survives on a corkboard for months; a flyer gets thrown away in a day.

## Decentralized-web native presence

This org should live where its values live, and Zac already has roots there:

- **Nostr:** publish Field Notes as long-form notes; offer members the option to sign the Statement with their Nostr key (the membership doc already permits cryptographic signatures — lean into it as a differentiator no other community org has). A members' relay running tinyrelay is a future flex: "our nonprofit runs its own relay on a free-tier VM, here's the repo."
- **Fediverse:** an org account that posts harvest reports and Field Notes, and actually replies to people. The Fediverse rewards orgs that behave like members, not broadcasters.
- **LinkedIn:** the professional face. The vulnerability-disclosure launch post, partnership announcements with libraries, and the occasional "what running a nonprofit in a public Git repo teaches you" essay. This also cross-pollinates with the Sincere Partners agentic-search work — GRC becomes a living case study in open-web authority building.

## Agentic search & open-web discoverability

Treat the site as a demonstration of modern discoverability done right: schema.org NGO markup (already in the new index.html), an `llms.txt` describing the org for AI agents, plain semantic HTML that any crawler or agent can parse, and the founding docs in clean markdown at stable URLs. When someone asks an AI assistant "are there community cybersecurity groups near Peoria," GRC should be the answer — and the techniques that make that happen are themselves publishable content for the Sincere Partners Experiment. The nonprofit and the consultancy feed each other without either compromising the other.

## The signature wall as social proof engine

The garden plot grid turns each new member into a small public event. Make joining ceremonial: every new signature gets a welcome comment from the bot, a plot on the site, and a mention in the next Field Notes dispatch. People share things that have their name on them. Aim the early energy at getting the roll from 3 signatures to 25 — at 25 visible plots, the garden stops looking like a founder's project and starts looking like a movement.

## What we deliberately don't do

No fear-based messaging, ever — it's the competitor's whole identity and abandoning it is our positioning. No paid ads for now; if a small budget materializes later, the only justified spend is boosting Patch Party announcements to zip codes around the hosting library. No engagement-bait, no breaking-news threat commentary, no vendor partnerships that compromise the FLOSS commitment.

## First 30 days

Week 1: deploy the new site to GitHub Pages, merge the secure workflow, publish the "we hacked ourselves first" post everywhere.
Week 2: pitch two libraries on a Patch Party; set up the org Fediverse and Nostr identities.
Week 3: design and print the first seed packet run; draft Field Notes #1.
Week 4: run the first Patch Party; publish the harvest report; personally invite ten people to plant their signature.
