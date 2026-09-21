import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Biblio AI — Biblio",
    description: "An AI that knows the book: explanations in context, follow-up questions, circle to search and camera questions for paper books.",
};

// Same light, minimal look as the other feature pages. The one accent is the app's own coral
// (the colour of the "Biblio AI" label in the app), used for the circle that draws itself.

const headingFont = { fontFamily: "var(--font-stack-sans)" };
const coral = "#D97A70";
const violet = "#8B6FE0";

// Faint lines standing in for the rest of the book page around the highlighted sentence (widths in %).
const pageLinesBefore = [96, 88, 93];
const pageLinesAfter = [90, 95, 72];

// "Four ways to ask". icon = a small line drawing (24×24); tint = its colour and the pale tile behind it.
const ways: { title: string; body: string; icon: ReactNode; tint: string }[] = [
    {
        title: "Explain a word",
        body: "Long-press any word or phrase for a definition, then what it means in this sentence.",
        icon: <path d="M5 7V5h14v2M12 5v14M9 19h6" />,
        tint: "bg-[#FBEDEA] text-[#D97A70]",
    },
    {
        title: "Ask a follow-up",
        body: "Not clear yet? Keep asking. It remembers the book and the passage you came from.",
        icon: <path d="M4 5h16v11H9l-5 4z" />,
        tint: "bg-[#F1ECFB] text-[#8B6FE0]",
    },
    {
        title: "Circle to search",
        body: "Circle anything on the page, even a diagram, and ask what you're looking at.",
        icon: (
            <>
                <ellipse cx="11" cy="11" rx="7.5" ry="6" />
                <path d="M16.5 15.5l3.5 3.5" />
            </>
        ),
        tint: "bg-[#EBF0FC] text-[#5B7FE0]",
    },
    {
        title: "Ask about paper",
        body: "Reading a paper book? Point your camera at a term or a diagram and ask, without putting the book down.",
        icon: (
            <>
                <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
                <circle cx="12" cy="13" r="3.5" />
            </>
        ),
        tint: "bg-[#FBEDEA] text-[#D97A70]",
    },
];

