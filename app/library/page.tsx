import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Library — Biblio",
    description: "One library for your ePubs, PDFs and the paper books on your shelf.",
};

// The shelf chips, drawn the way the app draws them: white pills with a coral dot,
// and the shelf you are looking at filled in coral. "dot: false" = no dot (All Books has none in the app).
const shelves = [
    { name: "All Books", dot: false },
    { name: "World War History Books", dot: true },
    { name: "Self Help Books", dot: true },
    { name: "History Books", dot: true },
    { name: "Books I love", dot: true, active: true },
    { name: "Books I want to buy", dot: true },
    { name: "Franz Kafka Books", dot: true },
];

const coral = "#D97A70";

// What you get on a book's own screen.
const bookDetail = [
    "Page counts and how far in you are",
    "A progress bar that updates as you read",
    "Physical or digital, marked clearly",
    "A jump straight into that book's journal",
];

export default function LibraryPage() {
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
                            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">Library</p>
                            <h1
                                className="mt-4 text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:text-[72px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Your personal library, digitised.
                            </h1>
                            <p className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.4] text-zinc-700 md:mx-0 md:mt-7 md:text-[24px]">
                                ePubs, PDFs and the paper books on your nightstand, in one place. What you own, what you are reading,
                                and what you want next.
                            </p>
                        </div>

                        <div className="relative mx-auto h-[460px] w-full max-w-[340px] md:h-[700px] md:w-[46%] md:max-w-[460px]">
                            <Image src="/images/library/l1.png" alt="The Biblio library" fill className="object-contain object-bottom" priority />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Shelves you name yourself */}
            <ScrollReveal delayMs={40}>
                <section className="w-full px-6 py-16 md:px-10 md:py-24">
                    {/* Cream panel = the app's own library background. Phone runs off the bottom edge. */}
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 overflow-hidden rounded-[36px] bg-[#FBF8F3] px-7 pt-12 md:flex-row md:items-stretch md:gap-14 md:px-16 md:pt-16">
                        <div className="md:w-[54%] md:self-center md:pb-16">
                            <h2
                                className="text-[32px] font-normal leading-[1.04] tracking-tight text-zinc-900 md:text-[52px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Shelves you name yourself.
                            </h2>
                            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.5] text-zinc-600 md:text-[19px]">
                                Group books by genre, by author, or by a mood only you would think of. Your library adapts to how
                                you think, not the other way round.
                            </p>

                            {/* The chips, as they look in the app */}
                            <div className="mt-8 flex flex-wrap gap-2.5 md:mt-10 md:gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-[22px] leading-none text-zinc-800 md:h-[52px] md:w-[52px]">
                                    +
                                </span>
                                {shelves.map((shelf) =>
                                    shelf.active ? (
                                        <span
                                            key={shelf.name}
                                            className="flex h-11 items-center rounded-full px-5 text-[15px] font-medium text-white md:h-[52px] md:px-6 md:text-[17px]"
                                            style={{ backgroundColor: coral }}
                                        >
                                            {shelf.name}
                                        </span>
                                    ) : (
                                        <span
                                            key={shelf.name}
                                            className="flex h-11 items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-5 text-[15px] font-medium text-zinc-800 md:h-[52px] md:px-6 md:text-[17px]"
                                        >
                                            {shelf.dot ? <span className="h-2 w-2 rounded-full" style={{ backgroundColor: coral }} /> : null}
                                            {shelf.name}
                                        </span>
                                    )
                                )}
                            </div>

                            <p className="mt-8 text-[14px] leading-[1.5] text-zinc-500 md:text-[16px]">
                                Tap <span className="font-medium text-zinc-700">+</span> to add a shelf. Move books between shelves, or
                                clear one out. It stays as curated or as sprawling as you want.
                            </p>
                        </div>

                        <div className="relative h-[420px] w-full max-w-[340px] md:h-auto md:min-h-[560px] md:w-[42%] md:max-w-none">
                            <Image src="/images/library/ll2.png" alt="Shelves in the Biblio library" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Every book has its own screen */}
            <ScrollReveal delayMs={60}>
                <section className="w-full px-6 pb-16 md:px-10 md:pb-24">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 overflow-hidden rounded-[36px] bg-white px-7 pt-12 md:flex-row-reverse md:gap-16 md:px-16 md:pt-16">
                        <div className="md:w-[48%]">
                            <h2
                                className="text-[30px] font-normal leading-[1.06] tracking-tight text-zinc-900 md:text-[46px]"
                                style={{ fontFamily: "var(--font-stack-sans)" }}
                            >
                                Every book has a story.
                            </h2>
                            <p className="mt-5 text-[16px] leading-[1.55] text-zinc-600 md:text-[19px]">
                                Tap any cover to see where you stand with it.
                            </p>
                            <ul className="mt-7 divide-y divide-zinc-200 border-t border-zinc-200">
                                {bookDetail.map((item) => (
                                    <li key={item} className="py-4 text-[16px] leading-[1.45] text-zinc-800 md:text-[18px]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative h-[420px] w-full max-w-[340px] md:h-[600px] md:w-[46%] md:max-w-none">
                            <Image src="/images/library/l2.png" alt="A book's own screen in Biblio" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Closing statement */}
            <ScrollReveal delayMs={80}>
                <section className="w-full bg-black px-6 py-16 text-white md:px-10 md:py-28">
                    <div className="mx-auto max-w-[1020px] text-center">
                        <p
                            className="text-[24px] font-normal leading-[1.12] tracking-tight md:text-[46px]"
                            style={{ fontFamily: "var(--font-stack-sans)" }}
                        >
                            More than a list. An ecosystem.
                        </p>
                        <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.55] text-zinc-300 md:mt-8 md:text-[26px] md:leading-[1.45]">
                            Whether it is a file in the cloud or a hardback on your nightstand, it lives on the same shelf, carries the
                            same progress, and feeds the same journal.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
