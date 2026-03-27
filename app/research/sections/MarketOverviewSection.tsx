export default function MarketOverviewSection() {
    return (
        <section className="w-full bg-[#F2EFE7] px-6 py-16 text-black md:px-10 md:py-24">
            <div className="mx-auto w-full max-w-[1360px]">
                <h2
                    className="max-w-[920px] text-[36px] font-normal leading-[0.95] tracking-[-0.04em] text-black md:text-[88px]"
                    style={{ fontFamily: "var(--font-stack-sans)" }}
                >
                    Market Overview
                </h2>

                <div className="mt-8 max-w-[1500px] space-y-6 text-[16px] leading-[1.25] text-zinc-900 md:mt-12 md:space-y-10 md:text-[26px]">
                    <p>
                        The digital reading ecosystem includes a wide range of tools such as EPUB readers, PDF viewers, note-taking applications, and habit-tracking platforms. These products serve millions of users across different use cases from academic reading and professional documents to self-improvement and leisure.
                    </p>

                    <p>
                        However, most of these solutions are built for specific functions rather than complete workflows. As a result, users often rely on multiple applications to read, track, and manage their reading activity, leading to a fragmented experience.
                    </p>
                </div>

                <div className="mt-16 md:mt-20">
                    <h3
                        className="text-[28px] font-normal leading-none tracking-tight text-black md:text-[56px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Market Size & Opportunity
                    </h3>

                    <p className="mt-8 max-w-[1500px] space-y-6 text-[16px] leading-[1.25] text-zinc-900 md:mt-12 md:space-y-10 md:text-[26px]">
                        Analysis of app store categories and existing products suggests a large and active user base distributed across reading and habit-related applications.
                    </p>

                    <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-10">
                        <article className="rounded-[36px] bg-black px-8 py-10 text-left text-white md:px-14 md:py-14">
                            <h4
                                className="bg-gradient-to-b from-[#8A8DFF] to-[#5F63FF] bg-clip-text text-[48px] font-medium leading-none tracking-tight text-transparent md:text-[88px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                40 Million +
                            </h4>

                            <p className="mt-8 max-w-[420px] text-[16px] leading-[1.22] text-zinc-400 md:text-[25px]">
                                Active users that use fragmented EPub & PDF apps. These users have the tools to read, but lack the integrated ecosystem to truly understand their books.
                            </p>
                        </article>

                        <article className="rounded-[36px] bg-black px-8 py-10 text-left text-white md:px-14 md:py-14">
                            <h4
                                className="bg-gradient-to-b from-[#8A8DFF] to-[#5F63FF] bg-clip-text text-[48px] font-medium leading-none tracking-tight text-transparent md:text-[88px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                55 Million +
                            </h4>

                            <p className="mt-8 max-w-[440px] text-[16px] leading-[1.22] text-zinc-400 md:text-[25px]">
                                Active users across various apps used by readers tracking habits. These users have the motivation, but lack an automated, frictionless workflow for consistency.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
