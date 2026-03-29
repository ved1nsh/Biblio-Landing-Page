import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function DetailedComparisonPage() {
    return (
        <main
            className="flex min-h-screen w-full flex-col bg-[#F2EFE7] text-black"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            {/* Header / Intro */}
            <section className="w-full px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
                    <div className="mb-8 flex w-full justify-center md:mb-12">
                        <Link
                            href="/research"
                            className="inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
                        >
                            ← Back to Research
                        </Link>
                    </div>

                    <h1
                        className="max-w-[920px] text-[36px] font-normal leading-[1.1] tracking-tight text-black md:text-[64px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Detailed UI Comparison
                    </h1>

                    <p className="mt-6 max-w-[860px] text-[16px] leading-[1.4] text-zinc-700 md:mt-8 md:text-[22px]">
                        Here, we are directly comparing the basic landing pages and overall user interfaces of Biblio against some of the most popular reading apps on the market.
                        A side-by-side look highlights how a modern, clean, and distraction-free design dramatically improves the reading experience.
                    </p>
                </div>
            </section>

            {/* Biblio vs Moon+ Reader */}
            <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto w-full max-w-[1360px]">
                    <div className="mb-12 flex flex-col items-center text-center md:mb-16">
                        <h2
                            className="mb-4 text-[32px] font-normal tracking-tight text-black md:text-[48px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Biblio vs Moon+ Reader
                        </h2>
                        <div className="mb-4 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-600">10M+ Downloads on Google Play</div>
                        <p className="max-w-[720px] text-[16px] leading-[1.5] text-zinc-600 md:text-[20px]">
                            While Moon+ Reader offers immense customization, its interface can feel cluttered and overwhelming with menus taking up valuable space. Biblio presents a modern, minimal approach that puts your library and progress front and center.
                        </p>
                    </div>

                    <h3 className="mb-8 text-center text-[24px] font-medium text-black md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Home Screen UI</h3>
                    <div className="-mx-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:pb-0">
                        <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 md:gap-12">
                            {/* Biblio Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-[#F2EFE7] p-6 md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">Biblio UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px]">
                                    <Image
                                        src="/images/comparison/main1.png"
                                        alt="Biblio Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Moon+ Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-[#F2EFE7] p-6 md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-zinc-400 px-4 py-1.5 text-sm font-medium text-white">Moon+ Reader UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                     <Image
                                        src="/images/comparison/homepage1.png"
                                        alt="Moon+ Reader Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-16 mb-8 text-center text-[24px] font-medium text-black md:mt-24 md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Reading Screen UI Comparison</h3>
                    <div className="-mx-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:pb-0">
                        <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 md:gap-12">
                            {/* Biblio Reading Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-[#F2EFE7] p-6 md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">Biblio Reading UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                    <Image
                                        src="/images/main.png"
                                        alt="Biblio Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Moon+ Reading Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-[#F2EFE7] p-6 md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-zinc-400 px-4 py-1.5 text-sm font-medium text-white">Moon+ Reading UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                     <Image
                                        src="/images/comparison/reading1.png"
                                        alt="Moon+ Reader Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-16 mb-8 text-center text-[24px] font-medium text-black md:mt-24 md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Feature Difference</h3>
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12">
                        <div className="rounded-3xl bg-[#F2EFE7] p-8 md:p-12">
                            <h4 className="mb-6 text-[20px] font-semibold text-black md:text-[24px]">What Biblio Has</h4>
                            <ul className="flex flex-col gap-4 text-zinc-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>Built-in habit tracking and reading streaks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>AI-powered reading assistant for contextual definitions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>Quote journaling & aesthetic sharing features</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>Modern, minimalist interface optimized for focus</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-zinc-100 p-8 md:p-12 border border-zinc-200">
                            <h4 className="mb-6 text-[20px] font-semibold text-black md:text-[24px]">What Moon+ Lacks</h4>
                            <ul className="flex flex-col gap-4 text-zinc-600">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>No structured tools to build and track daily reading habits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>No native dictionary or intelligent passage explainer</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>Cluttered settings menus that overwhelm average users</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biblio vs ReadEra */}
            <section className="w-full bg-[#F2EFE7] px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto w-full max-w-[1360px]">
                    <div className="mb-12 flex flex-col items-center text-center md:mb-16">
                        <h2
                            className="mb-4 text-[32px] font-normal tracking-tight text-black md:text-[48px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Biblio vs ReadEra
                        </h2>
                        <div className="mb-4 inline-block rounded-full bg-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-700">40M+ Downloads on Google Play</div>
                        <p className="max-w-[720px] text-[16px] leading-[1.5] text-zinc-600 md:text-[20px]">
                            ReadEra is highly functional but maintains a strictly utilitarian document-reader aesthetic. Biblio introduces soft aesthetics, clear visual hierarchy, and dedicated features to actively encourage habit-building right from the home screen.
                        </p>
                    </div>

                    <h3 className="mb-8 text-center text-[24px] font-medium text-black md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Home Screen UI</h3>
                    <div className="-mx-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:pb-0">
                        <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 md:gap-12">
                            {/* Biblio Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-white p-6 shadow-sm md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">Biblio UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px]">
                                    <Image
                                        src="/images/comparison/main1.png"
                                        alt="Biblio Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* ReadEra Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-white p-6 shadow-sm md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-zinc-400 px-4 py-1.5 text-sm font-medium text-white">ReadEra UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                    <Image
                                        src="/images/comparison/homepage2.png"
                                        alt="ReadEra Screen"
                                        fill
                                        className="object-contain"
                                    />                               
                                 </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-16 mb-8 text-center text-[24px] font-medium text-black md:mt-24 md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Reading Screen UI Comparison</h3>
                    <div className="-mx-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:pb-0">
                        <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 md:gap-12">
                            {/* Biblio Reading Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-white p-6 shadow-sm md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">Biblio Reading UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                    <Image
                                        src="/images/main.png"
                                        alt="Biblio Reading Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* ReadEra Reading Screenshot */}
                            <div className="flex w-[85vw] shrink-0 snap-center flex-col items-center rounded-3xl bg-white p-6 shadow-sm md:w-auto md:p-10">
                                <span className="mb-6 rounded-full bg-zinc-400 px-4 py-1.5 text-sm font-medium text-white">ReadEra Reading UI</span>
                                <div className="relative aspect-[9/19] w-full max-w-[320px] flex items-center justify-center">
                                    <Image
                                        src="/images/comparison/reading2.png"
                                        alt="ReadEra Reading Screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-16 mb-8 text-center text-[24px] font-medium text-black md:mt-24 md:text-[32px]" style={{ fontFamily: "var(--font-stack-sans)" }}>Feature Difference</h3>
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12">
                        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
                            <h4 className="mb-6 text-[20px] font-semibold text-black md:text-[24px]">What Biblio Has</h4>
                            <ul className="flex flex-col gap-4 text-zinc-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>Comprehensive reading insights and deep analytics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>Built-in quote journaling and daily streaks display</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white text-xs">✓</span>
                                    <span>High focus on aesthetics, typography, and premium feel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-zinc-50 p-8 md:p-12 border border-zinc-200 shadow-sm">
                            <h4 className="mb-6 text-[20px] font-semibold text-black md:text-[24px]">What ReadEra Lacks</h4>
                            <ul className="flex flex-col gap-4 text-zinc-600">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>Designed purely as a document viewer, not an immersive reading experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>No features encouraging habitual or daily reading</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 text-xs">×</span>
                                    <span>Lacks creative export tools for sharing reading progress or favorite quotes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
