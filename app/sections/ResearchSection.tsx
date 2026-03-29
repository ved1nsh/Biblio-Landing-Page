import Image from "next/image";
import Link from "next/link";

export default function ResearchPage() {
    return (
        <section
            className="w-full bg-black px-6 py-14 md:px-10 md:py-24"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >


            <div className="mx-auto mt-4 w-full max-w-[1240px] rounded-[28px] bg-black text-white md:mt-6">
                <div className="mx-auto flex flex-col items-center text-center md:grid md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-center md:gap-10 md:text-left lg:gap-14">
                    <div className="mx-auto flex max-w-[820px] flex-col items-center text-center md:mx-0 md:max-w-[620px] md:items-start md:text-left">
                        <h2
                            className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-[40px] font-normal leading-[1.12] tracking-slug text-transparent md:text-[64px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            A Solution Born

                            from

                            Real Friction.
                        </h2>

                        <p className="mt-10 max-w-[680px] text-[16px] leading-[1.35] text-zinc-400 md:mt-10 md:text-[22px]">
                            We analysed the current landscape and found a market flooded with fragmented solutions.
                        </p>

                        <p className="mt-8 max-w-[760px] text-[16px] leading-[1.38] text-zinc-500 md:mt-8 md:text-[22px]">
                            Mobile readers burdened by <span className="text-zinc-200">laggy interfaces and poor UI</span>, the reading experience has felt stagnant. Users are often forced to choose between a digital library that feels like a soulless file explorer or a physical shelf that stays completely offline. <span className="text-zinc-200">
                                <br></br>
                                <br></br>
                                Biblio is the strategic response to these gaps—unifying the journey through a high-performance, intuitive ecosystem.</span>
                        </p>

                        <Link href="/research" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-opacity hover:opacity-90 md:mt-10 md:gap-3 md:px-7 md:py-3 md:text-[18px]">
                            Discover more
                            <Image src="/images/arrowone.png" alt="arrow" width={24} height={24} className="h-5 w-5 object-contain md:h-5 md:w-5" />
                        </Link>
                    </div>

                    <div className="mx-auto mt-12 w-full max-w-[920px] rounded-[24px] bg-[#F4F4F6] md:mt-0 md:max-w-none md:rounded-[28px]">
                        <div className="pointer-events-none relative mx-auto h-[420px] w-full max-w-[520px] md:h-[640px] md:max-w-[760px]">
                            <Image
                                src="/images/page2/page2one.png"
                                alt="Biblio reading interface"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
