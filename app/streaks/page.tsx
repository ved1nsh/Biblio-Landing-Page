import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Streaks — Biblio",
    description: "Daily goals, XP, levels and Streak Savers that keep your reading habit alive.",
};

// How a reading day turns into progress.
const loop = [
    { id: 1, title: "Set a goal", desc: "Five minutes or fifty. Small enough that a bad day can't beat it." },
    { id: 2, title: "Hit it", desc: "Every minute of focus counts, on screen or on paper, and earns you XP." },
    { id: 3, title: "Keep the chain", desc: "The streak grows, the stats fill in, and tomorrow is easier to start." },
];

// The real tiers in the app.
const levels = [
    { name: "Newcomer", range: "Level 1", note: "Every reader starts somewhere." },
    { name: "Page Turner", range: "Level 2–3", note: "You're building a real habit." },
    { name: "Curious Reader", range: "Level 4–5", note: "Your curiosity fuels your journey." },
    { name: "Bookworm", range: "Level 6–7", note: "Books are your second home." },
    { name: "Scholar", range: "Level 8–9", note: "Reading with purpose and depth." },
    { name: "Bibliophile", range: "Level 10–12", note: "A true lover of the written word." },
];

// "Take a closer look" tiles (Apple-style bento). span = how many of the 6 grid columns a tile takes on big screens.
const closerLook = [
    {
        lead: "Your day, in one screen.",
        rest: "Today's minutes, your level and your latest badges together.",
        image: "/images/streaks/ss1.png",
        span: "lg:col-span-2",
    },
    {
        lead: "Badges worth chasing.",
        rest: "Unlock one and the XP lands straight away.",
        image: "/images/streaks/ss2.png",
        span: "lg:col-span-2",
    },
    {
        lead: "A month at a glance.",
        rest: "Every day you read shows up on the calendar, with your week's total underneath.",
        image: "/images/streaks/images1.png",
        span: "lg:col-span-2",
    },
    {
        lead: "The streak, front and centre.",
        rest: "The first thing you see, so you always know where you stand.",
        image: "/images/streaks/s2.png",
        span: "lg:col-span-3",
    },
    {
        lead: "Today's goal and your level.",
        rest: "How close you are to today's target, and how far to the next title.",
        image: "/images/streaks/imagess3.png",
        span: "lg:col-span-3",
    },
];

// The Streak Saver rules, exactly as the app applies them.
const saverRules = [
    { title: "One free saver", desc: "You start with a free Streak Saver. Use it to restore a broken streak at no XP cost." },
    { title: "Then 100 XP", desc: "Out of free savers? Spend 100 XP to restore your streak instead." },
    { title: "A three-day window", desc: "Savers only work within three missed days. After that, you start fresh." },
];

