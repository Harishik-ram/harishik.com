import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import MobileNav from "./mobile-nav";
import TypeLine from "./type-line";
import overview from "@/public/dunnflow-overview.jpg";
import analytics from "@/public/dunnflow-analytics.jpg";
import timeline from "@/public/dunnflow-timeline.jpg";
import ringsize from "@/public/onlineringsize.jpg";
import fina from "@/public/fina.jpg";
import moviear from "@/public/moviear.jpg";
import founder from "@/public/founder.jpg";

const LINKS = {
  email: "mailto:harishikpentapalli09@gmail.com",
  phone: "tel:+916305908058",
  github: "https://github.com/Harishik-ram",
  linkedin: "https://www.linkedin.com/in/pentapalli-harishik/",
  resume: "/resume.pdf",
};

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-300 px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
      {children}
    </span>
  );
}

function SectionHeading({ id, num, children }: { id?: string; num: string; children: React.ReactNode }) {
  return (
    <div id={id} className="flex scroll-mt-24 items-center gap-4">
      <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
        {num}
      </span>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
        {children}
      </h2>
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

const card = "rounded-xl border border-slate-200 dark:border-slate-800";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <a href="/" className="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            harishik<span className="text-emerald-600 dark:text-emerald-400">.com</span>
          </a>
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-5 font-mono text-xs text-slate-600 dark:text-slate-400 sm:flex">
              <a href="#work" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                <span className="text-emerald-600 dark:text-emerald-400">01.</span> work
              </a>
              <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                <span className="text-emerald-600 dark:text-emerald-400">02.</span> projects
              </a>
              <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                <span className="text-emerald-600 dark:text-emerald-400">03.</span> about
              </a>
              <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                <span className="text-emerald-600 dark:text-emerald-400">04.</span> contact
              </a>
            </div>
            <a
              href={LINKS.resume}
              className="rounded-md border border-emerald-600 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-400 dark:hover:text-slate-950"
            >
              résumé
            </a>
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-4xl px-6">
        {/* Hero */}
        <section className="flex min-h-[88vh] flex-col justify-center pt-24">
          <TypeLine />
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            Pentapalli <span className="text-emerald-600 dark:text-emerald-400">Harishik</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl">
            I build and ship complete products.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Software engineer working across the full stack — React, Next.js,
            Node.js, PostgreSQL, AWS. By day I build a production healthcare
            platform at{" "}
            <a href="https://anvera.health/" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-emerald-600 underline-offset-4 dark:text-white dark:decoration-emerald-400">
              Anvera Health
            </a>
            . On my own time I founded{" "}
            <a href="https://dunnflow.com" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-emerald-600 underline-offset-4 dark:text-white dark:decoration-emerald-400">
              dunnflow
            </a>
            , a live payment-recovery SaaS for Stripe businesses — designed,
            built, and launched end-to-end.
          </p>
          <p className="mt-6 flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            currently: SWE @ Anvera Health · building dunnflow
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
            >
              See my work
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400">
              <GithubIcon />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400">
              <LinkedinIcon />
            </a>
            <a href={LINKS.email} aria-label="Email" className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400">
              <MailIcon />
            </a>
            <a href={LINKS.phone} aria-label="Phone" className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400">
              <PhoneIcon />
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20">
          <SectionHeading id="work" num="01.">Experience</SectionHeading>
          <div className="mt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Software Engineer ·{" "}
                <a href="https://anvera.health/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-600 hover:underline dark:text-emerald-400">
                  Anvera Health <ExternalIcon />
                </a>
              </h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Jan 2026 – Present · Bengaluru
              </p>
            </div>
            <ul className="mt-5 space-y-3 leading-relaxed marker:text-emerald-600 dark:marker:text-emerald-400 list-disc pl-5 text-slate-600 dark:text-slate-400">
              <li>
                Built the patient portal end-to-end — 8+ modules including a
                symptom checker, triage, ICD-11 diagnosis explainers, care
                plans, medical records, appointments, and immunisation tracking.
              </li>
              <li>
                Designed the data model and backend: 50+ PostgreSQL tables and
                REST APIs with two-factor login, role-based access, and a
                consent-based caretaker module.
              </li>
              <li>
                Drove architecture and infrastructure — schema design,
                migrations, authentication, email delivery, and AWS deployment
                (EC2 + RDS, Cloudflare, Redis, SES).
              </li>
              <li>
                Integrated India&apos;s health stack (ABHA/ABDM) and an Ayushman
                Bharat referral engine matching 3,000+ empanelled hospitals,
                built to DPDPA-2023 privacy standards.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>React</Chip>
              <Chip>Next.js</Chip>
              <Chip>Node.js</Chip>
              <Chip>PostgreSQL</Chip>
              <Chip>Redis</Chip>
              <Chip>AWS</Chip>
            </div>
          </div>
        </section>

        {/* dunnflow case study */}
        <section className="py-20">
          <SectionHeading id="projects" num="02.">Featured project</SectionHeading>
          <div className="mt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                dunnflow
              </h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                founder · 2026 · live in production
              </p>
            </div>
            <p className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-400">
              Payment recovery for SaaS businesses on Stripe — built, launched,
              and operated solo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="https://dunnflow.com" target="_blank" rel="noreferrer" className={`sm:col-span-2 overflow-hidden ${card}`}>
                <Image
                  src={overview}
                  alt="dunnflow dashboard — money at risk, recovered, and recovery rate"
                  className="w-full"
                  placeholder="blur"
                />
              </a>
              <div className={`overflow-hidden ${card}`}>
                <Image src={analytics} alt="dunnflow analytics — recovery charts" placeholder="blur" />
              </div>
              <div className={`overflow-hidden ${card}`}>
                <Image src={timeline} alt="dunnflow payment timeline — event log of a recovery" placeholder="blur" />
              </div>
            </div>

            <div className="mt-8 space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">The problem:</span>{" "}
                subscription businesses silently lose ~9% of revenue to failed
                card payments. dunnflow catches every failed Stripe invoice the
                moment it happens, emails the customer a branded one-click pay
                link, and follows up automatically until the money comes back.
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">What I built:</span>{" "}
                the entire product — signature-verified Stripe webhook
                processing, a multi-tenant Supabase/PostgreSQL backend with
                row-level security, automated recovery-email sequences with
                open/click tracking, per-account analytics dashboards, a live
                read-only demo, and 90+ SEO-indexed marketing pages.
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">The hard part:</span>{" "}
                billing customers fairly and safely. dunnflow charges 20% of
                recovered revenue, so the billing engine uses Stripe idempotency
                keys plus unique invoice constraints to make double-charging
                impossible, and automatically excludes refunded or disputed
                recoveries from fees. Onboarding is one click via Stripe Connect
                OAuth — a customer is fully set up in about 3 minutes with no
                code or API keys.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Next.js</Chip>
              <Chip>TypeScript</Chip>
              <Chip>Stripe Connect</Chip>
              <Chip>Supabase</Chip>
              <Chip>PostgreSQL</Chip>
              <Chip>Resend</Chip>
              <Chip>Vercel</Chip>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://dunnflow.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
              >
                Visit dunnflow.com <ExternalIcon />
              </a>
              <a
                href="https://dunnflow.com/demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              >
                Try the live demo <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Other projects */}
        <section className="py-20">
          <SectionHeading num="02.5">More projects</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className={`flex h-full flex-col overflow-hidden sm:col-span-2 ${card}`}>
              <a href="https://onlineringsize.com/" target="_blank" rel="noreferrer" className="border-b border-slate-200 dark:border-slate-800">
                <Image src={ringsize} alt="Online Ring Size — free ring size calculator with screen calibration" className="w-full" placeholder="blur" />
              </a>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  <a href="https://onlineringsize.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400">
                    Online Ring Size <ExternalIcon />
                  </a>
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  consumer measurement tools · live at onlineringsize.com · 500+ users last month
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
                  A free ring-size calculator that calibrates your screen
                  against real objects — a bank card, a coin, a folded sheet of
                  paper — then reads your size in 11 national standards with an
                  honest accuracy range around every result. Grew it into a
                  full measurement suite: bracelet size, necklace length, watch
                  strap, earring gauge, a printable sizer, and pages for
                  jewellers — in multiple languages, ranking on Google with
                  500+ users and 3,000+ tracked events in the last month, all
                  from organic traffic.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip>Astro</Chip>
                  <Chip>i18n</Chip>
                  <Chip>SEO</Chip>
                  <Chip>Google Analytics</Chip>
                </div>
              </div>
            </div>
            <div className={`flex h-full flex-col overflow-hidden ${card}`}>
              <a href="https://fina-ijpk.vercel.app/" target="_blank" rel="noreferrer" className="border-b border-slate-200 dark:border-slate-800">
                <Image src={fina} alt="FINA — AI-powered personal finance platform" className="aspect-[16/10] w-full object-cover object-left-top" placeholder="blur" />
              </a>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  <a href="https://fina-ijpk.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400">
                    FINA <ExternalIcon />
                  </a>
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  AI-powered personal finance platform
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
                  Full-stack finance app that automates expense tracking — AI
                  receipt scanning extracts and categorises transactions,
                  real-time analytics show spending patterns, and background
                  jobs handle recurring transactions.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip>Next.js</Chip>
                  <Chip>Supabase</Chip>
                  <Chip>Prisma</Chip>
                  <Chip>Clerk</Chip>
                  <Chip>Arcjet</Chip>
                </div>
              </div>
            </div>
            <div className={`flex h-full flex-col overflow-hidden ${card}`}>
              <a href="https://moviear2.vercel.app/" target="_blank" rel="noreferrer" className="border-b border-slate-200 dark:border-slate-800">
                <Image src={moviear} alt="Moviear — movie discovery platform" className="aspect-[16/10] w-full object-cover object-left-top" placeholder="blur" />
              </a>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  <a href="https://moviear2.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400">
                    Moviear <ExternalIcon />
                  </a>
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  Movie discovery platform
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
                  Discovery platform on the TMDB API — 10,000+ titles with
                  real-time data, advanced filtering, autocomplete search, and a
                  fully responsive layout across mobile, tablet, and desktop.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip>React</Chip>
                  <Chip>TMDB API</Chip>
                  <Chip>Responsive UI</Chip>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20">
          <SectionHeading num="//">What I work with</SectionHeading>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            <div>
              <h3 className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                frontend
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                React, Next.js, Astro, TypeScript, Tailwind CSS, Redux, Vite
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                backend &amp; data
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                Node.js, Express, REST APIs, PostgreSQL, Supabase, MongoDB,
                Redis
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                infra &amp; tools
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                AWS (EC2, RDS, SES), Stripe (Connect, webhooks, billing),
                Vercel, Cloudflare, Git
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <SectionHeading id="about" num="03.">About</SectionHeading>
          <div className="mt-8 grid items-start gap-10 sm:grid-cols-[240px_1fr]">
            <Image
              src={founder}
              alt="Pentapalli Harishik"
              className="w-full max-w-[240px] rounded-xl border border-slate-200 dark:border-slate-800"
              placeholder="blur"
            />
            <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m a software engineer from Andhra Pradesh, now in
                Bengaluru (B.Tech CSE, Andhra University, 2025). What I enjoy
                most is taking a product all the way: from an empty repo to a
                data model, to APIs, to a UI people actually use, to a real
                deployment with real users — and then owning what breaks.
              </p>
              <p>
                That&apos;s how dunnflow happened. I wanted to understand every
                layer of a real business — payments, webhooks, billing, email
                deliverability, SEO, even the legal pages — so I built one.
                It&apos;s live, it processes real Stripe events, and it taught me
                more than any course could.
              </p>
              <p>
                I&apos;m at my best on teams that ship fast and care about
                what they put in front of users. If that sounds like your team,
                I&apos;d love to talk.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <SectionHeading id="contact" num="04.">Contact</SectionHeading>
          <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s build something.
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
            I&apos;m open to software engineering roles and interesting
            conversations. Email or call — I reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={LINKS.email}
              className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
            >
              harishikpentapalli09@gmail.com
            </a>
            <a
              href={LINKS.phone}
              className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              +91 63059 08058
            </a>
            <a
              href={LINKS.resume}
              className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              Download résumé
            </a>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 py-10 font-mono text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Pentapalli Harishik · built with Next.js</p>
          <div className="flex items-center gap-4">
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              <GithubIcon />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              <LinkedinIcon />
            </a>
            <a href={LINKS.email} aria-label="Email" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              <MailIcon />
            </a>
            <a href={LINKS.phone} aria-label="Phone" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              <PhoneIcon />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
