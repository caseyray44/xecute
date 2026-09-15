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
  signup: "https://www.xecutetech.ai/signup",
  login: "https://www.xecutetech.ai/login",
  pricing: "https://www.xecutetech.ai/pricing",
  features: "https://www.xecutetech.ai/features",
  demo: "https://calendly.com/xecutetech-support/ops-crm-strategy-call",
  support: "mailto:support@xecutetech.com",
  assistantSms: "sms:+19498286231",
  terms: "https://www.xecutetech.ai/Terms%20and%20Conditions%20-%20Xecute.pdf",
  privacy: "https://www.xecutetech.ai/Privacy%20Policy%20-%20Xecute.pdf",
}

const OFFER = "Free until he closes your first job. Then $297 a month, Xecute included."

/* ---------- Nav ---------- */

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
          <img src="/xecute-mark.png" alt="" width={28} height={28} className="h-7 w-7 rounded-md" />
          Xecute
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600 dark:text-slate-300">
          <a href="#how" className="hover:text-slate-900 dark:hover:text-white">How it works</a>
          <a href="#proof" className="hover:text-slate-900 dark:hover:text-white">Results</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 dark:hover:text-white">Questions</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={LINKS.login} className="hidden sm:inline-flex h-10 items-center px-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">
            Log in
          </a>
          <a href={LINKS.signup} className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Get Sam <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */

function Bubble({ who, children, time }: { who: "sam" | "them"; children: React.ReactNode; time?: string }) {
  const sam = who === "sam"
  return (
    <div className={`flex flex-col ${sam ? "items-start" : "items-end"}`}>
      <div
        className={
          sam
            ? "max-w-[85%] rounded-2xl rounded-bl-md bg-slate-100 dark:bg-slate-800 px-3.5 py-2.5 text-[15px] leading-snug text-slate-900 dark:text-slate-100"
            : "max-w-[85%] rounded-2xl rounded-br-md bg-emerald-500 px-3.5 py-2.5 text-[15px] leading-snug text-white"
        }
      >
        {children}
      </div>
      {time ? <span className="mt-1 px-1 text-[11px] text-slate-400">{time}</span> : null}
    </div>
  )
}

function PhoneThread() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-200/60 via-transparent to-blue-200/50 dark:from-emerald-500/15 dark:to-blue-500/15 blur-2xl" aria-hidden="true" />
      <div className="rounded-[2.25rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
        <div className="rounded-[1.75rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">S</div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Sam · Northline Window Cleaning</div>
              <div className="text-xs text-slate-500">Text message</div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 px-3.5 py-4">
            <Bubble who="sam" time="9:14 AM">
              Hi Dana, it’s Sam with Northline Window Cleaning. We did your windows back in May. Want the same crew out before the holidays? I can hold Tuesday the 3rd.
            </Bubble>
            <Bubble who="them" time="9:41 AM">Yes please. Can you do the gutters too?</Bubble>
            <Bubble who="sam">Can do. Windows and gutters together is $340. Same Tuesday, morning slot?</Bubble>
            <Bubble who="them">Perfect.</Bubble>
            <Bubble who="sam" time="9:43 AM">Booked. The office will send your confirmation in a minute. Thanks Dana.</Bubble>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3">
            <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              <span><span className="font-medium text-slate-900 dark:text-white">To the office:</span> Dana Reyes booked windows + gutters, Tue Nov 3, $340. Estimate accepted in Markate.</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Example conversation. Sam only quotes prices and services you taught him.</p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
        <div className="motion-safe:animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            For businesses on Markate or Jobber
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.5rem]">
            A sales rep who texts your customers.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Sam works your customer list, brings back the ones who went quiet, follows up on every estimate, and books the job. You approve. He does the rest.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={LINKS.signup} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-base font-semibold text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              Get Sam <ArrowRight className="h-4 w-4" />
            </a>
            <a href={LINKS.demo} className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2">
              Book a 15-minute walkthrough
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-700 dark:text-slate-300">{OFFER}</p>
          <p className="mt-1 text-sm text-slate-500">Cancel any time and keep every customer he found.</p>
        </div>
        <div className="motion-safe:animate-fade-in">
          <PhoneThread />
        </div>
      </div>
    </section>
  )
}

/* ---------- Proof ---------- */

const STATS = [
  { value: "49%", label: "of customers Sam texted wrote back" },
  { value: "$150,000", label: "booked from customers who had gone quiet" },
  { value: "294", label: "people reached in the first season" },
]

export function Proof() {
  return (
    <section id="proof" className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.value} className="text-center sm:text-left">
              <div className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white tabular-nums">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-500">From the first window-cleaning business running Sam, one season, one customer list. Your numbers depend on your list.</p>
      </div>
    </section>
  )
}