export default function StreaksPage() {
    return (
        <main className="site-scale w-full bg-[#EEE9FE] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            <div className="px-6 pt-24 text-center md:px-10 md:pt-28">
                <Link href="/#tour" className="text-[14px] text-zinc-600 transition-opacity hover:opacity-70">
                    ← Back to home
                </Link>
            </div>

            {/* Hero */}
            <ScrollReveal delayMs={20}>
                <section className="w-full overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-16">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:flex-row md:justify-between">
                        <div className="text-center md:w-[46%] md:text-left">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#8157F9]">Streaks</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                The hard part isn&apos;t starting.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                Anyone can start a book. Coming back to it tomorrow is the bit that needs help. That is what streaks
                                are for.
                            </p>
                        </div>

                        <div className="relative mx-auto h-[460px] w-full max-w-[340px] md:h-[700px] md:w-[46%] md:max-w-[460px]">
                            <Image src="/images/streak.png" alt="Streaks and stats in Biblio" fill className="object-contain object-bottom" priority />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* The daily loop */}
            <ScrollReveal delayMs={40}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2
                            className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            A goal, a day, a chain.
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
                            {loop.map((step) => (
                                <div key={step.id} className="rounded-[28px] bg-white p-7 md:p-9">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#8157F9] text-[15px] font-medium text-white">
                                        {step.id}
                                    </span>
                                    <p
                                        className="mt-5 text-[24px] font-normal leading-[1.1] tracking-tight text-zinc-900 md:text-[28px]"
                                        style={{ fontFamily: "var(--font-stack-sans)" }}
                                    >
                                        {step.title}
                                    </p>
                                    <p className="mt-3 text-[15px] leading-[1.55] text-zinc-600 md:text-[17px]">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Take a closer look: every streak screen, Apple-style bento */}
            <ScrollReveal delayMs={50}>
                <section className="w-full px-6 pb-16 md:px-10 md:pb-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2
                            className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Take a closer look.
                        </h2>

                        {/* 1 column on phones, 2 on tablets, 6-column bento on big screens */}
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-6">
                            {closerLook.map((tile) => (
                                <div
                                    key={tile.image}
                                    className={`flex h-[520px] flex-col overflow-hidden rounded-[28px] bg-[#FCF9F4] px-7 pt-7 md:h-[600px] md:px-9 md:pt-9 ${tile.span}`}
                                >
                                    {/* Apple-style caption: bold lead-in, lighter rest */}
                                    <p className="max-w-[420px] text-[17px] leading-[1.4] text-zinc-500 md:text-[19px]">
                                        <span className="font-medium text-zinc-900">{tile.lead}</span> {tile.rest}
                                    </p>

                                    {/* The screen sits at the bottom and runs off the tile edge */}
                                    <div className="relative mt-6 flex-1">
                                        <Image src={tile.image} alt={tile.lead} fill className="object-contain object-bottom" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* The ladder */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 pb-16 md:px-10 md:pb-24">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 overflow-hidden rounded-[36px] bg-white px-7 pt-12 md:flex-row md:gap-16 md:px-16 md:pt-16">
                        <div className="pb-2 md:w-[54%] md:pb-16">
                            <h2
                                className="text-[30px] font-normal leading-[1.06] tracking-tight text-zinc-900 md:text-[46px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Climb as you read.
                            </h2>
                            <p className="mt-5 text-[16px] leading-[1.55] text-zinc-600 md:text-[19px]">
                                XP adds up into levels, and levels come with a title you earn rather than pick.
                            </p>

                            <ol className="mt-8 divide-y divide-zinc-200 border-t border-zinc-200">
                                {levels.map((level) => (
                                    <li key={level.name} className="grid gap-1 py-4 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6">
                                        <div>
                                            <p className="text-[18px] font-medium text-zinc-900 md:text-[20px]">{level.name}</p>
                                            <p className="mt-1 text-[14px] text-zinc-500 md:text-[16px]">{level.note}</p>
                                        </div>
                                        <span className="justify-self-start rounded-full bg-[#EEE9FE] px-3 py-1 text-[13px] font-medium text-[#8157F9] md:justify-self-end md:text-[14px]">
                                            {level.range}
                                        </span>
                                    </li>
                                ))}
                            </ol>

                            <p className="mt-6 text-[15px] leading-[1.5] text-zinc-500 md:text-[16px]">
                                Achievements sit alongside them: finish a challenge and the XP boost is worth more than the badge.
                            </p>
                        </div>

                        <div className="relative h-[440px] w-full max-w-[320px] md:h-[620px] md:w-[40%] md:max-w-none">
                            <Image src="/images/streaks/ss3.png" alt="Levels and tags in Biblio" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Streak Saver */}
            <ScrollReveal delayMs={80}>
                <section className="w-full px-6 pb-20 md:px-10 md:pb-28">
                    <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[36px] bg-[#0E1A12] px-7 pt-12 text-white md:px-16 md:pt-16">
                        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
                            <div className="md:w-[52%]">
                                <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#5BC47E]">Streak Saver</p>
                                <h2
                                    className="mt-4 text-[30px] font-normal leading-[1.06] tracking-tight md:text-[46px]"
                                    style={{ fontFamily: "var(--font-stack-sans)" }}
                                >
                                    Life happens. The streak survives.
                                </h2>
                                <p className="mt-5 text-[16px] leading-[1.55] text-zinc-400 md:text-[19px]">
                                    Miss a day and you don&apos;t lose a month. A saver puts the chain back, within limits that keep it
                                    honest.
                                </p>

                                <div className="mt-8 space-y-4 pb-10">
                                    {saverRules.map((rule) => (
                                        <div key={rule.title} className="rounded-2xl border border-white/10 p-5">
                                            <p className="text-[17px] font-medium md:text-[19px]">{rule.title}</p>
                                            <p className="mt-1 text-[15px] leading-[1.5] text-zinc-400 md:text-[16px]">{rule.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-[420px] w-full max-w-[320px] md:h-[600px] md:w-[44%] md:max-w-none">
                                <Image src="/images/streaks/ss4.png" alt="Streak Saver rules in Biblio" fill className="object-contain object-bottom" />
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
