"use client";

import Image from "next/image";
import { Fragment } from "react";

const quotesCards = [
    {
        id: 1,
        kind: "text" as const,
        title: "Your Thoughts,\nBeautifully Framed.",
        description:
            "Don't just save a quote; create an artifact. Biblio transforms your highlights into stunning, shareable cards designed to capture the essence of what you read.",
        containerClass: "p-8 md:p-12 justify-center",
        titleClass:
            "text-[26px] md:text-[24px] lg:text-[32px] font-medium leading-[1.08] tracking-tight text-zinc-900 whitespace-pre-line",
        descClass:
            "mt-6 text-[15px] md:text-[14px] lg:text-[18px] leading-[1.35] text-zinc-800 tracking-tight",
    },
    {
        id: 2,
        kind: "image" as const,
        image: "/images/quotes/q1.png",
        caption:
            "Turn any passage into a visual masterpiece. Biblio gives you the tools to frame your favourite quotes with professional precision.",
        imageWrapperClass:
            "pointer-events-none absolute bottom-0 left-1/2 h-[88%] w-[95%] -translate-x-1/2 sm:h-[92%] md:h-[95%]",
        imageClass: "object-contain object-bottom",
    },
    {
        id: 3,
        kind: "image" as const,
        image: "/images/quotes/q2.png",
        caption:
            "Match the mood of the text. Apply vibrant colour palettes or immersive themes to give your notes a distinct soul.",
        imageWrapperClass:
            "pointer-events-none absolute left-1/2 top-0 h-[88%] w-[95%] -translate-x-1/2 sm:h-[92%] md:h-[95%]",
        imageClass: "object-contain object-top",
    },
    {
        id: 4,
        kind: "image" as const,
        image: "/images/quotes/q3.png",
        caption:
            "From your library to the world. One tap to export your high-resolution designs directly to social media or your private cloud.",
        imageWrapperClass:
            "pointer-events-none absolute left-1/2 top-1/2 h-[56%] w-[82%] -translate-x-1/2 -translate-y-1/2 sm:h-[58%] md:h-[65%]",
        imageClass: "object-contain object-center",
    },
];

export default function PageFiveSection() {
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
                        Your Thoughts, Beautifully Framed.
                    </h2>
                    <p className="mt-4 text-base text-[#8a7e6b] md:text-lg">
                        Turn every insight into a masterpiece with professional-grade customization.
                    </p>
                </div>

                <div className="mt-4 overflow-hidden md:mt-5">
                    <div className="flex flex-col">
                        <div
                            className="flex h-[56vh] min-h-[420px] items-stretch gap-4 snap-x snap-mandatory scroll-smooth overflow-x-auto [scrollbar-width:none] md:h-[62vh] md:gap-6 lg:h-[66vh] [&::-webkit-scrollbar]:hidden"
                        >
                            {quotesCards.map((card) => (
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
                                                        alt={card.caption || "Quote card preview"}
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
