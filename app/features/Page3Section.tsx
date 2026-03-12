import Image from "next/image";

export default function PageThreeSection() {
    return (
        <section
            className="w-full overflow-hidden"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center overflow-hidden bg-[#EDEAE4] px-6 pt-20 pb-6 text-center md:px-10 md:pt-24 md:pb-8">
                    <h2
                        className="max-w-[320px] whitespace-pre-line text-[34px] font-normal leading-[0.96] tracking-tight text-zinc-900 md:max-w-[880px] md:text-7xl"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        {"A Canvas for\nYour Curiosity."}
                    </h2>

                    <p className="mt-4 max-w-[310px] text-[13px] leading-[1.25] text-zinc-800 md:mt-5 md:max-w-[760px] md:text-[28px]">
                        Every format. Every insight. One fluid experience.
                    </p>

                    <div className="mt-7 w-full max-w-[290px] md:mt-9 md:max-w-[620px]">
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

                <div className="w-full bg-black px-8 py-8 text-center md:px-16 md:py-10">
                    <p className="mx-auto max-w-[980px] text-[15px] leading-[1.38] text-white md:text-[28px] md:leading-[1.32]">
                        Biblio transforms your static files into a high-performance reading environment.
                        Seamlessly upload your ePubs and PDFs to a unified library where every page is a canvas for your curiosity.
                        From professional-grade typography controls to instant AI-powered deep dives, Biblio replaces clunky,
                        laggy interfaces with a fluid, personalized experience designed for the modern reader.
                    </p>
                </div>
            </div>
        </section>
    );
}
