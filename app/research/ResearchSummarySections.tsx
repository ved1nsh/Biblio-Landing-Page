export default function ResearchSummarySections() {
    return (
        <>
            <section
                className="w-full bg-[#000000] px-6 py-20 text-white md:px-10 md:py-28"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto flex w-full max-w-[980px] flex-col gap-20 md:gap-28">
                    <div className="flex flex-col items-center text-center">


                        <h2
                            className="mt-5 bg-gradient-to-r from-[#95A3FF] via-[#7B7CFF] to-[#6B5CFF] bg-clip-text text-[42px] font-normal leading-[1.04] tracking-tight text-transparent md:text-7xl"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Key Insights
                        </h2>


                        <div className="mt-14 flex w-full max-w-[900px] flex-col gap-8 text-center md:mt-20 md:gap-10">
                            <p className="text-[20px] leading-[1.65] text-white md:text-[30px]">
                                The current reading landscape is a fragmented ecosystem of single-purpose tools. Readers are forced to juggle multiple apps, creating friction that breaks the flow of insight. Beyond missing features, most platforms are burdened by laggy interfaces, poor UI/UX, and clunky navigation. Biblio replaces these dated, high-latency workflows with a singular, high-performance environment designed for the modern reader.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">


                        <h2
                            className="mt-5 bg-gradient-to-r from-[#95A3FF] via-[#7B7CFF] to-[#6B5CFF] bg-clip-text text-[42px] font-normal leading-[1.04] tracking-tight text-transparent md:text-7xl"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            The Opportunity
                        </h2>



                        <div className="mt-14 flex w-full max-w-[900px] flex-col gap-8 text-center md:mt-20 md:gap-10">
                            <p className="text-[20px] leading-[1.65] text-white md:text-[30px]">
                                These gaps reveal an opportunity to rethink the reading experience.
                                A modern reading platform should not only allow users to read books but also help them stay consistent, understand complex text, and reflect on what they read.
                                Instead of separating reading, tracking, and understanding into different tools, these capabilities can be brought together into a single, focused platform.
                                <br></br>
                                <br></br>
                                This idea became the foundation for Biblio.


                            </p>


                        </div>
                    </div>
                </div>
            </section>

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
                        className="mt-2 text-[24px] font-light leading-[1.08] tracking-slug text-zinc-900 md:mt-3 md:text-[30px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        All this and much more
                    </p>
                    <button className="mt-8 rounded-full bg-zinc-800 px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80 md:mt-10 md:px-6 md:py-3 md:text-sm">
                        Download now
                    </button>

                    <p className="mt-8 max-w-[820px] text-center text-[11px] leading-[1.5] text-zinc-500 md:mt-10 md:text-xs">
                        Note: The market analysis and competitive research presented on this site were conducted for educational and portfolio purposes to demonstrate product strategy and user experience design principles. All brand names and trademarks are the property of their respective owners.
                    </p>
                </div>
            </section>
        </>
    );
}
