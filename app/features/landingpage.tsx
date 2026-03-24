import Image from "next/image";

export default function PageThreeSection() {
    return (
        <section
            className="w-full overflow-hidden"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="flex w-full flex-col">
                <div className="w-full bg-[#EDEAE4] px-6 pt-20 pb-6 md:px-10 md:pt-24 md:pb-8">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
                        <div className="md:w-[44%] md:max-w-[520px]">
                            <h2
                                className="max-w-[320px] whitespace-pre-line text-[34px] font-normal leading-[0.96] tracking-tight text-zinc-900 md:max-w-none md:text-7xl"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                {"A Canvas for\nYour Curiosity."}
                            </h2>

                            <p className="mt-4 max-w-[310px] text-[13px] leading-[1.25] text-zinc-800 md:mt-5 md:max-w-[560px] md:text-[28px]">
                                Every format. Every insight. One fluid experience.
                            </p>
                        </div>

                        <div className="mt-7 w-full max-w-[290px] md:mt-0 md:w-[50%] md:max-w-[620px]">
                            <div className="relative h-[430px] w-full md:h-[760px]">
                                <Image
                                    src="/images/epubpdf.png"
                                    alt="Biblio EPUB and PDF reading interface"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-24">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p
                            className="text-[22px] font-normal leading-[1.15] tracking-tight md:text-[42px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Where Reading Meets Intelligence
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[28px] md:leading-[1.45]">
                            Biblio transforms your static files into a high-performance reading environment.
                            Seamlessly upload your ePubs and PDFs to a unified library where every page is a canvas for your curiosity.
                            From professional-grade typography controls to instant AI-powered deep dives, Biblio replaces clunky,
                            laggy interfaces with a fluid, personalized experience designed for the modern reader.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
