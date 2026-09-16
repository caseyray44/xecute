import Link from "next/link"
import {
  ArrowRight,
  Check,
  ClipboardList,
  MessageSquareText,
  Moon,
  PhoneOff,
  Sunrise,
  Users,
} from "lucide-react"

export const LINKS = {
  signup: "https://sam.xecutetech.ai/signup",
  login: "https://sam.xecutetech.ai/login",
  demo: "https://calendly.com/xecutetech-support/ops-crm-strategy-call",
  support: "mailto:support@xecutetech.com",
  assistantSms: "sms:+19498286231",
  terms: "https://www.xecutetech.ai/Terms%20and%20Conditions%20-%20Xecute.pdf",
  privacy: "https://www.xecutetech.ai/Privacy%20Policy%20-%20Xecute.pdf",
}

/** Paste the VSL embed URL here (YouTube "embed" link, Vimeo player link, or Loom embed). Empty = section hidden. */
export const VSL_URL = ""

const PRICE_LINE = "$297 a month. No contract. Cancel any time."

/*
  Palette (matches the live xecutetech site): slate-950 ground, slate-900 panels,
  white headings, slate-300 body, emerald-to-teal gradient for the brand accent,
  amber-400 as the one fresh spark (numbers, the badge, the eyebrow dot).
*/
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-300 hover:to-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
const BTN_GHOST =
  "inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
const GRAD_TEXT = "bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
const CARD = "rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm"

/* ---------- Nav ---------- */

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 text-base font-extrabold text-slate-950" aria-hidden="true">S</span>
          Sam <span className="ml-0.5 text-xs font-medium text-slate-500">by Xecute</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#proof" className="hover:text-white">Results</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">Questions</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={LINKS.login} className="hidden h-10 items-center px-3 text-sm font-medium text-emerald-400 hover:text-emerald-300 sm:inline-flex">
            Log in
          </a>
          <a href={LINKS.signup} className={`${BTN_PRIMARY} h-10 px-4 text-sm`}>
            Get Sam <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ---------- Text thread (real conversations, names and streets changed) ---------- */

type Line = { who: "sam" | "them" | "note"; text: string; time?: string }

function Bubble({ who, children, time }: { who: "sam" | "them" | "note"; children: React.ReactNode; time?: string }) {
  if (who === "note") {
    return (
      <div className="my-1 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-amber-300">
        <span className="h-px flex-1 bg-slate-800" aria-hidden="true" />
        <span>{children}</span>
        <span className="h-px flex-1 bg-slate-800" aria-hidden="true" />
      </div>
    )
  }
  const sam = who === "sam"
  return (
    <div className={`flex flex-col ${sam ? "items-start" : "items-end"}`}>
      <div
        className={
          sam
            ? "max-w-[88%] rounded-2xl rounded-bl-md bg-slate-800 px-3.5 py-2.5 text-[15px] leading-snug text-slate-100"
            : "max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-2.5 text-[15px] font-medium leading-snug text-slate-950"
        }
      >
        {children}
      </div>
      {time ? <span className="mt-1 px-1 text-[11px] text-slate-500">{time}</span> : null}
    </div>
  )
}

function Thread({ title, lines, footer }: { title: string; lines: Line[]; footer?: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950">
      <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-sm font-bold text-slate-950">S</div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-slate-500">Text message</div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 px-3.5 py-4">
        {lines.map((l, i) => (
          <Bubble key={i} who={l.who} time={l.time}>{l.text}</Bubble>
        ))}
      </div>
      {footer ? <div className="border-t border-slate-800 bg-slate-900 px-4 py-3 text-xs text-slate-300">{footer}</div> : null}
    </div>
  )
}

