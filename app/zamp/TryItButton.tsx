"use client";

import { useState } from "react";
import DownloadModal from "../components/DownloadModal";

// Opens the same download popup as the navbar, so the APK link lives in one place.
export default function TryItButton({ label, className }: { label: string; className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className={className}>
                {label}
            </button>
            <DownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
