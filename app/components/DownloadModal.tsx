"use client";

import { useEffect } from "react";

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-5 backdrop-blur-[2px]"
            onClick={onClose}
            role="presentation"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="download-modal-title"
                className="w-full max-w-md rounded-3xl border border-white/30 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-7"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <h3
                        id="download-modal-title"
                        className="text-2xl font-medium tracking-tight md:text-[30px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Download Biblio
                    </h3>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close download dialog"
                        className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/85 transition-colors hover:bg-white/10"
                    >
                        Close
                    </button>
                </div>

                <p className="mt-3 text-sm text-zinc-300 md:text-base">Get the latest version for your device.</p>

                <div className="mt-6 space-y-3">
                    <a
                        href="https://drive.google.com/file/d/17V2jWIGM4mwZ7Zbm9CHmTJnYO-2Ak1sz/view?usp=drivesdk" // TODO: Paste your Android download link here
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                    >
                        <span className="text-sm text-zinc-200 md:text-base">Download for Android</span>
                        <span className="text-sm text-zinc-400">.apk</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
