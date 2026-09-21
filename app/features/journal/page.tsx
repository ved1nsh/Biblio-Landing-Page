import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Book Journal — Biblio",
    description: "Every highlight and note you make, collected on one timeline.",
};

// What lands in the journal on its own, shown as a timeline.
const captured = [
    { id: 1, label: "Highlights", desc: "Every line you mark while reading, saved with the page it came from." },
    { id: 2, label: "Notes", desc: "Whatever you wrote in the margin, kept next to the passage that prompted it." },
    { id: 3, label: "AI explanations", desc: "The answers you asked for, so you don't have to ask twice." },
    { id: 4, label: "Scanned quotes", desc: "Lines you photographed from a paper book, typed out and searchable." },
];

export default function JournalFeaturePage() {
    return (
        <main className="site-scale w-full bg-[#EDEAE4] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
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
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">Book Journal</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Nothing you notice gets lost.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[460px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                Reading shouldn&apos;t be a temporary experience. Every highlight and note goes into a journal that
                                builds itself while you read.
                            </p>
                        </div>

                        <div className="relative mx-auto h-[460px] w-full max-w-[340px] md:h-[700px] md:w-[46%] md:max-w-[460px]">
                            <Image src="/images/journal/j1.png" alt="The Book Journal timeline" fill className="object-contain object-bottom" priority />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Timeline of what gets captured */}
            <ScrollReveal delayMs={40}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1040px]">
                        <h2
                            className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Four things, filed for you.
                        </h2>

                        {/* A line down the left, one dot per item */}
                        <ol className="mt-10 border-l border-zinc-300 md:mt-14">
                            {captured.map((item) => (
                                <li key={item.id} className="relative pl-8 pb-10 last:pb-0 md:pl-14">
                                    <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-zinc-900" />
                                    <p
                                        className="text-[24px] font-normal leading-[1.1] tracking-tight text-zinc-900 md:text-[34px]"
                                        style={{ fontFamily: "var(--font-stack-sans)" }}
                                    >
                                        {item.label}
                                    </p>
                                    <p className="mt-2 max-w-[620px] text-[16px] leading-[1.55] text-zinc-600 md:text-[19px]">{item.desc}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </ScrollReveal>

            {/* Highlight in the book, entry in the journal */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 pb-16 md:px-10 md:pb-24">
                    <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                        <div className="flex h-[520px] flex-col overflow-hidden rounded-[32px] bg-white px-7 pt-7 md:h-[640px] md:px-10 md:pt-10">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">While you read</p>
                            <p
                                className="mt-3 text-[24px] font-normal leading-[1.1] tracking-tight text-zinc-900 md:text-[32px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Mark the line.
                            </p>
                            <div className="relative mt-6 flex-1">
                                <Image src="/images/journal/j2.png" alt="A highlighted passage in the reader" fill className="object-contain object-bottom" />
                            </div>
                        </div>

                        <div className="flex h-[520px] flex-col overflow-hidden rounded-[32px] bg-zinc-950 px-7 pt-7 text-white md:h-[640px] md:px-10 md:pt-10">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-400">Later</p>
                            <p
                                className="mt-3 text-[24px] font-normal leading-[1.1] tracking-tight md:text-[32px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Find it again in seconds.
                            </p>
                            <div className="relative mt-6 flex-1">
                                <Image src="/images/journal/j1.png" alt="The journal timeline" fill className="object-contain object-bottom" />
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Closing statement */}
            <ScrollReveal delayMs={80}>
                <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-28">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p
                            className="text-[24px] font-normal leading-[1.12] tracking-tight md:text-[46px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            A second brain for everything you&apos;ve read.
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[26px] md:leading-[1.45]">
                            Sessions are filed in order, so the journal becomes a record of how your thinking changed, book by book.
                            Search it whenever a half-remembered line starts bothering you.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