/* The hero thread: a regulars check-in. Sam sets his own callback. Real, name and street changed. */
const HERO_THREAD: Line[] = [
  { who: "note", text: "July 28" },
  { who: "sam", text: "Hey Robin! How dirty are those windows at your place down Lakeview Court?", time: "1:35 PM" },
  { who: "them", text: "Who is this?", time: "2:12 PM" },
  { who: "sam", text: "It’s Sam at Northline. Asked cause it’s been about a year since we were out last. How are those windows holdin up?" },
  { who: "them", text: "Going to wait till October this year. Please check back 🙂", time: "4:37 PM" },
  { who: "sam", text: "Perfect, I’ll check in with you early October then. Enjoy the rest of summer!" },
  { who: "them", text: "👍" },
  { who: "note", text: "October 1 · the follow-up Sam set for himself" },
  { who: "sam", text: "Hey Robin, Sam at Northline. October’s here like you asked. Want me to get the crew out for those windows this month?", time: "9:02 AM" },
]

function PhoneThread() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-500/25 via-teal-500/10 to-amber-400/15 blur-3xl" aria-hidden="true" />
      <div className="rounded-[2.25rem] border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/60">
        <Thread
          title="Sam · Northline Window Cleaning"
          lines={HERO_THREAD}
          footer={<span className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" /><span><span className="font-medium text-white">Sam set the October follow-up himself,</span> the day she asked. Nobody on the crew had to remember.</span></span>}
        />
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">A real conversation. Name, street and company changed.</p>
    </div>
  )
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
        <div className="motion-safe:animate-fade-in-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
            <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
            For any home service business
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            A sales rep who <span className={GRAD_TEXT}>texts your customers.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            <span className="font-semibold text-white">Your customer list is sitting there.</span> Sam texts the ones who went quiet, follows up on every estimate you send, and gets the yes. He sets his own follow-ups. You read every word.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={LINKS.signup} className={`${BTN_PRIMARY} h-12 px-6 text-base`}>
              Get Sam <ArrowRight className="h-4 w-4" />
            </a>
            <a href={LINKS.demo} className={`${BTN_GHOST} h-12 px-6 text-base`}>
              Book a 15-minute walkthrough
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-amber-300">{PRICE_LINE}</p>
          <p className="mt-1 text-sm text-slate-400">Sam runs on Markate. Not on it yet? We set it up and move your customers over for you.</p>
        </div>
        <div className="motion-safe:animate-fade-in">
          <PhoneThread />
        </div>
      </div>
    </section>
  )
}

/* ---------- VSL ---------- */

export function Vsl() {
  if (!VSL_URL) return null
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
        <div className="aspect-video w-full">
          <iframe src={VSL_URL} title="How Sam works" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-slate-400">Two minutes. What Sam does, what you do, what it costs.</p>
    </section>
  )
}

/* ---------- Proof: numbers + real conversations ---------- */

const STATS = [
  { value: "71%", label: "of the customers Sam texted wrote back" },
  { value: "$150,000", label: "closed in one month for one business" },
  { value: "294", label: "people reached in the first season" },
]

