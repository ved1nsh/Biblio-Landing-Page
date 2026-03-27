export default function ProblemObjectiveSection() {
    return (
        <section className="w-full bg-[#F2EFE7] px-6 py-16 text-black md:px-10 md:py-24">
            <div className="mx-auto w-full max-w-[1360px]">
                <h2
                    className="text-[36px] font-normal leading-[0.95] tracking-[-0.04em] text-black md:text-[88px]"
                    style={{ fontFamily: "var(--font-stack-sans)" }}
                >
                    Problem & Objective
                </h2>

                <div className="-mx-6 mt-10 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-12 md:overflow-visible md:px-0 md:pb-0">
                    <div className="flex snap-x snap-mandatory gap-5 md:grid md:grid-cols-2 md:gap-8">
                        <article className="min-h-[420px] w-[calc(100vw-72px)] shrink-0 snap-center rounded-[36px] bg-white px-7 py-8 md:min-h-[540px] md:w-auto md:px-12 md:py-14">
                            <h3
                                className="text-[24px] font-normal leading-[1.05] tracking-tight text-black md:text-[42px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                A. Problem Statement
                            </h3>

                            <div className="mt-6 space-y-5 text-[16px] leading-[1.22] text-zinc-900 md:mt-10 md:space-y-6 md:text-[22px]">
                                <p>
                                    Existing EPUB and PDF reading applications often provide a suboptimal user experience, characterized by cluttered interfaces, inconsistent performance, and limited customization.
                                </p>
                                <p>
                                    Many tools prioritize functionality over usability, resulting in laggy interactions and a lack of intuitive design, which negatively impacts the overall reading experience.
                                </p>
                                <p>
                                    Additionally, the reading ecosystem is highly fragmented. Users often rely on separate applications for different needs, such as reading digital books, tracking reading progress, maintaining book lists, or logging physical reading, leading to a disconnected and inefficient experience.
                                </p>
                                <p>
                                    Most existing solutions also operate as passive tools, offering little support for engagement, comprehension, or habit tracking.
                                </p>
                            </div>
                        </article>

                        <article className="min-h-[420px] w-[calc(100vw-72px)] shrink-0 snap-center rounded-[36px] bg-white px-7 py-8 md:min-h-[540px] md:w-auto md:px-12 md:py-14">
                            <h3
                                className="text-[24px] font-normal leading-[1.05] tracking-tight text-black md:text-[42px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                B. Why This Problem Matters?
                            </h3>

                            <div className="mt-6 space-y-5 text-[16px] leading-[1.22] text-zinc-900 md:mt-10 md:space-y-6 md:text-[22px]">
                                <p>
                                    A poor and fragmented reading experience reduces user satisfaction and creates friction in what should be a seamless activity.
                                </p>
                                <p>
                                    Switching between multiple applications for different reading-related tasks increases cognitive load and decreases overall engagement.
                                </p>
                                <p>
                                    As digital reading continues to grow, especially among students and self-improvement readers, there is a clear opportunity to improve both usability and integration.
                                </p>
                                <p>
                                    A unified platform that combines a high-quality reading experience with supporting features can significantly enhance convenience, engagement, and long-term retention.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
