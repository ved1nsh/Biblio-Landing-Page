import Image from "next/image";

export default function MeetTheDevSection() {
    return (
        <section
            className="w-full bg-[#EDEAE4] px-6 py-16 md:px-10 md:py-24"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto w-full max-w-[1320px]">
                <h2
                    className="mx-auto max-w-[720px] text-center text-[36px] font-normal leading-[1.02] tracking-tight text-zinc-900 md:text-[56px] lg:text-[64px]"
                    style={{ fontFamily: "var(--font-stack-sans)" }}
                >
                    The Story Behind Biblio
                </h2>

                <div className="mt-10 flex w-full flex-col gap-8 md:mt-16 lg:mt-24 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.9fr)] md:grid-rows-[auto_1fr] md:items-stretch md:gap-x-12 md:gap-y-0 lg:gap-x-16">
                    {/* Intro */}
                    <div className="order-1 md:col-start-1 md:row-start-1">
                        <p className="text-[22px] font-semibold leading-[1.25] text-zinc-900 md:text-[28px] lg:text-[32px]">
                            Hi, I am Vedansh Sharma,<br />and this is my story.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="order-2 w-full md:col-start-2 md:row-span-2 md:row-start-1 md:h-full">
                        <div className="relative mx-auto h-[460px] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-[#EDEAE4] md:mx-0 md:h-full md:min-h-[560px] md:max-w-none">
                            <Image
                                src="/images/ved.png"
                                alt="Vedansh Sharma"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>

                    {/* Paragraphs */}
                    <div className="order-3 flex h-full flex-col justify-end gap-5 md:col-start-1 md:row-start-2 md:mt-0 md:gap-6">
                        <p className="text-[17px] leading-[1.65] text-zinc-600 md:text-[19px] lg:text-[21px]">
                            A friend recommended me a book that I should read, so I grabbed the PDF of the book and was ready to dive in. But then I hit a wall: I realised I had nowhere to actually put it, and even worse, nowhere to actually read it comfortably.{" "}
                            <span className="font-semibold text-zinc-900">
                                The existing apps for reading book pdfs were either too cluttered, with laggy and outdated UIs
                            </span>{" "}
                            that just killed the vibe of the book, just didn&apos;t feel like a place I wanted to spend time in.
                        </p>

                        <p className="text-[17px] leading-[1.65] text-zinc-600 md:text-[19px] lg:text-[21px]">
                            As someone who loves building products that people would &quot;actually&quot; use, I decided to make an app that assists users to read their books with no disturbance with a clean, simple and modern UI, with features that helps user to stay consistent with their reading, and AI to help them read better.
                        </p>

                        <p className="text-[17px] leading-[1.65] text-zinc-600 md:text-[19px] lg:text-[21px]">
                            And thats how Biblio Started. What began as a simple app where users can read their books to countless important features that are actually needed. And now we are here, with{" "}
                            <span className="font-semibold text-zinc-900">All this, and much more.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