const THREADS: { title: string; caption: string; lines: Line[] }[] = [
  {
    title: "The estimate nobody answered",
    caption: "Sent Tuesday. Sam checked in the next Monday. Closed at $1,298.",
    lines: [
      { who: "sam", text: "Hope the week’s going smooth. Just wanted to make sure you’re all set on the staining plan we put together. Happy to answer anything on the front door, the deck work, or those railings. You don’t owe me a reason either way, just didn’t want you stuck wondering about something I could knock out now.", time: "Mon 12:00 PM" },
      { who: "them", text: "Hey Sam. Everything is going well. I think I will get some of the project signed off by tomorrow. I’ll keep you posted. Sorry for the delay in getting back to you.", time: "7:41 PM" },
      { who: "sam", text: "No worries at all! Glad it’s moving. Just to confirm. You thinking the whole thing (front door, front deck, back deck rails) or starting with part of it?" },
      { who: "them", text: "It will more than likely be the front deck and door." },
      { who: "sam", text: "Perfect, the front deck and door is $1,298 all in. When you’re ready to lock it in, open the link, check the box next to Front Deck and Front Door, and hit Accept & Sign at the top. Takes a few seconds and you’re booked." },
    ],
  },
  {
    title: "Lost the windows, kept the customer",
    caption: "Another quote came in 30% lower. Sam didn’t argue. Her deck is on his calendar for spring.",
    lines: [
      { who: "sam", text: "No rush at all on my end Pam, totally get it if things got busy. The deck washing came up when I was out there. That lichen’s rooted in pretty good, we can pull most of it but figured you’d want the honest read on what to expect. Anything you want me to run down on the deck work or the passes while you think it over?", time: "Tue 11:15 AM" },
      { who: "them", text: "I just got another quote in for windows at 30percent less. I’ll take the lesser one but would like you to do my deck cleaning. I’ll wait til next early spring for that. Thank you.", time: "1:34 PM" },
      { who: "sam", text: "Gotcha, appreciate the straight answer. Just so I’m clear. Are you saying you want to pass on the windows for now and circle back next spring for just the deck cleaning, or did you want to lock in the deck now for a spring visit?" },
      { who: "them", text: "I’ll do it next spring. I put your name and number in my calendar" },
      { who: "sam", text: "Perfect, no worries at all. Appreciate you considering us, anytime down the road just reach out. And hey, give Daisy a scratch from us." },
    ],
  },
  {
    title: "Knows when to stop",
    caption: "No sale today. A customer who likes us and a check-in next spring.",
    lines: [
      { who: "sam", text: "Hey Kyle! How dirty are those windows at your place down Birch Lane?", time: "9:50 AM" },
      { who: "them", text: "Depends who’s asking haha", time: "10:56 AM" },
      { who: "sam", text: "It’s Sam at Northline. Asked cause it’s been about a year since we were out last. Figured they might be getting grimy again by now, how’re they looking?" },
      { who: "them", text: "My wife actually tried her hand at cleaning them last month and hasn’t complained to me about them yet so I think we might be ok this year. Thanks for reaching out though Sam!" },
      { who: "sam", text: "Ha, respect to her for going after them herself! Totally understand. Mind if I check back with you guys next spring when they’re due again?" },
      { who: "them", text: "Perfectly fine by me!" },
    ],
  },
]

