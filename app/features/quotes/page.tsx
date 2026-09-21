import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Quote cards — Biblio",
    description: "Turn any line from a book into a card worth sharing.",
};

// Three things you can do to a card, with the matching screenshot.
const craftCards = [
    {
        id: 1,
        title: "Frame it",
        desc: "Turn any passage into a visual masterpiece. Biblio gives you the tools to frame your favourite quotes with professional precision.",
        image: "/images/quotes/q1.png",
    },
    {
        id: 2,
        title: "Colour it",
        desc: "Match the mood of the text. Apply vibrant colour palettes or immersive themes to give your notes a distinct soul.",
        image: "/images/quotes/q2.png",
    },
    {
        id: 3,
        title: "Send it",
        desc: "From your library to the world. One tap to export your high-resolution design straight to social media or your private cloud.",
        image: "/images/quotes/q3.png",
    },
];

const places = ["Instagram", "WhatsApp", "X", "Your notes app", "Your private cloud"];

export default function QuotesFeaturePage() {
    return (
        <main className="site-scale w-full bg-[#F5E6D3] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            <div className="px-6 pt-24 text-center md:px-10 md:pt-28">
                <Link href="/#tour" className="text-[14px] text-zinc-700 transition-opacity hover:opacity-70">
                    ← Back to home
                </Link>
            </div>

            {/* Hero: headline on the left, a real card and the editor on the right */}
            <ScrollReveal delayMs={20}>
                <section className="w-full overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-16">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:flex-row md:justify-between">
                        <div className="text-center md:w-[46%] md:text-left">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#A0582D]">Quote cards</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Some lines deserve better than a screenshot.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[460px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                Highlight a line, and Biblio turns it into something you would actually want to post.
                            </p>
                        </div>

                        {/* The finished card sits in front of the editor screen */}
                        <div className="relative mx-auto h-[420px] w-full max-w-[420px] md:h-[620px] md:w-[50%] md:max-w-[560px]">
                            <div className="absolute bottom-0 left-0 h-[86%] w-[62%] -rotate-3">
                                <Image src="/images/quotes/q1.png" alt="Making a quote card" fill className="object-contain object-bottom" />
                            </div>
                            <div className="absolute right-0 top-4 w-[58%] rotate-3 overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                                <Image
                                    src="/images/quotes/q3.png"
                                    alt="A finished quote card"
                                    width={1036}
                                    height={1036}
                                    className="h-auto w-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Why it matters: expression */}
            <ScrollReveal delayMs={40}>
                <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-28">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p
                            className="text-[24px] font-normal leading-[1.12] tracking-tight md:text-[46px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Reading is personal. Sharing it shouldn&apos;t be work.
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[26px] md:leading-[1.45]">
                            The line that stopped you mid-page says something about you. Don&apos;t just save a quote, create an
                            artifact. Biblio turns your highlights into cards designed to carry the feeling of the book, so what you
                            share looks like you meant it.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            {/* Craft: three steps, three screens */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2
                            className="max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Frame it, colour it, send it.
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:gap-5 lg:grid-cols-3">
                            {craftCards.map((card, i) => (
                                <div
                                    key={card.id}
                                    className="flex h-[560px] flex-col overflow-hidden rounded-[32px] bg-[#FBF6EE] p-7 md:h-[620px] md:p-9"
                                >
                                    <p className="text-[13px] tabular-nums text-zinc-400">0{i + 1}</p>
                                    <p
                                        className="mt-2 text-[24px] font-normal leading-[1.1] tracking-tight text-zinc-900 md:text-[30px]"
                                        style={{ fontFamily: "var(--font-stack-sans)" }}
                                    >
                                        {card.title}
                                    </p>
                                    <p className="mt-3 text-[15px] leading-[1.5] text-zinc-600 md:text-[16px]">{card.desc}</p>

                                    <div className="relative mt-6 flex-1">
                                        <Image src={card.image} alt={card.title} fill className="object-contain object-bottom" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Where cards end up */}
            <ScrollReveal delayMs={80}>
                <section className="w-full px-6 pb-20 md:px-10 md:pb-28">
                    <div className="mx-auto w-full max-w-[1240px] rounded-[36px] bg-white px-7 py-12 text-center md:px-16 md:py-20">
                        <h2
                            className="mx-auto max-w-[720px] text-[28px] font-normal leading-[1.08] tracking-tight text-zinc-900 md:text-[46px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            One tap, and it goes wherever you go.
                        </h2>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {places.map((place) => (
                                <span
                                    key={place}
                                    className="rounded-full border border-zinc-300 px-5 py-2.5 text-[14px] text-zinc-700 md:text-[16px]"
                                >
                                    {place}
                                </span>
                            ))}
                        </div>
                        <p className="mx-auto mt-8 max-w-[640px] text-[15px] leading-[1.55] text-zinc-600 md:text-[18px]">
                            High-resolution, no watermark on your words, and the book credited underneath.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
