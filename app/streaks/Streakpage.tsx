"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";

const highlightCards = [
    {
        id: 1,
        title: "Track your daily momentum.",
        description:
            "Stay aware of your progress with a streak system that keeps your reading rhythm visible and motivating every day.",
        image: "/images/streaks/S1.png",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[80%] w-[86%] -translate-x-1/2 md:h-[92%] md:w-[92%]",
        imageClass: "object-contain object-bottom",
    },
    {
        id: 2,
        title: "Gentle accountability, built in.",
        description:
            "Biblio helps readers stay consistent with clean reminders, weekly pacing, and a streak experience that feels rewarding instead of stressful.",
        image: "/images/streaks/s2.png",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[81%] w-[88%] -translate-x-1/2 md:h-[92%] md:w-[94%]",
        imageClass: "object-contain object-bottom",
    },
    {
        id: 3,
        title: "Celebrate progress that compounds.",
        description:
            "Turn small reading sessions into long-term consistency with visual milestones that make each session feel meaningful.",
        image: "/images/streaks/s3.png",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[81%] w-[88%] -translate-x-1/2 md:h-[92%] md:w-[94%]",
        imageClass: "object-contain object-bottom",
    },
];

const progressionSteps = [
    {
        id: 1,
        title: "Earn Your Expertise.",
        description:
            "Every minute of focus counts. Reach your daily reading goal—whether it's 5 minutes or 50—to earn XP and fuel your ascent.",
        image: "/images/streaks/ss1.png",
    },
    {
        id: 2,
        title: "Collect Your Trophies.",
        description:
            "Move beyond the basics. Complete unique challenges and unlock rare achievements to earn massive XP boosts and expand your digital trophy case.",
        image: "/images/streaks/ss2.png",
    },
    {
        id: 3,
        title: "Level Up Your Library.",
        description:
            "Watch your status evolve. As your total XP climbs, you'll rise through custom-designed tiers, from a humble Page Turner to a legendary Literary Master.",
        image: "/images/streaks/ss3.png",
    },
    {
        id: 4,
        title: "The Ultimate Safety (Streak Restores)",
        description:
            "Your hard-earned XP is more than just a score. Use it as currency to purchase Streak Restores, ensuring that life's interruptions never break your momentum.",
        image: "/images/streaks/ss4.png",
    },
];