/* ---------- How it works ---------- */

const STEPS = [
  {
    title: "Connect your CRM",
    body: "Markate or Jobber. Sam reads your customers and estimates the same way your office does. About ten minutes.",
  },
  {
    title: "Teach Sam your business",
    body: "Your services, your prices, how you talk to people. He never makes anything up. If he doesn’t know, he asks you.",
  },
  {
    title: "Sam texts. You approve.",
    body: "Quiet customers, unanswered estimates, the seasonal push. Every morning you see who he wants to reach. One tap and he goes.",
  },
  {
    title: "Jobs land in your CRM",
    body: "Estimates get accepted, work orders get created, your reps keep their commission. The office gets a text when something books.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">Four steps. The first two take an afternoon. The last two run every day.</p>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-base font-semibold text-white tabular-nums">{i + 1}</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- What Sam does ---------- */

const JOBS = [
  { icon: Moon, title: "Brings back quiet customers", body: "Everyone who used you once and never came back. Sam picks the right ones, at the right time of year, and texts them like he remembers them." },
  { icon: ClipboardList, title: "Follows up on every estimate", body: "Sent an estimate and heard nothing? Sam follows up on a schedule you set, answers questions, and gets the yes." },
  { icon: MessageSquareText, title: "Books from a text", body: "The customer says yes, picks what they want, and it’s accepted in your CRM. No link chasing, no phone tag." },
  { icon: PhoneOff, title: "Knows when to stop", body: "Never texts a landline, a dead number, or anyone who said no. One reply of “stop” and he stops for good." },
  { icon: Users, title: "Works with your team", body: "Your reps text Sam like a coworker. “Who’s on the Reyes job?” “Push Tuesday to Thursday.” He answers, or gets the right person." },
  { icon: Sunrise, title: "Reports every morning", body: "People texted, who replied, what booked, what needs a human. One short message, before your coffee." },
]

export function WhatSamDoes() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">What Sam does all day</h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">The follow-up work nobody on your crew has time for.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Xecute ---------- */

const XECUTE_FEATURES = [
  "Create tasks, expenses, and invoices from a text",
  "Manage customers and leads without opening a laptop",
  "A smart assistant on your phone that knows your business",
  "Syncs with Markate or Jobber, so nothing gets typed twice",
]

const XECUTE_DAY: [string, string][] = [
  ["7:05 AM", "“Add a $62 fuel expense for truck 2.” Done."],
  ["9:30 AM", "“New lead: Mark Pruitt, 612-555-0148, gutters.” Lead created in Markate."],
  ["11:10 AM", "“Invoice the Reyes job.” Invoice sent from the cab."],
  ["4:45 PM", "Sam: “Two estimates accepted today. Three people asked for a call back. Names in your dashboard.”"],
]

export function XecuteSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Included with Sam</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Sam comes with Xecute.</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Xecute runs your whole business from one text message. Sam is the salesperson inside it. Every Sam plan includes the full Xecute Pro account.
          </p>
          <ul className="mt-6 space-y-3">
            {XECUTE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                <Check className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href={LINKS.features} className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            See everything Xecute does <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">A Tuesday with Xecute</div>
          <dl className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
            {XECUTE_DAY.map(([t, body]) => (
              <div key={t} className="flex gap-4 py-3">
                <dt className="w-20 shrink-0 text-sm tabular-nums text-slate-500">{t}</dt>
                <dd className="text-sm text-slate-800 dark:text-slate-200">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/* ---------- Pricing ---------- */

const XECUTE_PLAN = ["Tasks, expenses, invoices by text", "Customers and leads", "Markate or Jobber sync", "Extra phone lines $10 each", "10-day free trial"]
const SAM_PLAN = [
  "Everything in Xecute Pro, included",
  "Brings back quiet customers",
  "Follows up on every estimate",
  "Books straight into your CRM",
  "Morning report, every day",
  "Cancel any time. Keep every customer he found.",
]
const PHONE_PLAN = ["Answers missed calls", "Books from the call", "Same voice, same manners"]

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Pricing</h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">Sam doesn’t cost anything until he’s paid for himself.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7">
            <div className="text-sm font-semibold text-slate-500">Xecute Pro</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white tabular-nums">$99</span>
              <span className="text-sm text-slate-500">every 4 weeks</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Run the business by text. Unlimited messages.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-200">
              {XECUTE_PLAN.map((f) => (
                <li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{f}</li>
              ))}
            </ul>
            <a href={LINKS.pricing} className="mt-auto pt-8 inline-flex items-center justify-center">
              <span className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800">See Xecute plans</span>
            </a>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-emerald-500 bg-white dark:bg-slate-900 p-7 shadow-xl shadow-emerald-500/10">
            <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-0.5 text-xs font-semibold text-white">Most businesses pick this</div>
            <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Sam</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white tabular-nums">$297</span>
              <span className="text-sm text-slate-500">a month</span>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-100">Free until he closes your first job.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-200">
              {SAM_PLAN.map((f) => (
                <li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{f}</li>
              ))}
            </ul>
            <a href={LINKS.signup} className="mt-auto pt-8 inline-flex items-center justify-center">
              <span className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 text-sm font-semibold text-white hover:bg-emerald-600">Get Sam <ArrowRight className="h-4 w-4" /></span>
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">Needs a Markate or Jobber account.</p>
          </div>

          <div className="flex flex-col rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-7">
            <div className="text-sm font-semibold text-slate-500">Sam on the phone</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-400">Soon</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Sam answers the line when you can’t. Books the job, takes the message, texts you the summary.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {PHONE_PLAN.map((f) => (
                <li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />{f}</li>
              ))}
            </ul>
            <a href={LINKS.support + "?subject=Sam%20on%20the%20phone"} className="mt-auto pt-8 inline-flex items-center justify-center">
              <span className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800">Tell me when it’s ready</span>
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-slate-500">
          “First job” means the first estimate Sam gets accepted or job he books for you. We check it against your CRM, you see it in your morning report, and billing starts at your next renewal. Sam is invite-only right now while we bring on a few businesses at a time.
        </p>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */

const FAQ = [
  {
    q: "Does Sam sound like a robot?",
    a: "No. He texts the way your best office person would: short, friendly, first names, no scripts. Customers reply to him like a person because he reads like one. You can read every conversation.",
  },
  {
    q: "Will he ever quote a price or promise something wrong?",
    a: "He only uses the services, prices, and rules you taught him. If a customer asks something he wasn’t taught, he says he’ll check and hands it to you. He does not make things up.",
  },
  {
    q: "What if a customer says stop?",
    a: "He stops, for good, and marks it in your CRM. He also never texts landlines, disconnected numbers, or anyone marked inactive.",
  },
  {
    q: "Do I need Markate or Jobber?",
    a: "Yes, for now. Sam reads your customers and writes accepted estimates straight into your CRM, so there’s nothing to re-type. A version for businesses without a CRM is on the list.",
  },
  {
    q: "How does “free until he closes your first job” work?",
    a: "You pay nothing while Sam gets set up and starts texting. The first time an estimate he worked gets accepted, or a job he booked lands in your CRM, the $297 a month starts at your next renewal. If he never closes anything, you never pay.",
  },
  {
    q: "Can my crew use it too?",
    a: "Yes. Your reps text Sam from their own phones, ask about jobs, move appointments, and get pulled in when a customer asks for a human. Commission on accepted estimates stays with the rep who sent them.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Questions people ask first</h2>
      <div className="mt-10 divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
        {FAQ.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-left text-lg font-medium text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              {item.q}
              <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ---------- Final call ---------- */

export function FinalCall() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="rounded-3xl bg-slate-900 dark:bg-emerald-600 px-6 py-14 text-center text-white sm:px-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Your customer list is sitting there.</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-slate-300 dark:text-emerald-50">Give Sam a season with it. {OFFER}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={LINKS.signup} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 dark:bg-white px-6 text-base font-semibold text-white dark:text-emerald-700 hover:bg-emerald-400 dark:hover:bg-emerald-50">
            Get Sam <ArrowRight className="h-4 w-4" />
          </a>
          <a href={LINKS.demo} className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-6 text-base font-medium text-white hover:bg-white/10">
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
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
              <img src="/xecute-mark.png" alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
              Xecute
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">Run your service business from one text message. Sam is the salesperson inside it.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#how" className="hover:text-slate-900 dark:hover:text-white">How Sam works</a></li>
              <li><a href={LINKS.features} className="hover:text-slate-900 dark:hover:text-white">Xecute features</a></li>
              <li><a href={LINKS.pricing} className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
              <li><a href={LINKS.login} className="hover:text-slate-900 dark:hover:text-white">Log in</a></li>
              <li><a href={LINKS.signup} className="hover:text-slate-900 dark:hover:text-white">Sign up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href={LINKS.demo} className="hover:text-slate-900 dark:hover:text-white">Book a walkthrough</a></li>
              <li><a href={LINKS.support} className="hover:text-slate-900 dark:hover:text-white">support@xecutetech.com</a></li>
              <li><a href={LINKS.assistantSms} className="hover:text-slate-900 dark:hover:text-white">Text us: (949) 828-6231</a></li>
              <li><a href={LINKS.terms} className="hover:text-slate-900 dark:hover:text-white">Terms and Conditions</a></li>
              <li><a href={LINKS.privacy} className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm text-slate-500">© 2026 Xecute. All rights reserved.</div>
      </div>
    </footer>
  )
}
