"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const cards = [
    {
        id: 1,
        title: "Your Ultimate Reading Headquarters",
        desc: "Whether it’s an ePub, a PDF, Biblio handles your formats with a beautiful, unified reading experience.",
        image: "/images/page2/page2one.png",
        href: "/features",
    },
    {
        id: 2,
        title: "Read with an AI companion.",
        desc: "Don't just consume text—interact with it. Highlight to get instant context, definitions, or summaries powered by advanced AI.",
        image: "/images/page2/page2two.png",
        href: "/features",
    },
    {
        id: 3,
        title: "Built for the consistent reader.",
        desc: "Stay motivated with smart streaks and progress tracking. Biblio turns your reading goals into a rewarding daily habit.",
        image: "/images/page2/page2three.png",
        href: "/streaks",
    },
    {
        id: 4,
        title: "Your insights, archived forever.",
        desc: "Every quote you save and every note you write is synced to your personal journal, creating a searchable second brain of your knowledge.",
        image: "/images/pybook.png",
        href: "/physicalbook",
    },
    {
        id: 5,
        title: "Your insights, archived forever.",
        desc: "Every quote you save and every note you write is synced to your personal journal, creating a searchable second brain of your knowledge.",
        image: "/images/library.png",
        href: "/library",
    },
];

export default function PageTwoSection() {
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
        const clampedIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));

        if (clampedIndex !== activeCard) {
            setActiveCard(clampedIndex);
        }
    };

    return (
        <section
            className="w-full overflow-hidden"
            style={{ backgroundColor: "#EDEAE4", fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto flex w-full max-w-[1400px] flex-col px-6 py-16 md:px-10 md:py-24">
                <div className="text-center">
                    <h2
                        className="text-4xl font-normal leading-tight tracking-tight text-zinc-900 md:text-7xl"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        one app, countless features
                    </h2>
                    <p className="mt-2 text-lg text-[#8a7e6b] md:text-3xl">All this and much more</p>
                </div>

                <div className="mt-8 overflow-hidden md:mt-10">
                    <div className="mx-auto max-w-[1180px]">
                        <div
                            ref={trackRef}
                            onScroll={handleTrackScroll}
                            className="flex gap-4 snap-x snap-mandatory scroll-smooth overflow-x-auto pb-3 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
                        >
                            {cards.map((card) => (
                                <article
                                    key={card.id}
                                    className="relative flex h-[760px] w-[calc(100%-1rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[34px] bg-[#F7F7F9] md:h-[720px] md:w-[calc(100%-1.5rem)] md:flex-row md:rounded-[40px]"
                                >
                                    <div className="px-7 pt-10 text-center md:flex md:w-[42%] md:flex-col md:justify-center md:px-12 md:pt-0 md:text-left lg:px-16">
                                        <h3
                                            className="text-[24px] font-medium leading-[1.08] tracking-tight text-zinc-900 md:text-[42px] lg:text-[48px]"
                                            style={{ fontFamily: "var(--font-stack-sans)" }}
                                        >
                                            {card.title}
                                        </h3>

                                        <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.35] text-zinc-700 md:mx-0 md:mt-5 md:max-w-none md:text-[18px] md:leading-[1.4] lg:text-[20px]">
                                            {card.desc}
                                        </p>

                                        <Link
                                            href={card.href}
                                            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm text-white transition-opacity hover:opacity-85 md:mt-7 md:px-6 md:py-2.5 md:text-[16px] lg:px-7 lg:text-[18px]"
                                        >
                                            Learn More
                                            <Image
                                                src="/images/page2/arrow.png"
                                                alt="Arrow"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5"
                                            />
                                        </Link>
                                    </div>

                                    <div className="relative mt-4 flex-1 overflow-hidden md:mt-0 md:w-[58%] md:flex-none">
                                        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[94%] w-[122%] -translate-x-1/2 md:h-[96%] md:w-[94%]">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-3">
                        {cards.map((_, index) => (
                            <span
                                key={index}
                                className={`rounded-full transition-all duration-300 ${activeCard === index
                                    ? "h-2 w-7 bg-zinc-700/80"
                                    : "h-2 w-2 bg-zinc-400/60"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