export default function StreaksPage() {
    const trackRef = useRef<HTMLDivElement>(null);
    const progressionTrackRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const [activeProgressionStep, setActiveProgressionStep] = useState(0);

    const makeScrollHandler = (
        ref: React.RefObject<HTMLDivElement | null>,
        length: number,
        setter: (i: number) => void,
        current: number
    ) => () => {
        const track = ref.current;
        if (!track) return;
        const firstCard = track.firstElementChild as HTMLElement;
        if (!firstCard) return;
        const cardWidth = firstCard.offsetWidth;
        const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
        const span = cardWidth + (isNaN(gap) ? 0 : gap);
        const nextIndex = Math.round(track.scrollLeft / span);
        const clamped = Math.max(0, Math.min(length - 1, nextIndex));
        if (clamped !== current) setter(clamped);
    };

    const handleTrackScroll = makeScrollHandler(trackRef, highlightCards.length, setActiveCard, activeCard);
    const handleProgressionScroll = makeScrollHandler(progressionTrackRef, progressionSteps.length, setActiveProgressionStep, activeProgressionStep);

    return (
        <main
            className="w-full bg-white text-black"
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
                            Streaks that keep your reading alive.
                        </h1>

                        <p className="mt-4 max-w-[340px] text-[16px] leading-[1.35] text-zinc-700 md:mt-6 md:max-w-[560px] md:text-[26px]">
                            Build momentum, stay consistent, and turn reading into a habit that lasts.
                        </p>
                    </div>

                    <div className="mt-8 w-full max-w-[360px] md:mt-0 md:w-[50%] md:max-w-[520px]">
                        <div className="relative h-[520px] w-full md:h-[780px]">
                            <Image
                                src="/images/streak.png"
                                alt="Biblio streaks feature preview"
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
                    <p className="text-[22px] font-normal leading-[1.15] tracking-tight md:text-[42px]" style={{ fontFamily: "var(--font-stack-sans)" }}>
                        Consistency deserves a better system.
                    </p>
                    <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[28px] md:leading-[1.45]">
                        Dummy intro copy goes here. This section will introduce how Biblio rethinks streaks with a calmer,
                        more intentional approach to motivation. It can later be replaced with the final product narrative.
                    </p>
                </div>
            </section>

            <section className="w-full bg-white px-6 py-18 md:px-10 md:py-24">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col">
                    <div className="max-w-[860px]">
                        <h2
                            className="text-left text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[76px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Highlights
                        </h2>
                    </div>

                    <div className="mt-8 w-full overflow-hidden md:mt-10">
                        <div
                            ref={trackRef}
                            onScroll={handleTrackScroll}
                            className="flex gap-4 snap-x snap-mandatory scroll-smooth overflow-x-auto pb-3 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
                        >
                            {highlightCards.map((card) => (
                                <article
                                    key={card.id}
                                    className="relative flex h-[620px] w-[92%] shrink-0 snap-start flex-col overflow-hidden rounded-[34px] bg-[#F4F2EC] md:h-[620px] md:w-full md:flex-row md:rounded-[40px]"
                                >
                                    <div className="px-6 pt-8 text-center md:flex md:w-[42%] md:flex-col md:justify-center md:px-12 md:pt-0 md:text-left lg:px-16">
                                        <h3
                                            className="text-[26px] font-medium leading-[1.08] tracking-tight text-zinc-900 md:text-[36px]"
                                            style={{ fontFamily: "var(--font-stack-sans)" }}
                                        >
                                            {card.title}
                                        </h3>
                                        <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.38] text-zinc-700 md:mx-0 md:mt-6 md:max-w-none md:text-[24px] md:leading-[1.42]">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="relative mt-2 flex-1 overflow-hidden md:mt-0 md:w-[58%] md:flex-none">
                                        <div className={card.imageWrapperClass}>
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className={card.imageClass}
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-3">
                            {highlightCards.map((_, index) => (
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

            <section className="relative w-full overflow-hidden bg-[#EDEAE4]">
                <div
                    ref={progressionTrackRef}
                    onScroll={handleProgressionScroll}
                    className="flex h-screen snap-x snap-mandatory scroll-smooth overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {progressionSteps.map((step) => (
                        <div
                            key={step.id}
                            className="flex h-full w-full shrink-0 snap-start flex-col items-center px-6 pt-24 pb-6 md:px-10 md:pt-28 md:pb-8"
                        >
                            {/* Small text at top */}
                            <div className="w-full max-w-[600px] text-center">
                                <h3
                                    className="text-[22px] font-normal leading-[1.05] tracking-tight text-zinc-900 md:text-[32px]"
                                    style={{ fontFamily: "var(--font-stack-sans)" }}
                                >
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-[14px] leading-[1.4] text-zinc-600 md:text-[17px]">
                                    {step.description}
                                </p>
                            </div>

                            {/* Big image */}
                            <div className="relative mt-6 w-full max-w-[520px] flex-1 md:max-w-[640px]">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain object-bottom"
                                    sizes="(min-width: 768px) 640px, 100vw"
                                />
                            </div>

                        </div>
                    ))}
                </div>

                <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-3 md:bottom-10">
                    {progressionSteps.map((_, dotIndex) => (
                        <span
                            key={dotIndex}
                            className={`rounded-full transition-all duration-300 ${activeProgressionStep === dotIndex
                                ? "h-2 w-7 bg-zinc-700/80"
                                : "h-2 w-2 bg-zinc-400/60"
                                }`}
                        />
                    ))}
                </div>
            </section>

            <section
                className="w-full bg-white px-6 py-14 text-black md:px-10 md:py-16"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
                    <p
                        className="text-[32px] font-normal leading-[1.08] tracking-tight text-zinc-900 md:text-[56px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Biblio
                    </p>
                    <p
                        className="mt-2 text-[24px] font-light leading-[1.08] tracking-slug text-zinc-900 md:mt-3 md:text-[30px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        All this and much more
                    </p>
                    <button className="mt-8 rounded-full bg-zinc-800 px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80 md:mt-10 md:px-6 md:py-3 md:text-sm">
                        Download now
                    </button>

                    <p className="mt-8 max-w-[820px] text-center text-[11px] leading-[1.5] text-zinc-500 md:mt-10 md:text-xs">
                        Note: The market analysis and competitive research presented on this site were conducted for educational and portfolio purposes to demonstrate product strategy and user experience design principles. All brand names and trademarks are the property of their respective owners.
                    </p>
                </div>
            </section>
        </main>
    );
}

