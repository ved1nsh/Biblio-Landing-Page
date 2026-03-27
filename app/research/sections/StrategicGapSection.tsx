export default function StrategicGapSection() {
    return (
        <section className="w-full bg-black px-6 py-10 text-white md:px-10 md:py-20">
            <div className="mx-auto w-full max-w-[1360px]">
                <h2
                    className="max-w-[880px] text-[44px] font-normal leading-[0.96] tracking-[-0.04em] text-white md:text-[88px]"
                    style={{ fontFamily: "var(--font-stack-sans)" }}
                >
                    The Strategic Gap
                </h2>

                <div className="mt-10 max-w-[1500px] space-y-8 text-[18px] leading-[1.25] text-white md:mt-12 md:space-y-10 md:text-[26px]">
                    <p>
                        The current market is not limited by lack of users or demand, but by how solutions are structured. Reading applications focus primarily on content consumption, while habit and productivity tools focus on behavior with little overlap between the two.
                    </p>

                    <p>
                        This separation forces users to manually connect their reading experience with tracking, motivation, and comprehension, creating friction in an otherwise simple activity.
                    </p>

                    <p>
                        This reveals a clear opportunity for a product that improves the core reading experience while also integrating supporting features into a single, cohesive system.
                    </p>

                    <p>
                        Instead of introducing another standalone tool, the opportunity lies in simplifying the workflow by enabling users to read, track, and engage with their content without switching between multiple applications. Biblio is positioned to address this gap by combining a high-performance reading interface with integrated engagement and learning features.
                    </p>
                </div>

            </div>
        </section>
    );
}
