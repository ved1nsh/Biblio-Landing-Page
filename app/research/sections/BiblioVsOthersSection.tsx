"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const comparisonCards = [
    {
        id: 1,
        title: "Biblio vs Librera",
        logo: "/images/logo/librera.png",
        logoAlt: "Librera logo",
        downloads: "10M+ downloads on Google Play",
        paragraphs: [
            "Librera Reader is a flexible ebook reader supporting formats like EPUB, PDF, and MOBI. With 10M+ downloads on the Play Store, it is popular among readers who manage large personal ebook libraries. The app offers strong customisation options, but its interface can feel complex and overwhelming.",
            "It focuses mainly on reading files and lacks tools for habit building, quote journaling, reading insights, or contextual assistance while reading.",
        ],
        link: "/research/biblio-vs-librera",
    },
    {
        id: 2,
        title: "Biblio vs Moon+ Reader",
        logo: "/images/logo/moonplus.png",
        logoAlt: "Moon+ Reader logo",
        downloads: "10M+ downloads on Google Play",
        paragraphs: [
            "Moon+ Reader is one of the most widely used ebook readers on Android, with 10M+ downloads. It provides extensive customization options for fonts, layouts, and themes, making it a powerful reading tool.",
            "However, the experience can feel cluttered and feature-heavy for new users. The app focuses primarily on reading files and does not provide structured reading habits, quote management, or contextual tools to help understand text while reading.",
        ],
        link: "/research/biblio-vs-moonplus",
    },
    {
        id: 3,
        title: "Biblio vs ReadEra",
        logo: "/images/logo/readera.png",
        logoAlt: "ReadEra logo",
        downloads: "40M+ downloads on Google Play",
        paragraphs: [
            "ReadEra is a lightweight ebook reader with 40M+ downloads on the Play Store. It supports multiple formats and works fully offline, making it popular for simple document reading.",
            "While the interface is clean and easy to use, the app is designed mainly as a document reader rather than a reading companion. It lacks features like reading streaks, deep reading analytics, quote journaling, and tools that help readers understand complex passages.",
        ],
        link: "/research/biblio-vs-readera",
    },
    {
        id: 4,
        title: "Biblio vs Bookly",
        logo: "/images/logo/bookly.png",
        logoAlt: "Bookly logo",
        downloads: "1M+ downloads on Google Play",
        paragraphs: [
            "Bookly focuses on helping readers track their reading habits and has 1M+ downloads on the Play Store. The app offers reading timers, statistics, and motivational tracking features that encourage consistent reading.",
            "However, it does not support reading ebooks inside the app itself, requiring users to manually log their reading sessions. It also lacks tools for understanding text, saving meaningful quotes, or integrating the full reading experience into one platform.",
        ],
        link: "/research/biblio-vs-bookly",
    },
    {
        id: 5,
        title: "Biblio vs StoryGraph",
        logo: "/images/logo/storygraph.png",
        logoAlt: "StoryGraph logo",
        downloads: "1M+ downloads on Google Play",
        paragraphs: [
            "StoryGraph is a book tracking platform with 1M+ downloads on the Play Store that helps readers organize their libraries and discover new books. It provides detailed reading statistics and personalized recommendations based on reading preferences.",
            "However, the platform focuses mainly on tracking books rather than the reading experience itself. It does not include an ebook reader, quote journaling tools, or contextual assistance to help readers understand difficult passages.",
        ],
        link: "/research/biblio-vs-storygraph",
    },
];

export default function BiblioVsOthersSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);

    const handleTrackScroll = () => {
        const track = trackRef.current;
        if (!track) return;

        const firstCard = track.firstElementChild as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = Number.parseFloat(
            window.getComputedStyle(track).columnGap || "0",
        );
        const span = cardWidth + (isNaN(gap) ? 0 : gap);

        const nextIndex = Math.round(track.scrollLeft / span);
        const clampedIndex = Math.max(
            0,
            Math.min(comparisonCards.length - 1, nextIndex),
        );

        if (clampedIndex !== activeCard) {
            setActiveCard(clampedIndex);
        }
    };

    return (
        <section
            className="w-full bg-[#F2EFE7] px-6 pb-6 pt-10 md:px-10 md:pb-8 md:pt-16"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
                <div className="max-w-[860px] text-center">
                    <h2
                        className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] bg-clip-text text-[44px] font-normal leading-[0.98] tracking-tight text-transparent md:text-[84px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Biblio vs Others
                    </h2>
                    <p className="mx-auto mt-5 max-w-[1280px] text-[18px] leading-[1.28] text-zinc-800 md:mt-6 md:text-[28px]">
                        This section explores the digital reading ecosystem, analyzing popular reading tools and identifying key user pain points. The insights gathered here helped shape the features and design decisions behind Biblio.
                    </p>
                </div>

                <div className="mt-8 w-full overflow-hidden md:mt-10">
                    <div
                        ref={trackRef}
                        onScroll={handleTrackScroll}
                        className="flex w-full gap-5 snap-x snap-mandatory scroll-smooth overflow-x-auto pb-8 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
                    >
                        {comparisonCards.map((card) => (
                            <article
                                key={card.id}
                                className="w-full shrink-0 snap-start overflow-hidden rounded-[34px] bg-black px-8 py-10 text-white md:rounded-[40px] md:px-10 md:py-12"
                            >
                                <div className="flex flex-col gap-8 md:grid md:grid-cols-[320px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
                                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                                        <h3
                                            className="text-[26px] font-medium leading-[1.1] tracking-tight md:text-[38px]"
                                            style={{ fontFamily: "var(--font-stack-sans)" }}
                                        >
                                            {card.title}
                                        </h3>

                                        <div className="relative mt-8 h-[118px] w-[118px] md:mt-10 md:h-[132px] md:w-[132px]">
                                            <Image
                                                src={card.logo}
                                                alt={card.logoAlt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        <p
                                            className="mt-7 max-w-[280px] text-[19px] font-medium leading-[1.18] text-white md:mt-8 md:max-w-none md:text-[28px]"
                                            style={{ fontFamily: "var(--font-stack-sans)" }}
                                        >
                                            {card.downloads}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center gap-7 md:gap-8">
                                        {card.paragraphs.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-[18px] leading-[1.34] text-zinc-400 md:text-[30px] md:leading-[1.45]"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}

                                        {/* <div className="mt-2 md:mt-4">
                                            <Link
                                                href={card.link}
                                                className="inline-flex items-center gap-2 text-[16px] font-medium text-[#95A3FF] transition-colors hover:text-white md:text-[20px]"
                                            >
                                                Read Full Comparison
                                                <svg
                                                    className="h-5 w-5 md:h-6 md:w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-3">
                        {comparisonCards.map((_, index) => (
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
