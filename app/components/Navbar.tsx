export default function Navbar() {
    return (
        <nav
            className="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between bg-[#EDEAE4] px-6 py-5 md:px-16"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            {/* Logo — small, lowercase, minimal */}
            <span
                className="text-sm font-medium tracking-wide text-zinc-800"
            >
                biblio
            </span>

            {/* CTA button — pill-shaped, dark */}
            <button
                className="rounded-full bg-zinc-800 px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80"
            >
                Download now
            </button>
        </nav>
    );
}
