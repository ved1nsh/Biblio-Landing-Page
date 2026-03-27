"use client";

import { useRef, useState } from "react";

const painPoints = [
    {
        id: 1,
        title: "Fragmented Reading Tools",
        body: (
            <>
                <p className="mb-2">Readers often rely on multiple apps to manage their reading.</p>
                <ul className="mb-2 list-disc pl-5">
                    <li>One app to read ebooks</li>
                    <li>Another to track books</li>
                    <li>A separate dictionary for word meanings</li>
                    <li>Notes apps for saving quotes</li>
                </ul>
                <p>Switching between tools interrupts focus and breaks the natural reading flow.</p>
            </>
        ),
    },
    {
        id: 2,
        title: "Lack of Motivation to Read Consistently",
        body: (
            <p>
                Many readers begin books with enthusiasm but struggle to maintain regular reading habits.
                Without clear progress tracking, reminders, or habit-building tools, reading routines often fade quickly.
            </p>
        ),
    },
    {
        id: 3,
        title: "Lack of Reading Analytics",
        body: (
            <>
                <p className="mb-2">Most reading tools provide little visibility into reading habits. Readers cannot easily track:</p>
                <ul className="mb-2 list-disc pl-5">
                    <li>how long they read</li>
                    <li>how frequently they read</li>
                    <li>overall reading progress over time</li>
                </ul>
                <p>Without insights, it becomes difficult to stay motivated.</p>
            </>
        ),
    },
    {
        id: 4,
        title: "Physical and Digital Reading\nAre Disconnected",
        body: (
            <p>
                Many readers switch between physical books and digital formats.
                However, most apps only support one type of reading, making it difficult to track progress across different formats.
            </p>
        ),
    },
];

export default function PainPointsSection() {
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
        const clamped = Math.max(0, Math.min(painPoints.length - 1, nextIndex));

        if (clamped !== activeCard) setActiveCard(clamped);
    };

    return (
        <section
            className="w-full bg-[#F2EFE7] py-20 md:py-28"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto flex w-full max-w-[1400px] flex-col px-6 md:px-10">
                {/* Heading */}
                <div className="mb-10 flex max-w-[920px] flex-col items-center self-center text-center md:mb-16">
                    <h2
                        className="bg-gradient-to-r from-[#6F63FF] via-[#9B56D6] to-[#E654A4] bg-clip-text pb-2 text-[36px] font-normal leading-[1.1] tracking-[-0.04em] text-transparent md:pb-4 md:text-[88px] md:leading-[1.05]"

                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        User pain points
                    </h2>
                    <p className="mt-4 max-w-[540px] text-[16px] font-medium leading-[1.3] text-zinc-800 md:mt-6 md:text-[22px]">
                        Understanding the challenges readers face when using modern reading tools.
                    </p>
                </div>

                {/* Cards Track */}
                <div className="relative w-full">
                    <div
                        ref={trackRef}
                        onScroll={handleTrackScroll}
                        className="flex w-full gap-5 snap-x snap-mandatory scroll-smooth overflow-x-auto pb-8 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
                    >
                        {painPoints.map((point) => (
                            <article
                                key={point.id}
                                className="flex min-h-[460px] w-[92%] shrink-0 snap-start flex-col rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:min-h-[640px] md:w-[560px] md:rounded-[36px] md:px-12 md:py-14"
                            >
                                <h3
                                    className="mb-10 whitespace-pre-line text-[24px] font-medium leading-[1.12] tracking-tight text-black md:mb-12 md:text-[34px]"

                                >
                                    {point.title}
                                </h3>
                                <div className="text-[15px] leading-[1.7] text-zinc-700 md:text-[21px] md:leading-[1.75]">
                                    {point.body}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Scroll Indicators */}
                    <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
                        {painPoints.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${activeCard === idx
                                    ? "w-8 bg-zinc-800"
                                    : "w-2 bg-zinc-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
