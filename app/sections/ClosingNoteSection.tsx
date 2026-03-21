"use client";

import { useEffect, useState } from "react";

export default function ClosingNoteSection() {
    const [isXModalOpen, setIsXModalOpen] = useState(false);

    useEffect(() => {
        if (!isXModalOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsXModalOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isXModalOpen]);

    return (
        <>
            <section
                className="w-full bg-[#1F1F20] px-6 py-14 text-zinc-100 md:px-10 md:py-16"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                    <p
                        className="mt-4 text-[34px] leading-tight text-zinc-100 md:text-[62px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        This Isn&apos;t Finished.
                    </p>

                    <div className="mt-3 h-px w-11/12 bg-zinc-600 md:my-5 md:w-full" />

                    <p className="mt-6 max-w-5xl text-[19px] leading-[1.55] text-zinc-200 md:text-[28px] md:leading-[1.45]">
                        Biblio is still evolving. Every feature, every decision is shaped by how real people read, struggle, and stay
                        consistent.
                    </p>
                    <p className="mt-6 max-w-4xl text-[19px] leading-[1.45] text-zinc-200 md:mt-8 md:text-[28px]">
                        This is just the beginning.
                        <br />
                        Building in public. Improving every day.
                    </p>

                    <button
                        type="button"
                        onClick={() => setIsXModalOpen(true)}
                        className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-opacity hover:opacity-90 md:gap-3 md:px-7 md:py-3 md:text-[18px]"
                    >
                        Follow us on X
                    </button>
                </div>
            </section>

            {isXModalOpen ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-5 backdrop-blur-[2px]"
                    onClick={() => setIsXModalOpen(false)}
                    role="presentation"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="x-modal-title"
                        className="w-full max-w-md rounded-3xl border border-white/30 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-7"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h3
                                id="x-modal-title"
                                className="text-2xl font-medium tracking-tight md:text-[30px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Follow us on X
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsXModalOpen(false)}
                                aria-label="Close X links dialog"
                                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/85 transition-colors hover:bg-white/10"
                            >
                                Close
                            </button>
                        </div>

                        <p className="mt-3 text-sm text-zinc-300 md:text-base">Pick the profile you want to follow.</p>

                        <div className="mt-6 space-y-3">
                            <a
                                href="https://x.com/ved1nsh"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                <span className="text-sm text-zinc-200 md:text-base">Vedansh on X</span>
                                <span className="text-sm text-zinc-400">@ved1nsh</span>
                            </a>

                            <a
                                href="https://x.com/app_biblio"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                <span className="text-sm text-zinc-200 md:text-base">Biblio on X</span>
                                <span className="text-sm text-zinc-400">@app_biblio</span>
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}