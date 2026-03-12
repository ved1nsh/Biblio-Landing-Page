export default function Footer() {
    return (
        <section
            className="w-full bg-white px-6 py-14 text-black md:px-10 md:py-16"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
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

                <p className="mt-8 max-w-[820px] text-center text-[11px] leading-[1.5] text-zinc-500 md:mt-10 md:text-xs">
                    Note: The market analysis and competitive research presented on this site were conducted for educational and
                    portfolio purposes to demonstrate product strategy and user experience design principles. All brand names and
                    trademarks are the property of their respective owners.
                </p>
            </div>
        </section>
    );
}