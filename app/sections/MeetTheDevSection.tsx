import Image from "next/image";

export default function MeetTheDevSection() {
    return (
        <section
            className="w-full bg-[#EDEAE4] px-6 py-14 md:px-10 md:py-20"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">

                {/* Heading - Center Aligned */}
                <h2
                    className="text-center text-[40px] font-normal leading-[1.05] tracking-tight text-zinc-900 md:text-[56px] lg:text-[64px]"
                    style={{ fontFamily: "var(--font-stack-sans)" }}
                >
                    The Story Behind Biblio
                </h2>

                {/* Side-by-side content container */}
                <div className="mt-10 flex w-full flex-col md:flex-row md:items-center md:gap-12 lg:gap-20">

                    {/* Text Content Area */}
                    <div className="flex w-full flex-col order-2 md:order-1 md:w-1/2">
                        {/* Name + intro line */}
                        <p className="mt-8 text-[22px] font-semibold leading-[1.3] text-zinc-900 md:mt-0 md:text-[28px] lg:text-[32px]">
                            Hi, I am Vedansh Sharma,<br />and this is my story.
                        </p>

                        {/* Body copy — paragraph 1 */}
                        <p className="mt-6 text-[17px] leading-[1.65] text-zinc-500 md:text-[20px] lg:text-[22px]">
                            A friend recommended me a book that I should read, so I grabbed the PDF of the book and was ready to dive in. But then I hit a wall: I realised I had nowhere to actually put it, and even worse, nowhere to actually read it comfortably.{" "}
                            <span className="font-semibold text-zinc-900">
                                The existing apps for reading book pdfs were either too cluttered, with laggy and outdated UIs
                            </span>{" "}
                            that just killed the vibe of the book, just didn't feel like a place I wanted to spend time in.
                        </p>

                        {/* Body copy — paragraph 2 */}
                        <p className="mt-6 text-[17px] leading-[1.65] text-zinc-500 md:text-[20px] lg:text-[22px]">
                            As someone who loves building products that people would "actually" use, I decided to make an app that assists users to read their books with no disturbance with a clean, simple and modern UI, with features that helps user to stay consistent with their reading, and AI to help them read better.
                        </p>

                        {/* Body copy — paragraph 3 */}
                        <p className="mt-6 text-[17px] leading-[1.65] text-zinc-500 md:text-[20px] lg:text-[22px]">
                            And thats how Biblio Started. What began as a simple app where users can read their books to countless important features that are actually needed. And now we are here, with{" "}
                            <span className="font-semibold text-zinc-900">All this, and much more.</span>
                        </p>
                    </div>

                    {/* Image Area - Back to original default container */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="w-full bg-[#EDEAE4]">
                            <div className="relative h-[340px] w-full md:h-[420px] lg:h-[480px]">
                                <Image
                                    src="/images/ved.png"
                                    alt="Vedansh Sharma"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
}
