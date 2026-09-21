"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

// The top bar takes the colour of the page it is sitting on.
// Add a page here when it has its own background colour; anything missing uses the default beige.
// "dark: true" flips the logo and button to light-on-dark.
const pageColours: Record<string, { bg: string; dark?: boolean }> = {
    "/features/ai": { bg: "#EDEAE4" },
    "/features/quotes": { bg: "#F5E6D3" },
    "/features/reading": { bg: "#EDEAE4" },
    "/features/journal": { bg: "#EDEAE4" },
    "/library": { bg: "#EDEAE4" },
    "/streaks": { bg: "#EEE9FE" },
    "/physicalbook": { bg: "#F8EFD9" },
};

const defaultColour = { bg: "#EDEAE4", dark: false };

export default function Navbar() {
    const pathname = usePathname();
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    if (pathname === "/research" || pathname === "/research-page") {
        return null;
    }

    const colour = pageColours[pathname] ?? defaultColour;

    // The bar shrinks with the page it sits on. /zamp is drawn at its own smaller
    // scale already, so the bar stays full size there.
    const barScale = pathname === "/" || pathname === "/zamp" ? "" : "site-scale";

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 ${barScale}`}
                style={{ backgroundColor: colour.bg, fontFamily: "var(--font-neue-montreal)" }}
            >
                {/* Logo — small, lowercase, minimal */}
                <Link href="/">
                    <span
                        className={`text-normal font-regular tracking-normal ${colour.dark ? "text-white" : "text-zinc-800"}`}
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Biblio
                    </span>
                </Link>

                {/* CTA button — pill-shaped, flipped to light on dark pages */}
                <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className={`rounded-full px-5 py-2 text-xs font-medium transition-opacity hover:opacity-80 ${colour.dark ? "bg-white text-zinc-900" : "bg-zinc-800 text-white"}`}
                >
                    Download now
                </button>
            </nav>

            <DownloadModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
            />
        </>
    );
}
