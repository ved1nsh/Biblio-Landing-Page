import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Physical books — Biblio",
    description: "Focus Mode, scanned quotes and camera questions for the paper books on your shelf.",
};

// The four things you can do during a physical reading session.
const tools = [
    {
        id: 1,
        name: "Focus Mode",
        desc: "A deep-black screen with nothing on it. Biblio counts the minutes in the background, so your streak stays alive while your phone stays boring.",
    },
    {
        id: 2,
        name: "Scan Quote",
        desc: "Point the camera at a printed passage and it becomes typed, searchable text, filed in your journal or ready to share as a card.",
    },
    {
        id: 3,
        name: "Ask AI",
        desc: "A diagram you can't parse, a term you don't know. Ask about it without putting the book down.",
    },
    {
        id: 4,
        name: "Voice Note",
        desc: "Say the thought out loud while it's fresh. It lands in the journal with everything else from that session.",
    },
];

export default function PhysicalBookPage() {
    return (
        <main className="site-scale w-full bg-[#F8EFD9] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            <div className="px-6 pt-24 text-center md:px-10 md:pt-28">
                <Link href="/#tour" className="text-[14px] text-zinc-700 transition-opacity hover:opacity-70">
                    ← Back to home
                </Link>
            </div>

            {/* Hero */}
            <ScrollReveal delayMs={20}>
                <section className="w-full overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-16">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:flex-row md:justify-between">
                        <div className="text-center md:w-[46%] md:text-left">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#B4762A]">Physical books</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Paper books count too.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                Put the books from your shelf into your library, then read them with the app in your pocket instead of
                                in your way.
                            </p>
                        </div>

                        <div className="relative mx-auto h-[460px] w-full max-w-[340px] md:h-[700px] md:w-[46%] md:max-w-[460px]">
                            <Image src="/images/physicalbook/p1.png" alt="A physical book session in Biblio" fill className="object-contain object-bottom" priority />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* The session itself */}
            <ScrollReveal delayMs={40}>
                <section className="w-full bg-white px-6 pt-16 md:px-10 md:pt-24">
                    <div className="mx-auto w-full max-w-[1100px] text-center">
                        <h2
                            className="mx-auto max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Start a session. Put the phone down.
                        </h2>
                        <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-[1.5] text-zinc-700 md:text-[20px]">
                            Pick a stopwatch, a Pomodoro, or your own timer, then read. The minutes go to your streak and your stats
                            without you logging a thing.
                        </p>

                        <div className="relative mx-auto mt-10 h-[380px] w-full max-w-[760px] md:mt-14 md:h-[620px]">
                            <Image src="/images/physicalbook/p2.png" alt="The reading session timer" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Four tools */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2
                            className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[52px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Four buttons, that&apos;s the whole interface.
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
                            {tools.map((tool) => (
                                <div key={tool.id} className="rounded-[28px] bg-white p-7 md:p-9">
                                    <p className="text-[13px] tabular-nums text-zinc-400">0{tool.id}</p>
                                    <p
                                        className="mt-2 text-[24px] font-normal leading-[1.1] tracking-tight text-zinc-900 md:text-[30px]"
                                        style={{ fontFamily: "var(--font-stack-sans)" }}
                                    >
                                        {tool.name}
                                    </p>
                                    <p className="mt-3 text-[15px] leading-[1.55] text-zinc-600 md:text-[17px]">{tool.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-[28px] bg-[#FDF8EC] md:mt-8 md:h-[420px]">
                            <Image src="/images/physicalbook/p3.png" alt="Focus Mode, Scan Quote, Ask AI and Voice Note" fill className="object-contain" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Where it all ends up */}
            <ScrollReveal delayMs={80}>
                <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-28">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p
                            className="text-[24px] font-normal leading-[1.12] tracking-tight md:text-[46px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Your shelf, now fully digital.
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[26px] md:leading-[1.45]">
                            Every quote you scan, every answer you ask for and every note you speak during a paper session lands in the
                            same journal as your ebooks. A temporary read becomes a permanent record.
                        </p>
                        <Link
                            href="/features/journal"
                            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-medium text-zinc-900 transition-opacity hover:opacity-85 md:text-[16px]"
                        >
                            See the Book Journal →
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
