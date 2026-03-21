"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

const featureCards = [
    {
        id: 1,
        title: "Organize without limits.",
        description:
            "Use the dynamic shelf-builder to group books by genre, author, or even specific moods. Your library adapts to how you think, letting you define the categories that matter most to your collection.",
    },
    {
        id: 2,
        title: "Visual Clarity.",
        description:
            "High-resolution cover art meets intuitive progress tracking. See exactly how far you are in any book with built-in progress bars and real-time status indicators.",
    },
    {
        id: 3,
        title: "Every book has a story.",
        description:
            "Tap any book to reveal its \"DNA.\" Instantly view page counts, update your progress, or jump straight into your Book Journal to revisit your past notes and highlights.",
    },
    {
        id: 4,
        title: "Add, Move, Manage.",
        description:
            "Easily migrate books between shelves or remove them from your library. Biblio gives you the tools to keep your digital space as curated or as expansive as your physical one.",
    },
];

export default function LibraryPage() {
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

            <section className="w-full overflow-hidden bg-[#EDEAE4] px-6 pt-24 pb-8 md:px-10 md:pt-28 md:pb-12">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
                    <div className="md:w-[44%] md:max-w-[520px]">
                        <h1
                            className="max-w-[360px] text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:max-w-none md:text-[76px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Your personal library, digitised.
                        </h1>
                        <p className="mt-4 max-w-[340px] text-[16px] leading-[1.35] text-zinc-700 md:mt-6 md:max-w-[560px] md:text-[26px]">
                            The ultimate digital home for your physical and digital books.
                        </p>
                    </div>

                    <div className="mt-8 w-full max-w-[360px] md:mt-0 md:w-[50%] md:max-w-[520px]">
                        <div className="relative h-[520px] w-full md:h-[780px]">
                            <Image
                                src="/images/library/ll1.png"
                                alt="Library screen preview"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-24">
                <div className="mx-auto max-w-[1020px] text-center">
                    <p
                        className="text-[22px] font-normal leading-[1.15] tracking-tight md:text-[42px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        More than just a list. It’s an ecosystem.
                    </p>
                    <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[28px] md:leading-[1.45]">
                        Biblio’s library system is designed for the modern collector. Whether it’s a physical copy on your nightstand or a digital file in the cloud, our interface brings them together. Categorize your world with fully customizable shelves—tailored exactly to your reading habits—and dive deep into your personal data with a single tap. This is your digital bookshelf, built to reflect your unique library.
                    </p>
                </div>
            </section>

            <section className="w-full bg-[#EDEAE4] px-6 md:px-10">
                <div className="relative mx-auto h-[560px] w-full max-w-[382px] md:h-[860px] md:max-w-[860px]">
                    <Image
                        src="/images/library/l2.png"
                        alt="Library detail view"
                        fill
                        className="object-contain object-top"
                    />
                </div>
            </section>

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
                                className="max-w-[640px] text-[28px] font-normal leading-[1.05] tracking-tight text-zinc-900 md:text-[48px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                {card.title}
                            </h3>
                            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.5] text-zinc-600 md:mt-6 md:text-[20px] md:leading-[1.55]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

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

            <section className="w-full bg-[#EDEAE4] px-6 md:px-10">
                <div className="relative mx-auto aspect-square w-full max-w-[760px] overflow-hidden md:h-[860px] md:max-w-[860px]">
                    <div className="absolute inset-x-0 top-4 bottom-0 md:top-6">
                        <Image
                            src="/images/library/l3.png"
                            alt="Library shelves view"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
