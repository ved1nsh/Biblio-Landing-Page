import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import TryItButton from "./TryItButton";
import { closing, contents, contentsIntro, hero, market, next, today, tour, welcome, why } from "./content";

// This page is also the homepage (app/page.tsx shows it at "/"). At /zamp it stays hidden from
// search engines so the same page isn't listed twice.
export const metadata: Metadata = {
    title: "Biblio — Your Digital Reading App",
    description: "Your one stop application for all your digital reading needs.",
    robots: { index: false, follow: false },
};

// Shared styles, so every section looks the same.
const headingFont = { fontFamily: "var(--font-stack-sans)" };
const container = "mx-auto w-full max-w-[1100px]";
const section = "scroll-mt-20 px-6 py-16 md:px-10 md:py-24";
const h2 = "text-[34px] font-normal leading-[1.05] tracking-tight text-zinc-900 md:text-[52px]";
const body = "text-[16px] leading-[1.7] text-zinc-600 md:text-[18px]";
const eyebrow = "text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-500";
const textLink =
    "inline-flex items-center gap-1 text-[15px] font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-opacity hover:opacity-70";

const pad = (n: number) => String(n).padStart(2, "0");

// "What it can do" tiles (Apple-style bento grid).
// tileTheme = the colours of a tile. tileLayout = its size and arrangement.
// On large screens the grid is 6 columns wide: wide = 4, narrow = 2, half = 3, hero = all 6.
const tileTheme = {
    light: { tile: "bg-white", eyebrow: "text-zinc-500", title: "text-zinc-900", body: "text-zinc-600", link: "text-zinc-900 decoration-zinc-400" },
    dark: { tile: "bg-zinc-950", eyebrow: "text-zinc-400", title: "text-white", body: "text-zinc-400", link: "text-white decoration-zinc-600" },
    peach: { tile: "bg-[#F5E6D3]", eyebrow: "text-[#A0582D]", title: "text-zinc-900", body: "text-zinc-700", link: "text-zinc-900 decoration-zinc-500" },
    lavender: { tile: "bg-[#EEE9FE]", eyebrow: "text-[#8157F9]", title: "text-zinc-900", body: "text-zinc-700", link: "text-zinc-900 decoration-zinc-500" },
} as const;

const tileLayout = {
    // Text on the left, phone on the right (on large screens).
    wide: {
        tile: "lg:col-span-4 lg:h-[700px] lg:flex-row",
        text: "lg:h-full lg:w-[44%] lg:justify-center lg:pb-12 lg:pr-0",
        title: "md:text-[44px]",
        media: "h-[380px] sm:h-[460px] lg:mt-0 lg:h-full lg:w-[56%] lg:pt-14",
    },
    // Text on top, phone underneath.
    narrow: {
        tile: "lg:col-span-2 lg:h-[700px]",
        text: "",
        title: "md:text-[36px]",
        media: "h-[380px] sm:h-[460px] lg:h-auto lg:min-h-0 lg:flex-1",
    },
    half: {
        tile: "lg:col-span-3 lg:h-[740px]",
        text: "",
        title: "md:text-[40px]",
        media: "h-[380px] sm:h-[460px] lg:h-auto lg:min-h-0 lg:flex-1",
    },
    // Full-width tile, centred text, phones side by side.
    // Shorter image area on phones: two phones side by side are narrow there, so they are short too.
    hero: {
        tile: "lg:col-span-6 lg:h-[840px]",
        text: "mx-auto max-w-[760px] items-center text-center",
        title: "md:text-[56px] lg:text-[64px]",
        media: "h-[240px] pb-6 sm:h-[460px] lg:h-auto lg:min-h-0 lg:flex-1 lg:pb-12",
    },
} as const;

const gradientText = "bg-linear-to-r from-[#E1306C] via-[#A23BEC] to-[#5B6CFF] bg-clip-text text-transparent";

