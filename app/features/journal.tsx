"use client";

import Image from "next/image";
import { Fragment } from "react";

const journalCards = [
    {
        id: 1,
        kind: "text" as const,
        title: "A Timeline of Your\nGrowth.",
        description:
            "Reading shouldn't be a temporary experience. Biblio automatically organizes your highlights and insights into a beautiful, searchable journal that grows with you.",
        containerClass: "p-8 md:p-12 justify-center",
        titleClass:
            "text-[26px] md:text-[24px] lg:text-[32px] font-medium leading-[1.08] tracking-tight text-zinc-900 whitespace-pre-line",
        descClass:
            "mt-6 text-[15px] md:text-[14px] lg:text-[18px] leading-[1.35] text-zinc-800 tracking-tight",
    },
    {
        id: 2,
        kind: "image" as const,
        image: "/images/journal/j2.png",
        caption:
            "Every highlight you make is instantly captured in your Book Journal. Your reading sessions are organized chronologically, creating a permanent timeline of your thoughts and discoveries.",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[88%] w-[95%] -translate-x-1/2 sm:h-[92%] md:h-[95%]",
        imageClass: "object-contain object-bottom",
    },
    {
        id: 3,
        kind: "image" as const,
        image: "/images/journal/j1.png",
        caption:
            "Biblio's Book Journal automatically captures every highlight, note, and thought you have while reading, organizing them into a beautifully designed timeline that chronicles your intellectual evolution.",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[88%] w-[95%] -translate-x-1/2 sm:h-[92%] md:h-[95%]",
        imageClass: "object-contain object-bottom",
    },
];

export default function PageSevenSection() {
    return (
        <section
            className="w-full overflow-hidden bg-[#EDEAE4] py-10 md:py-12"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto w-full px-6 md:px-10">
                <div className="text-center">
                    <h2
                        className="text-4xl font-normal leading-tight tracking-tight text-zinc-900 md:text-6xl"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        A Library of Your Evolution.
                    </h2>
                    <p className="mt-4 text-base text-[#8a7e6b] md:text-lg"></p>
                </div>

                <div className="mt-4 overflow-hidden md:mt-5">
                    <div className="flex flex-col">
                        <div
                            className="flex h-[56vh] min-h-[420px] items-stretch gap-4 snap-x snap-mandatory scroll-smooth overflow-x-auto [scrollbar-width:none] md:h-[62vh] md:gap-6 lg:h-[66vh] [&::-webkit-scrollbar]:hidden"
                        >
                            {journalCards.map((card) => (
                                <article
                                    key={card.id}
                                    className={`relative flex h-full w-full shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-[#F7F7F9] md:w-[30.7%] ${card.containerClass ?? ""}`}
                                >
                                    {card.kind === "text" && (
                                        <Fragment>
                                            <h3
                                                className={card.titleClass}
                                                style={{ fontFamily: "var(--font-stack-sans)" }}
                                            >
                                                {card.title}
                                            </h3>
                                            <p className={card.descClass}>{card.description}</p>
                                            {card.id === 1 && (
                                                <span className="absolute bottom-8 left-8 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500 md:bottom-10 md:left-12 md:text-xs">
                                                    Swipe
                                                </span>
                                            )}
                                        </Fragment>
                                    )}

                                    {card.kind === "image" && (
                                        <>
                                            <div className="relative flex-1 overflow-hidden">
                                                <div className={card.imageWrapperClass}>
                                                    <Image
                                                        src={card.image}
                                                        alt={card.caption || "Journal preview"}
                                                        fill
                                                        className={card.imageClass}
                                                    />
                                                </div>
                                            </div>
                                            <div className="border-t border-black/5 px-5 py-5 text-center md:px-6 md:py-6">
                                                <p className="text-[16px] font-medium leading-[1.36] text-zinc-800 md:text-[20px] lg:text-[22px]">
                                                    {card.caption}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