export default function AiFeaturePage() {
    return (
        <main className="site-scale w-full bg-[#EDEAE4] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            <div className="px-6 pt-24 text-center md:px-10 md:pt-28">
                <Link href="/#tour" className="text-[14px] text-zinc-600 transition-opacity hover:opacity-70">
                    ← Back to home
                </Link>
            </div>

            {/* ---------- Hero ---------- */}
            <ScrollReveal delayMs={20}>
                <section className="w-full overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-16">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:flex-row md:justify-between">
                        <div className="text-center md:w-[48%] md:text-left">
                            {/* A coral pill badge, in the app's "Biblio AI" colour */}
                            <span
                                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.14em]"
                                style={{ backgroundColor: "#FBE3DE", color: coral }}
                            >
                                <span aria-hidden="true">✦</span> Biblio AI
                            </span>
                            <h1 className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]" style={headingFont}>
                                Move beyond <span style={{ color: coral }}>the dictionary.</span>
                            </h1>
                            <p className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.45] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                A dictionary tells you what a word means. Biblio tells you what it means here, in the book you are
                                holding.
                            </p>
                        </div>

                        {/* The moment, rebuilt as cards instead of a cropped screenshot: a book page with the sentence
                            highlighted, and the Biblio AI sheet (real text from the app) floating over it. */}
                        {/* Everything sits inside one soft peach → lavender card */}
                        <div className="relative mx-auto w-full max-w-[580px] overflow-hidden rounded-[36px] bg-linear-to-br from-[#FDEDE8] via-[#F4EEFC] to-[#EAF0FD] p-6 md:w-[50%] md:p-10">
                            {/* The book page */}
                            <div className="relative rounded-[28px] bg-[#FBF8F3] px-7 pt-8 pb-28 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:px-10 md:pt-10 md:pb-36">
                                <div aria-hidden="true" className="space-y-3.5">
                                    {pageLinesBefore.map((width, i) => (
                                        <span key={i} className="block h-2.5 rounded-full bg-zinc-200/80" style={{ width: `${width}%` }} />
                                    ))}
                                </div>
                                <p className="my-5 font-serif text-[20px] leading-[1.6] text-zinc-800 md:text-[24px]">
                                    <mark className="rounded-md bg-[#F8D9D2] px-1.5 py-0.5 text-zinc-900">
                                        He was definitely not an armchair intellectual.
                                    </mark>
                                </p>
                                <div aria-hidden="true" className="space-y-3.5">
                                    {pageLinesAfter.map((width, i) => (
                                        <span key={i} className="block h-2.5 rounded-full bg-zinc-200/80" style={{ width: `${width}%` }} />
                                    ))}
                                </div>
                            </div>

                            {/* The Biblio AI sheet, overlapping the page */}
                            <div className="relative -mt-20 ml-6 rounded-[28px] bg-white p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:-mt-28 md:ml-14 md:p-7">
                                <p className="flex items-center justify-center gap-2 text-[14px] font-medium md:text-[15px]" style={{ color: coral }}>
                                    <span aria-hidden="true">✦</span> Biblio AI
                                </p>
                                <div className="mt-4 border-t border-zinc-100 pt-5">
                                    <p className="text-[18px] font-semibold leading-snug text-zinc-900 md:text-[21px]">
                                        He was definitely not an armchair intellectual.
                                    </p>

                                    <div className="mt-4 rounded-2xl bg-[#F7F5F2] p-4">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Definition</p>
                                        <p className="mt-2 text-[14px] leading-[1.55] text-zinc-700 md:text-[15px]">
                                            Someone who enjoys discussing and theorizing about complex topics without actively participating or
                                            gaining practical experience in them.
                                        </p>
                                    </div>

                                    <div className="mt-3 rounded-2xl bg-[#F7F5F2] p-4">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Contextual analysis</p>
                                        <p className="mt-2 text-[14px] leading-[1.55] text-zinc-700 md:text-[15px]">
                                            The character was a doer, someone who put his ideas into practice or gained knowledge through direct
                                            engagement, rather than just theorizing.
                                        </p>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="flex-1 rounded-full bg-[#F7F5F2] px-4 py-3 text-[13px] text-zinc-400 md:text-[14px]">
                                            Ask a follow-up question…
                                        </span>
                                        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
                                            ↑
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ---------- In context, not in general ---------- */}
            <ScrollReveal delayMs={40}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2 className="max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]" style={headingFont}>
                            In context, not in general.
                        </h2>
                        <p className="mt-4 max-w-[640px] text-[16px] leading-[1.5] text-zinc-600 md:text-[20px]">
                            The same phrase, two answers. One is true anywhere. The other is about this character, in this sentence.
                        </p>

                        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
                            <div className="rounded-[28px] bg-white p-7 md:p-10">
                                <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">A dictionary says</p>
                                <p className="mt-5 text-[20px] leading-[1.5] text-zinc-500 md:text-[24px]">
                                    &ldquo;Armchair intellectual: someone who theorises about a subject without practical experience of it.&rdquo;
                                </p>
                            </div>

                            {/* A pale peach → lavender card for Biblio's answer */}
                            <div className="rounded-[28px] bg-linear-to-br from-[#FDEDE8] via-[#F4EEFC] to-[#EAF0FD] p-7 md:p-10">
                                <p className="text-[13px] font-medium uppercase tracking-[0.18em]" style={{ color: coral }}>
                                    Biblio says
                                </p>
                                <p className="mt-5 text-[20px] leading-[1.5] text-zinc-900 md:text-[24px]">
                                    &ldquo;The sentence indicates that the character was a doer, someone who put his ideas into practice or
                                    gained knowledge through direct engagement, rather than just theorizing.&rdquo;
                                </p>
                                <p className="mt-5 text-[14px] text-zinc-500">From Biblio&apos;s contextual analysis, in the app.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ---------- Circle it. Get it. (the circle draws itself over the diagram) ---------- */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 pb-16 md:px-10 md:pb-24">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 overflow-hidden rounded-[36px] bg-white px-7 pt-12 md:flex-row md:items-stretch md:gap-16 md:px-16 md:pt-16">
                        <div className="md:w-[48%] md:self-center md:pb-16">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">Circle to search</p>
                            <h2 className="mt-4 text-[30px] font-normal leading-[1.06] tracking-tight text-zinc-900 md:text-[46px]" style={headingFont}>
                                Circle it. Get it.
                            </h2>
                            <p className="mt-5 text-[16px] leading-[1.55] text-zinc-600 md:text-[19px]">
                                A diagram you can&apos;t parse, a chart, a term in a caption. Draw a circle around it and Biblio explains
                                what you&apos;re looking at, right there on the page.
                            </p>
                            <p className="mt-7 border-l-2 border-zinc-200 pl-4 text-[15px] leading-[1.55] text-zinc-500 md:text-[16px]">
                                Biblio, on the diagram here: &ldquo;This diagram beautifully illustrates the crucial link between a
                                company&apos;s Income Statement and its Balance Sheet.&rdquo;
                            </p>
                        </div>

                        {/* The SVG uses the screenshot's own pixel size (883×1344), so the circle stays on the diagram at any width */}
                        <div className="relative w-full max-w-[340px] self-end md:w-[42%] md:max-w-[380px]">
                            <div className="relative aspect-[883/1344] [mask-image:linear-gradient(to_bottom,transparent,black_12%)]">
                                <Image src="/images/ai/a2.png" alt="Circle to search explaining a diagram" fill className="object-contain object-bottom" />
                                <svg viewBox="0 0 883 1344" className="absolute inset-0 h-full w-full" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="circle-stroke" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor={coral} />
                                            <stop offset="100%" stopColor={violet} />
                                        </linearGradient>
                                    </defs>
                                    <ellipse
                                        className="biblio-draw"
                                        pathLength={1}
                                        cx="452"
                                        cy="410"
                                        rx="175"
                                        ry="185"
                                        fill="none"
                                        stroke="url(#circle-stroke)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        transform="rotate(-8 452 410)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ---------- Four ways to ask ---------- */}
            <ScrollReveal delayMs={80}>
                <section className="w-full px-6 pb-20 md:px-10 md:pb-28">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2 className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[52px]" style={headingFont}>
                            Four ways to ask.
                        </h2>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
                            {ways.map((way) => (
                                <div key={way.title} className="rounded-[28px] bg-white p-7 md:p-8">
                                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${way.tint}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            {way.icon}
                                        </svg>
                                    </span>
                                    <p className="mt-6 text-[22px] font-normal leading-[1.15] tracking-tight text-zinc-900 md:text-[26px]" style={headingFont}>
                                        {way.title}
                                    </p>
                                    <p className="mt-3 text-[15px] leading-[1.55] text-zinc-600 md:text-[17px]">{way.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
