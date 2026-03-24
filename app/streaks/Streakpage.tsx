"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const highlightCards = [
    {
        id: 1,
        title: "Track your daily momentum.",
        description:
            "Stay aware of your progress with a streak system that keeps your reading rhythm visible and motivating every day.",
        image: "/images/streaks/images1.png",
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
    const stackSectionRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const [stackProgress, setStackProgress] = useState(0);

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

    useEffect(() => {
        const onScroll = () => {
            const el = stackSectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrolled = Math.max(0, -rect.top);
            const progress = scrolled / window.innerHeight;
            setStackProgress(Math.min(progressionSteps.length - 1, progress));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <main
            className="w-full bg-white text-black"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >            <ScrollReveal delayMs={20}>
                <Navbar />
            </ScrollReveal>
            <ScrollReveal delayMs={20}>
                <Navbar />
            </ScrollReveal>

            <ScrollReveal delayMs={40}>
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
            </ScrollReveal>

            <ScrollReveal delayMs={60}>
                <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-24">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p className="text-[22px] font-normal leading-[1.15] tracking-tight md:text-[42px]" style={{ fontFamily: "var(--font-stack-sans)" }}>
                            Consistency deserves a better system.
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[28px] md:leading-[1.45]">
                            Biblio transforms reading into a rewarding journey. Complete daily reading goals to earn XP, level up, and maintain your streak. Achievements mark your progress, while earned XP can be used to restore streaks when life gets in the way—keeping you motivated, consistent, and always moving forward.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
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
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
                <section
                    ref={stackSectionRef}
                    className="relative w-full bg-[#EDEAE4]"
                    style={{ height: `calc(${progressionSteps.length} * 100vh)` }}
                >
                    <div className="sticky top-0 h-screen overflow-hidden">
                        {progressionSteps.map((step, i) => {
                            const n = progressionSteps.length;
                            const past = Math.max(0, Math.min(1, stackProgress - i));
                            const upcoming = Math.max(0, i - stackProgress);
                            const scale = past > 0
                                ? 1 - past * 0.08
                                : Math.max(0.88, 1 - upcoming * 0.04);
                            const translateY = past > 0 ? -past * 100 : 0;

                            return (
                                <div
                                    key={step.id}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        zIndex: (n - i) * 10,
                                        transform: `translateY(${translateY}%) scale(${scale})`,
                                        transformOrigin: "top center",
                                    }}
                                    className="flex items-center justify-center px-4 pt-10 pb-6 md:block md:px-8 md:pt-24 md:pb-8"
                                >
                                    <div className="mx-auto h-auto w-full max-w-310 md:h-full">
                                        <article className="h-[84vh] min-h-155 w-full overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_16px_45px_rgba(24,24,24,0.14)] md:h-full md:min-h-0 md:rounded-[36px]">
                                            <div className="relative h-full md:flex md:items-center">
                                                <div className="absolute inset-0 md:relative md:h-full md:w-[56%] md:border-r md:border-zinc-100">
                                                    <Image
                                                        src={step.image}
                                                        alt={step.title}
                                                        fill
                                                        className="object-contain object-center p-2 md:object-contain md:object-bottom md:p-8"
                                                        sizes="(min-width: 768px) 56vw, 100vw"
                                                    />
                                                </div>

                                                <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-[46%] w-full flex-col justify-end bg-linear-to-t from-black/95 via-black/75 to-transparent px-6 pt-7 pb-10 text-center text-white md:static md:min-h-0 md:w-[44%] md:justify-center md:bg-none md:px-10 md:py-8 md:text-left md:text-zinc-900 lg:px-12">
                                                    <p className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-200 md:text-zinc-400">
                                                        {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                                                    </p>
                                                    <h3
                                                        className="text-[30px] font-normal leading-[1.02] tracking-tight md:text-[34px]"
                                                        style={{ fontFamily: "var(--font-stack-sans)" }}
                                                    >
                                                        {step.title}
                                                    </h3>
                                                    <p className="mt-3 text-[16px] leading-[1.35] text-zinc-100 md:text-[17px] md:leading-normal md:text-zinc-600">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </section>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
                <Footer />
            </ScrollReveal>

        </main>
    );
}

