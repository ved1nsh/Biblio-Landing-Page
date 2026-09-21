import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Reading — Biblio",
    description: "Fonts, themes, spacing and everything else about the page in Biblio.",
};

// The four reading modes, with the colours they use in the app.
const modes = [
    { name: "Day", desc: "Plain white, for daylight.", swatch: "bg-white", ring: "ring-zinc-200", text: "text-zinc-900" },
    { name: "Paper", desc: "Warm and easy, like a paperback.", swatch: "bg-[#F5EFE3]", ring: "ring-[#E4D9C4]", text: "text-zinc-900" },
    { name: "Night", desc: "Dimmed for the hours after dinner.", swatch: "bg-[#22242A]", ring: "ring-zinc-700", text: "text-white" },
    { name: "True Dark", desc: "Full black, kind to tired eyes.", swatch: "bg-black", ring: "ring-zinc-800", text: "text-white" },
];

// Every control you get over the page.
const controls = [
    { name: "Font", desc: "Bookerly, Merriweather, Baskerville, Palatino. High-legibility faces chosen for long reading." },
    { name: "Size", desc: "Slide until the line feels right in your hand." },
    { name: "Spacing", desc: "Line height and letter spacing, so a dense page can breathe." },
    { name: "Alignment", desc: "Justified or ragged right, whichever your eye prefers." },
];

export default function ReadingFeaturePage() {
    return (
        <main className="site-scale w-full bg-[#EDEAE4] text-black" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            <div className="px-6 pt-24 text-center md:px-10 md:pt-28">
                <Link href="/#tour" className="text-[14px] text-zinc-600 transition-opacity hover:opacity-70">
                    ← Back to home
                </Link>
            </div>

            {/* Hero */}
            <ScrollReveal delayMs={20}>
                <section className="w-full overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-16">
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:flex-row md:justify-between">
                        <div className="text-center md:w-[46%] md:text-left">
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">Reading</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                The page is yours.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[460px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                Every reader is different. Set the type, the spacing and the mood once, and every book you open looks
                                the way you like it.
                            </p>
                        </div>

                        <div className="relative mx-auto h-[460px] w-full max-w-[340px] md:h-[700px] md:w-[46%] md:max-w-[460px]">
                            <Image
                                src="/images/page2/page2one.png"
                                alt="A book open in the Biblio reader"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Four modes */}
            <ScrollReveal delayMs={40}>
                <section className="w-full bg-[#F5F5F7] px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[1240px]">
                        <h2
                            className="max-w-[720px] text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[56px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            Four moods, one tap apart.
                        </h2>
                        <p className="mt-4 max-w-[620px] text-[16px] leading-[1.5] text-zinc-600 md:text-[20px]">
                            Shift the mood of the page instantly. Biblio&apos;s themes even adapt to the content you are reading, so
                            the screen stays easy to sit with.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:gap-5 lg:grid-cols-4">
                            {modes.map((mode) => (
                                <div
                                    key={mode.name}
                                    className={`flex h-[240px] flex-col justify-end rounded-[28px] p-6 ring-1 md:h-[300px] md:p-8 ${mode.swatch} ${mode.ring} ${mode.text}`}
                                >
                                    <p className="text-[22px] font-normal leading-tight tracking-tight md:text-[28px]" style={{ fontFamily: "var(--font-stack-sans)" }}>
                                        {mode.name}
                                    </p>
                                    <p className="mt-2 text-[14px] leading-[1.45] opacity-70 md:text-[16px]">{mode.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Two of those themes, on a real page */}
                        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:gap-5">
                            <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-white md:h-[520px]">
                                <Image src="/images/notes/notestwo.png" alt="A page in a light theme" fill className="object-contain object-bottom" />
                            </div>
                            <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-zinc-950 md:h-[520px]">
                                <Image src="/images/notes/notesthree.png" alt="The same page in a dark theme" fill className="object-contain object-bottom" />
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Controls list, with the settings sheet */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 overflow-hidden rounded-[36px] bg-white px-7 md:flex-row md:items-stretch md:gap-16 md:px-16">
                        <div className="pb-12 md:w-[50%] md:self-center md:py-16">
                            <h2
                                className="text-[30px] font-normal leading-[1.06] tracking-tight text-zinc-900 md:text-[46px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Every control, one sheet.
                            </h2>

                            <dl className="mt-8 divide-y divide-zinc-200 border-t border-zinc-200">
                                {controls.map((control) => (
                                    <div key={control.name} className="grid gap-1 py-5 md:grid-cols-[130px_1fr] md:gap-6">
                                        <dt className="text-[16px] font-medium text-zinc-900 md:text-[18px]">{control.name}</dt>
                                        <dd className="text-[15px] leading-[1.5] text-zinc-600 md:text-[17px]">{control.desc}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Pinned to the top edge of the panel. On phones it sits above the text, so it still meets the top edge. */}
                        <div className="relative order-first h-[420px] w-full max-w-[340px] md:order-none md:h-auto md:min-h-[560px] md:w-[46%] md:max-w-none">
                            <Image src="/images/notes/notes1.png" alt="The reading settings sheet" fill className="object-contain object-top" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
