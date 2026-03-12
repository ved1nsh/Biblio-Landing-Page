"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";

const featureCards = [
    {
        id: 1,
        title: "Focus Mode",
        description:
            "Activate a minimalist, deep-black interface designed to eliminate digital noise. While you immerse yourself in the page, Biblio's background engine tracks every minute, ensuring your reading streak stays alive without a single distraction.",
    },
    {
        id: 2,
        title: "Scan Quote",
        description:
            "Capture any physical passage with a tap. Our high-precision OCR instantly transforms printed text into searchable quotes, ready to be archived in your personal journal or shared with the world.",
    },
    {
        id: 3,
        title: "Ask AI",
        description: "Point your camera at a complex diagram or unfamiliar term. Biblio’s contextual AI analyzes the visual data to provide instant clarity without you ever putting the book down."
    },
    {
        id: 4,
        title: "Your Intellectual Archive",
        description: "Every highlight captured and note written during your physical session is automatically woven into a searchable, chronological journal. It transforms a temporary reading experience into a permanent \"second brain\" that tracks your intellectual evolution over time.",
    },
];

export default function PhysicalBookPage() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);

    const handleTrackScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const firstCard = track.firstElementChild as HTMLElement;
        if (!firstCard) return;
        const cardWidth = firstCard.offsetWidth;
        const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
        const span = cardWidth + (isNaN(gap) ? 0 : gap);
        const nextIndex = Math.round(track.scrollLeft / span);
        const clamped = Math.max(0, Math.min(featureCards.length - 1, nextIndex));
        if (clamped !== activeCard) setActiveCard(clamped);
    };

    return (
        <main
            className="w-full bg-[#EDEAE4] text-black"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <Navbar />

            {/* ── Section 1: Intro ── */}
            <section className="w-full overflow-hidden bg-[#EDEAE4] px-6 pt-24 pb-8 md:px-10 md:pt-28 md:pb-12">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
                    <div className="md:w-[44%] md:max-w-[520px]">
                        <h1
                            className="max-w-[360px] text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:max-w-none md:text-[76px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Digital Intelligence for Physical Books.
                        </h1>
                        <p className="mt-4 max-w-[340px] text-[16px] leading-[1.35] text-zinc-700 md:mt-6 md:max-w-[560px] md:text-[26px]">
                            Biblio bridges the gap between your analog bookshelf and your digital brain.
                        </p>
                    </div>

                    <div className="mt-8 w-full max-w-[360px] md:mt-0 md:w-[50%] md:max-w-[520px]">
                        <div className="relative h-[520px] w-full md:h-[780px]">
                            <Image
                                src="/images/physicalbook/p1.png"
                                alt="Physical Book Session screen preview"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Black intro ── */}
            <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-24">
                <div className="mx-auto max-w-[1020px] text-center">
                    <p
                        className="text-[22px] font-normal leading-[1.15] tracking-tight md:text-[42px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Your shelf, now fully digital.
                    </p>
                    <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[28px] md:leading-[1.45]">
                        The Physical Reading Ecosystem in Biblio is designed to bring your offline library into the digital age
                        without losing the tactile feel of a real book. It allows you to digitize your personal shelf by
                        &ldquo;uploading&rdquo; your physical collection into a unified dashboard where you can track every session,
                        automate your streaks, and archive your handwritten insights into a searchable, permanent journal.
                    </p>
                </div>
            </section>

            {/* ── Section 3: Fixed image (p2) ── */}
            <section className="w-full bg-[#EDEAE4] px-6 pt-10 md:px-10 md:pt-14">
                <div className="relative mx-auto aspect-square w-full max-w-[760px] md:h-[860px] md:max-w-[860px]">
                    <Image
                        src="/images/physicalbook/p2.png"
                        alt="Physical book session detail"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            {/* ── Section 4: Swipeable text-only cards ── */}
            <section className="relative w-full overflow-hidden bg-white">
                <div
                    ref={trackRef}
                    onScroll={handleTrackScroll}
                    className="flex snap-x snap-mandatory scroll-smooth overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex aspect-square w-full shrink-0 snap-start flex-col items-center justify-center px-8 text-center md:aspect-auto md:h-[480px] md:px-16"
                        >
                            <h3
                                className="text-[28px] font-normal leading-[1.05] tracking-tight text-zinc-900 md:text-[48px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                {card.title}
                            </h3>
                            <p className="mt-4 max-w-[540px] text-[15px] leading-[1.5] text-zinc-600 md:mt-6 md:text-[20px] md:leading-[1.55]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-3 pb-6 pt-2">
                    {featureCards.map((_, dotIndex) => (
                        <span
                            key={dotIndex}
                            className={`rounded-full transition-all duration-300 ${activeCard === dotIndex
                                ? "h-2 w-7 bg-zinc-700/80"
                                : "h-2 w-2 bg-zinc-400/60"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* ── Section 5: Fixed image (p3) ── */}
            <section className="w-full bg-[#EDEAE4] px-6 md:px-10">
                <div className="relative mx-auto aspect-square w-full max-w-[760px] overflow-hidden md:h-[860px] md:max-w-[860px]">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/physicalbook/p33.png"
                            alt="Physical book reading detail"
                            fill
                            className="object-contain object-top"
                        />
                    </div>
                </div>
            </section>

            {/* ── Footer CTA ── */}
            <Footer />
        </main>
    );
}
