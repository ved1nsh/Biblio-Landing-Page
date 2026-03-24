import Link from "next/link";
import BiblioVsOthersSection from "./BiblioVsOthersSection";
import PainPointsSection from "./PainPointsSection";
import ResearchSummarySections from "./ResearchSummarySections";
import ScrollReveal from "../components/ScrollReveal";


export default function MarketResearchPage() {
    return (
        <main
            className="flex min-h-screen w-full flex-col bg-white text-black"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <ScrollReveal delayMs={30}>
                <div className="w-full px-6 py-20 md:px-10 md:py-32">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
                        <Link
                            href="/"
                            className="mb-12 inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-black"
                        >
                            ← Back to Home
                        </Link>

                        <h1
                            className="mb-10 max-w-[820px] bg-gradient-to-r from-[#6F63FF] via-[#9B56D6] to-[#E654A4] bg-clip-text text-[40px] font-normal leading-[1.12] tracking-tight text-transparent md:mb-14 md:text-7xl"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Market Research
                        </h1>

                        <p className="mb-8 max-w-300 text-[18px] leading-[1.4] md:text-[26px]">
                            Reading today is no longer limited to physical books. Many readers now prefer digital formats, often downloading EPUB and PDF files to read on their devices.
                            However, the tools available for this experience remain limited. Most reading apps either focus only on displaying files or only on tracking books, with no proper habit-forming features.
                        </p>
                        <p className="max-w-300 text-[18px] leading-[1.4] md:text-[26px]">
                            This fragmentation creates a significant gap in the market, leaving readers without a cohesive ecosystem to support their reading habits.
                            Before designing Biblio, I explored the many apps users use and what problems they face.
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delayMs={60}>
                <section className="w-full bg-black px-6 py-20 text-white md:px-10 md:py-28">
                    <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center text-center">
                        <h1
                            className="mb-10 max-w-[820px] text-[40px] font-normal leading-[1.08] tracking-tight text-white md:mb-14 md:text-[72px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            The Strategic Gap
                        </h1>

                        <p className="mb-16 max-w-[860px] text-[18px] leading-[1.35] text-zinc-200 md:mb-20 md:text-[26px]">
                            Reading habits have shifted dramatically, yet the tools we use have remained frozen in time. We analyzed tens of millions of users across the two largest segments of the market to understand why the current experience feels fragmented and incomplete.
                        </p>

                        <div className="w-full space-y-14 md:space-y-18">
                            <div className="flex flex-col items-center text-center">
                                <h2
                                    className="bg-gradient-to-b from-[#8A8DFF] to-[#5F63FF] bg-clip-text text-[72px] font-medium leading-none tracking-tight text-transparent md:text-[112px]"
                                    style={{ fontFamily: "var(--font-stack-sans)" }}
                                >
                                    40 Million +
                                </h2>
                                <p className="mt-4 max-w-[820px] text-[17px] leading-[1.4] text-zinc-300 md:text-[21px]">
                                    Active users that use fragmented EPub & PDF apps.
                                    <br />
                                    <span className="text-zinc-500">
                                        These users have the tools to read, but lack the integrated ecosystem to truly understand their books.
                                    </span>
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <h2
                                    className="bg-gradient-to-b from-[#8A8DFF] to-[#5F63FF] bg-clip-text text-[72px] font-medium leading-none tracking-tight text-transparent md:text-[112px]"
                                    style={{ fontFamily: "var(--font-stack-sans)" }}
                                >
                                    55 Million +
                                </h2>
                                <p className="mt-4 max-w-[820px] text-[17px] leading-[1.4] text-zinc-300 md:text-[21px]">
                                    Active users across various apps used by readers tracking habits.
                                    <br />
                                    <span className="text-zinc-500">
                                        These users have the motivation, but lack an automated, frictionless workflow for consistency.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 max-w-[980px] space-y-10 text-center md:mt-20 md:space-y-12">
                            <p className="text-[18px] leading-[1.35] text-zinc-100 md:text-[28px]">
                                Biblio is a strategic response to a fragmented reading landscape where over 95 million users are currently forced to choose between legacy digital readers and disconnected habit trackers. By identifying the core "Format" and "Habit" gaps, this research moves beyond aesthetics to solve the real-world friction of laggy interfaces, poor UI/UX, and the psychological sense of loss that occurs when a story ends.
                            </p>

                            <p className="text-[18px] leading-[1.35] text-zinc-100 md:text-[28px]">
                                Biblio replaces these dated, high-latency workflows with a singular, high-performance environment that bridges the physical and digital worlds through AI-powered contextual intelligence.
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* User Pain Points Section */}
            <ScrollReveal delayMs={80}>
                <PainPointsSection />
            </ScrollReveal>

            {/* Biblio vs Others Section */}
            <ScrollReveal delayMs={100}>
                <BiblioVsOthersSection />
            </ScrollReveal>

            {/* Research Summary Sections */}
            <ScrollReveal delayMs={120}>
                <ResearchSummarySections />
            </ScrollReveal>
        </main>
    );
}