export default function ZampPage() {
    return (
        <main
            id="top"
            className="min-h-screen w-full bg-[#EDEAE4] text-zinc-900"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            {/* ---------- Hero + contents ---------- */}
            <section className="px-6 pt-28 pb-12 md:px-10 md:pt-36 md:pb-20">
                <div className={`${container} grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16`}>
                    <ScrollReveal>
                        <h1
                            className="text-[48px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[80px]"
                            style={headingFont}
                        >
                            {hero.title}
                        </h1>
                        <p className="mt-5 max-w-[560px] text-[20px] leading-[1.35] text-zinc-700 md:mt-7 md:text-[28px]">
                            {hero.tagline}
                        </p>
                        {/* One black pill, as on the original homepage */}
                        <TryItButton
                            label="Download now"
                            className="mt-8 rounded-full bg-black px-8 py-3.5 text-[15px] text-white transition-opacity hover:opacity-85 md:mt-10 md:px-10 md:py-4 md:text-[17px]"
                        />
                    </ScrollReveal>

                    <ScrollReveal delayMs={80}>
                        <div className="relative mx-auto h-[420px] w-full max-w-[380px] md:h-[560px] md:max-w-none">
                            <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-contain" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ---------- Welcome band (from the original homepage) ---------- */}
            <section className="w-full bg-black px-6 py-20 text-white md:px-10 md:py-32">
                <ScrollReveal className="mx-auto max-w-[1020px] text-center">
                    <p
                        className="text-[30px] font-normal leading-[1.12] tracking-tight md:text-[52px]"
                        style={headingFont}
                    >
                        {welcome}
                    </p>
                </ScrollReveal>
            </section>

            {/* ---------- The contents, as its own section ---------- */}
            <section className={section}>
                <ScrollReveal className={container}>
                    <p className={eyebrow}>On this page</p>
                    <h2 className={`mt-3 ${h2}`} style={headingFont}>
                        {contentsIntro.title}
                    </h2>
                    <p className={`mt-4 max-w-[640px] ${body}`}>{contentsIntro.subtitle}</p>

                    <nav aria-label="On this page" className="mt-10 md:mt-12">
                        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            {contents.map((item, i) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-white/70 p-5 transition-colors hover:bg-white md:min-h-[150px] md:p-6"
                                    >
                                        <span className="text-[13px] tabular-nums text-zinc-400">{pad(i + 1)}</span>
                                        <span className="text-[17px] leading-[1.25] text-zinc-900 md:text-[19px]">{item.label} →</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </ScrollReveal>
            </section>

            {/* ---------- Why I built it ---------- */}
            <section id="why" className={`${section} bg-white`}>
                <ScrollReveal className={`${container} grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16`}>
                    <h2 className={h2} style={headingFont}>
                        {why.title}
                    </h2>
                    <div className="space-y-5">
                        {why.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className={i === why.paragraphs.length - 1 ? "text-[18px] font-medium text-zinc-900 md:text-[20px]" : body}
                            >
                                {p}
                            </p>
                        ))}
                        <Link href={why.link.href} className={textLink}>
                            {why.link.label} →
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

            {/* ---------- The tour ---------- */}
            <section id="tour" className={section}>
                <div className="mx-auto w-full max-w-[1240px]">
                    <ScrollReveal className="text-center">
                        <h2 className={h2} style={headingFont}>
                            {tour.title}
                        </h2>
                        <p className={`mt-3 ${body}`}>{tour.subtitle}</p>
                    </ScrollReveal>

                    {/* Bento grid: 1 column on phones and tablets, 6 columns on large screens */}
                    <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:gap-5 lg:grid-cols-6">
                        {tour.stops.map((stop) => {
                            const theme = tileTheme[stop.theme];
                            const layout = tileLayout[stop.layout];

                            return (
                                <ScrollReveal
                                    key={stop.id}
                                    className={`relative flex flex-col overflow-hidden rounded-[32px] md:rounded-[40px] ${theme.tile} ${layout.tile}`}
                                >
                                    {/* Text */}
                                    <div className={`flex flex-col px-7 pt-9 md:px-12 md:pt-12 ${layout.text}`}>
                                        <p className={`text-[14px] font-medium ${theme.eyebrow}`}>{stop.eyebrow}</p>
                                        <h3
                                            className={`mt-2 text-[30px] font-normal leading-[1.06] tracking-tight ${layout.title} ${stop.gradientTitle ? gradientText : theme.title}`}
                                            style={headingFont}
                                        >
                                            {stop.title}
                                        </h3>
                                        <p className={`mt-4 text-[15px] leading-[1.6] md:text-[17px] ${theme.body}`}>{stop.body}</p>
                                        {stop.link ? (
                                            <Link
                                                href={stop.link.href}
                                                className={`mt-5 w-fit text-[15px] font-medium underline underline-offset-4 transition-opacity hover:opacity-70 ${theme.link}`}
                                            >
                                                {stop.link.label} →
                                            </Link>
                                        ) : null}
                                    </div>

                                    {/* Phone(s), pinned to the bottom edge so they run off the tile */}
                                    <div
                                        className={`relative mt-8 flex items-end justify-center gap-4 px-6 md:gap-8 ${layout.media}`}
                                    >
                                        {stop.images.map((img) => (
                                            <div key={img.src} className={`relative h-full ${img.boxClass ?? "w-full max-w-[440px]"}`}>
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    sizes="(min-width: 1024px) 40vw, 90vw"
                                                    className="object-contain object-bottom"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    <ScrollReveal>
                        <p className="mx-auto mt-12 max-w-[760px] text-center text-[18px] leading-[1.5] text-zinc-800 md:text-[22px]">
                            {tour.closingLine}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ---------- The market ---------- */}
            <section id="market" className={`${section} bg-white`}>
                <div className={container}>
                    <ScrollReveal>
                        <h2 className={h2} style={headingFont}>
                            {market.title}
                        </h2>
                        <p className="mt-4 text-[20px] text-zinc-800 md:text-[24px]">{market.lead}</p>

                        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200">
                            <div className="hidden bg-zinc-50 px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-zinc-500 md:grid md:grid-cols-[1.1fr_0.6fr_1.3fr_1.8fr] md:gap-6">
                                <span>App</span>
                                <span>Downloads</span>
                                <span>Good at</span>
                                <span>Missing</span>
                            </div>
                            <div className="divide-y divide-zinc-200 md:border-t md:border-zinc-200">
                                {market.rows.map((row) => (
                                    <div
                                        key={row.name}
                                        className="grid gap-1 px-5 py-4 text-[15px] md:grid-cols-[1.1fr_0.6fr_1.3fr_1.8fr] md:gap-6 md:px-6"
                                    >
                                        <p className="font-medium text-zinc-900">
                                            {row.name}
                                            <span className="font-normal text-zinc-500 md:hidden"> · {row.downloads}</span>
                                        </p>
                                        <p className="hidden text-zinc-600 md:block">{row.downloads}</p>
                                        <p className="text-zinc-600">
                                            <span className="text-zinc-400 md:hidden">Good at: </span>
                                            {row.goodAt}
                                        </p>
                                        <p className="text-zinc-600">
                                            <span className="text-zinc-400 md:hidden">Missing: </span>
                                            {row.missing}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-3 text-[13px] text-zinc-500">{market.note}</p>
                    </ScrollReveal>

                    <div className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
                        <ScrollReveal className="space-y-5">
                            {market.paragraphs.map((p, i) => (
                                <p key={i} className={body}>
                                    {p}
                                </p>
                            ))}
                            <div className="rounded-3xl bg-[#EDEAE4] p-6">
                                <p className={eyebrow}>Why now</p>
                                <p className="mt-2 text-[16px] leading-[1.7] text-zinc-700 md:text-[17px]">{market.whyNow}</p>
                            </div>
                            <div className="flex flex-col items-start gap-3 pt-2">
                                {market.links.map((l) => (
                                    <Link key={l.href} href={l.href} className={textLink}>
                                        {l.label} →
                                    </Link>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delayMs={80} className="grid grid-cols-2 gap-4">
                            {market.comparison.map((shot) => (
                                <figure key={shot.src}>
                                    <div className="relative h-[300px] md:h-[440px]">
                                        <Image
                                            src={shot.src}
                                            alt={shot.alt}
                                            fill
                                            sizes="(min-width: 768px) 20vw, 50vw"
                                            className="object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-center text-[13px] text-zinc-500">{shot.caption}</figcaption>
                                </figure>
                            ))}
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ---------- Where it stands today ---------- */}
            <section id="today" className={section}>
                <ScrollReveal className={`${container} grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16`}>
                    <h2 className={h2} style={headingFont}>
                        {today.title}
                    </h2>
                    <div className="space-y-5">
                        {today.paragraphs.map((p, i) => (
                            <p key={i} className={body}>
                                {p}
                            </p>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* ---------- What I'd build next ---------- */}
            <section id="next" className={`${section} pt-0 md:pt-0`}>
                <div className={`${container} border-t border-zinc-300/70 pt-16 md:pt-24`}>
                    <ScrollReveal>
                        <h2 className={h2} style={headingFont}>
                            {next.title}
                        </h2>
                        <p className={`mt-3 ${body}`}>{next.subtitle}</p>
                    </ScrollReveal>

                    {/* 1 column on phones, 2 on tablets, 3 on large screens */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                        {next.ideas.map((idea, i) => (
                            <ScrollReveal key={idea.title} delayMs={(i % 3) * 80} className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
                                <p className="text-[13px] tabular-nums text-zinc-400">{pad(i + 1)}</p>
                                <h3
                                    className="mt-2 text-[24px] font-normal leading-[1.15] tracking-tight text-zinc-900 md:text-[28px]"
                                    style={headingFont}
                                >
                                    {idea.title}
                                </h3>
                                <p className="mt-3 text-[15px] leading-[1.65] text-zinc-600 md:text-[16px]">{idea.body}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Closing: the footer doubles as the page's ending ---------- */}
            <Footer title={closing.title} subtitle={closing.body} showBackToTop />
        </main>
    );
}
