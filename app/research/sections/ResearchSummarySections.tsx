
export default function ResearchSummarySections() {
    return (
        <>
            <section
                className="w-full bg-[#F2EFE7] px-6 py-10 text-black md:px-10 md:py-16"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto w-full max-w-[1360px]">
                    <div className="flex flex-col text-left">
                        <h2
                            className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] bg-clip-text pb-2 text-[44px] font-normal leading-[1.1] tracking-[-0.04em] text-transparent md:pb-4 md:text-[88px] md:leading-[1.05]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Key Insights & Opportunity
                        </h2>

                        <div className="mt-10 max-w-[1500px] space-y-8 text-[18px] leading-[1.25] text-zinc-900 md:mt-12 md:space-y-10 md:text-[26px]">
                            <p>
                                The current reading landscape is a fragmented ecosystem of single-purpose tools. Readers are forced to juggle multiple apps, creating friction that breaks the flow of insight. Beyond missing features, most platforms are burdened by laggy interfaces, poor UI/UX, and clunky navigation. Biblio replaces these dated, high-latency workflows with a singular, high-performance environment designed for the modern reader.
                            </p>
                            <p>
                                These gaps reveal an opportunity to rethink the reading experience. A modern reading platform should not only allow users to read books but also help them stay consistent, understand complex text, and reflect on what they read.
                            </p>
                            <p>
                                Instead of separating reading, tracking, and understanding into different tools, these capabilities can be brought together into a single, focused platform.
                            </p>
                            <p className="font-medium text-black">
                                This idea became the foundation for Biblio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