export function Proof() {
  return (
    <section id="proof" className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.value} className="text-center sm:text-left">
              <div className="text-4xl font-bold tracking-tight text-amber-400 tabular-nums sm:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">From the first business running Sam. Your numbers depend on your list.</p>

        <div className="mt-14 max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Real conversations.</h2>
          <p className="mt-3 text-lg text-slate-300">Real texts from one business’s phone. Names, streets and the company changed, nothing else.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {THREADS.map((t) => (
            <div key={t.title}>
              <Thread title={t.title} lines={t.lines} />
              <p className="mt-3 px-1 text-sm text-slate-400"><span className="text-amber-300">{t.caption.split(".")[0]}.</span>{t.caption.slice(t.caption.indexOf(".") + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- How it works ---------- */

const STEPS = [
  {
    title: "Teach Sam your business",
    body: "Your services, your prices, how you talk to people. He never makes anything up. If he doesn’t know, he asks you.",
  },
  {
    title: "Sam texts. He sets his own follow-ups.",
    body: "Quiet customers, unanswered estimates, the seasonal push. Sam decides who, when, and what to say, and books his own callbacks. You read every conversation and jump in whenever you want.",
  },
  {
    title: "The yes lands in your lap",
    body: "When a customer says yes, the estimate is accepted in Markate and Sam texts you and the office: who, what, how much. You schedule it. Sam stops texting the moment it’s signed, because he saw it happen.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-lg text-slate-300">One afternoon to set up. Then Sam runs every day.</p>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-base font-bold text-slate-950 tabular-nums">1</div>
          <h3 className="text-2xl font-bold text-white">Give Sam your customers</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className={`${CARD} p-7`}>
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-300">On Markate?</div>
            <div className="mt-2 text-2xl font-bold text-white">Connect it. Ten minutes.</div>
            <p className="mt-2 leading-relaxed text-slate-300">Sam reads your customers and estimates straight from Markate, and sees every accept the moment it happens. That’s how he knows when to talk and when to stop.</p>
          </div>
          <div className={`${CARD} p-7`}>
            <div className="text-xs font-semibold uppercase tracking-wide text-amber-300">Not on Markate yet?</div>
            <div className="mt-2 text-2xl font-bold text-white">We move you.</div>
            <p className="mt-2 leading-relaxed text-slate-300">Housecall Pro, ServiceTitan, Jobber, QuickBooks, a spreadsheet. We set up your Markate account and import your customers for you. Then Sam goes to work.</p>
            <a href={LINKS.demo} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">Book the 15-minute call <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className={`${CARD} p-7`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-base font-bold text-slate-950 tabular-nums">{i + 2}</div>
            <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-300">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- What Sam does ---------- */

const JOBS = [
  { icon: Moon, title: "Brings back quiet customers", body: "Everyone who used you once and never came back. Sam picks the right ones, at the right time of year, and texts them like he remembers them." },
  { icon: ClipboardList, title: "Follows up on every estimate", body: "Sent an estimate and heard nothing? Sam follows up, answers questions, and gets the yes." },
  { icon: MessageSquareText, title: "Books from a text", body: "The customer says yes, picks what they want, and it’s done. No link chasing, no phone tag." },
  { icon: Users, title: "Works with your team", body: "Your reps text Sam like a coworker. “Who’s on the Reyes job?” He answers, or gets the right person." },
  { icon: PhoneOff, title: "Knows when to stop", body: "Never texts a landline, a dead number, or anyone who said no. One reply of “stop” and he stops for good." },
  { icon: Sunrise, title: "Reports every morning", body: "People texted, who replied, what booked, what needs a human. One short message, before your coffee." },
]

export function WhatSamDoes() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">What Sam does all day</h2>
          <p className="mt-3 text-lg text-slate-300">The follow-up work nobody on your crew has time for.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map(({ icon: Icon, title, body }) => (
            <div key={title} className={`${CARD} p-6 transition-colors hover:border-emerald-500/40`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Pricing ---------- */

const SAM_PLAN = [
  "Brings back quiet customers",
  "Follows up on every estimate",
  "Books straight from the text",
  "Your whole team can text him",
  "Morning report, every day",
  "No contract. Cancel any time.",
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Pricing</h2>
        <p className="mt-3 text-lg text-slate-300">One number. Less than one job a month, for most businesses.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative flex flex-col rounded-2xl border border-emerald-400/60 bg-slate-900 p-8 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-400/30">
          <div className={`text-sm font-semibold ${GRAD_TEXT}`}>Sam</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-5xl font-bold tracking-tight text-white tabular-nums">$297</span>
            <span className="text-base text-slate-400">a month</span>
          </div>
          <p className="mt-3 text-sm font-medium text-amber-300">Runs on Markate. Not on it yet? We set it up and import your customers for you.</p>
          <ul className="mt-6 grid gap-2.5 text-sm text-slate-100 sm:grid-cols-2">
            {SAM_PLAN.map((f) => (
              <li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />{f}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={LINKS.signup} className={`${BTN_PRIMARY} h-12 px-6 text-base`}>Get Sam <ArrowRight className="h-4 w-4" /></a>
            <a href={LINKS.demo} className={`${BTN_GHOST} h-12 px-6 text-base`}>Book a walkthrough</a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Invite-only for now. We bring on a few businesses at a time so every Sam is taught right.</p>
        </div>
        <div className="flex flex-col rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8">
          <div className="text-sm font-semibold text-slate-400">Sam on the phone</div>
          <div className="mt-3 text-4xl font-bold tracking-tight text-slate-500">Soon</div>
          <p className="mt-3 text-sm text-slate-300">Sam answers the line when you can’t. Takes the message, gets the yes, texts you the summary. Same voice, same manners.</p>
          <a href={LINKS.support + "?subject=Sam%20on%20the%20phone"} className="mt-auto inline-flex items-center justify-center pt-8">
            <span className={`${BTN_GHOST} h-11 w-full text-sm font-semibold`}>Tell me when it’s ready</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */

const FAQ = [
  {
    q: "Does Sam sound like a robot?",
    a: "No. Read the conversations above. Short, friendly, first names, no scripts. Customers reply to him like a person because he reads like one. You can read every conversation.",
  },
  {
    q: "Will he ever quote a price or promise something wrong?",
    a: "He only uses the services, prices, and rules you taught him. If a customer asks something he wasn’t taught, he says he’ll check and hands it to you. He does not make things up.",
  },
  {
    q: "Do I need Markate?",
    a: "Yes. Sam reads your customers and estimates from Markate and sees every accept the moment it happens, which is how he knows when to keep talking and when to stop. Not on Markate yet? Book the call. We set up your account and import your customers for you, usually the same week.",
  },
  {
    q: "Does Sam schedule jobs?",
    a: "No. He gets the yes and hands it to you or your office with who, what, and how much. Scheduling stays in your hands and in your system. What he schedules is himself: every callback, every follow-up, on his own.",
  },
  {
    q: "What if a customer says stop?",
    a: "He stops, for good. He also never texts landlines, disconnected numbers, or anyone you’ve marked inactive.",
  },
  {
    q: "Can my crew use it too?",
    a: "Yes. Your reps text Sam from their own phones, ask about jobs, and get pulled in when a customer asks for a human. Commission on accepted estimates stays with the rep who sent them.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Questions people ask first</h2>
        <div className="mt-10 divide-y divide-slate-800 border-y border-slate-800">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-left text-lg font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                {item.q}
                <span className="shrink-0 text-emerald-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Final call ---------- */

export function FinalCall() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-900 px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.18),transparent_65%)]" aria-hidden="true" />
        <h2 className="relative text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Give Sam a season with your list.</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-lg text-slate-300">Every customer who went quiet, every estimate nobody answered. <span className="text-amber-300">{PRICE_LINE}</span></p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={LINKS.signup} className={`${BTN_PRIMARY} h-12 px-6 text-base`}>
            Get Sam <ArrowRight className="h-4 w-4" />
          </a>
          <a href={LINKS.demo} className={`${BTN_GHOST} h-12 px-6 text-base`}>
            Book a walkthrough
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-teal-400 text-sm font-extrabold text-slate-950" aria-hidden="true">S</span>
              Sam
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-400">A sales rep who texts your customers. Made by Xecute.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Sam</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#how" className="hover:text-emerald-400">How it works</a></li>
              <li><a href="#proof" className="hover:text-emerald-400">Real conversations</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400">Pricing</a></li>
              <li><a href={LINKS.login} className="hover:text-emerald-400">Log in</a></li>
              <li><a href={LINKS.signup} className="hover:text-emerald-400">Sign up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href={LINKS.demo} className="hover:text-emerald-400">Book a walkthrough</a></li>
              <li><a href={LINKS.support} className="hover:text-emerald-400">support@xecutetech.com</a></li>
              <li><a href={LINKS.assistantSms} className="hover:text-emerald-400">Text us: (949) 828-6231</a></li>
              <li><a href={LINKS.terms} className="hover:text-emerald-400">Terms and Conditions</a></li>
              <li><a href={LINKS.privacy} className="hover:text-emerald-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">© 2026 Xecute. All rights reserved.</div>
      </div>
    </footer>
  )
}
