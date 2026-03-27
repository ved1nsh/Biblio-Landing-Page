import Link from "next/link";

export default function ResearchHeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_#081225_0%,_#080E1F_34%,_#05070F_68%,_#010101_100%)]" />

            <div className="relative w-full px-6 py-16 md:px-10 md:py-20">
                <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
                    <Link
                        href="/"
                        className="mb-12 inline-flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                        ← Back to Home
                    </Link>

                    <h1
                        className="mb-6 text-[44px] font-normal leading-[1.15] text-white md:mb-10 md:text-[88px] md:leading-[1.1]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Market Research
                    </h1>

                    <p className="mb-8 max-w-300 text-[18px] leading-[1.4] text-zinc-200 md:text-[26px]">
                        A structured analysis to understand user behavior, market opportunities, and product positioning for Biblio — a reading-focused application designed to improve consistency, engagement, and comprehension.
                        <br></br>
                        <br></br>
                        This research analyzes market trends, user behavior, demand patterns, and the competitive landscape to identify key opportunities and validate whether a unified reading experience can create meaningful value for users.
                    </p>

                </div>
            </div>
        </section>
    );
}
