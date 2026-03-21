"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        if (!isContactOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsContactOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isContactOpen]);

    return (
        <>
            <section
                className="w-full bg-white px-6 py-14 text-black md:px-10 md:py-16"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto flex w-full max-w-245 flex-col items-center text-center">
                    <p
                        className="text-[32px] font-normal leading-[1.08] tracking-tight text-zinc-900 md:text-[56px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Biblio
                    </p>
                    <p
                        className="mt-2 text-[24px] font-light leading-[1.08] tracking-tight text-zinc-900 md:mt-3 md:text-[30px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        All this and much more
                    </p>
                    <button className="mt-8 rounded-full bg-zinc-800 px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80 md:mt-10 md:px-6 md:py-3 md:text-sm">
                        Download now
                    </button>

                    <div className="mt-6 flex items-center gap-5 text-sm text-zinc-700 md:mt-7 md:text-base">
                        <button
                            type="button"
                            onClick={() => setIsContactOpen(true)}
                            className="transition-opacity hover:opacity-70"
                        >
                            Contact Us
                        </button>
                        <span aria-hidden="true" className="text-zinc-400">
                            |
                        </span>
                        <Link href="/terms-and-conditions" className="transition-opacity hover:opacity-70">
                            Terms and Conditions
                        </Link>
                        <span aria-hidden="true" className="text-zinc-400">
                            |
                        </span>
                        <Link href="/privacy-policy" className="transition-opacity hover:opacity-70">
                            Privacy Policy
                        </Link>
                    </div>

                    <p className="mt-8 max-w-205 text-center text-[11px] leading-normal text-zinc-500 md:mt-10 md:text-xs">
                        Note: The market analysis and competitive research presented on this site were conducted for educational and
                        portfolio purposes to demonstrate product strategy and user experience design principles. All brand names and
                        trademarks are the property of their respective owners.
                    </p>
                </div>
            </section>

            {isContactOpen ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-5 backdrop-blur-[2px]"
                    onClick={() => setIsContactOpen(false)}
                    role="presentation"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        className="w-full max-w-md rounded-3xl border border-white/30 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-7"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h3
                                id="contact-modal-title"
                                className="text-2xl font-medium tracking-tight md:text-[30px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Contact Us
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsContactOpen(false)}
                                aria-label="Close contact dialog"
                                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/85 transition-colors hover:bg-white/10"
                            >
                                Close
                            </button>
                        </div>

                        <p className="mt-3 text-sm text-zinc-300 md:text-base">Connect with us on Twitter or drop an email anytime.</p>

                        <div className="mt-6 space-y-3">
                            <a
                                href="https://twitter.com/@app_biblio
"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                <span className="text-sm text-zinc-200 md:text-base">Twitter</span>
                                <span className="text-sm text-zinc-400">@app_biblio
</span>
                            </a>

                            <a
                                href="mailto:hello@biblio.app"
                                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                <span className="text-sm text-zinc-200 md:text-base">Email</span>
                                <span className="text-sm text-zinc-400">hello@biblio.app</span>
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}