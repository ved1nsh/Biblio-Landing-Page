"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTwoSection from "./sections/FeaturesSection";
import ResearchPage from "./sections/ResearchSection";
import MeetTheDevSection from "./sections/MeetTheDevSection";
import ClosingNoteSection from "./sections/ClosingNoteSection";
import ScrollReveal from "./components/ScrollReveal";
import DownloadModal from "./components/DownloadModal";

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#EDEAE4", fontFamily: "var(--font-neue-montreal)" }}
    >
      <ScrollReveal delayMs={20}>
        <section className="w-full overflow-hidden bg-[#EDEAE4] px-6 pt-24 pb-8 md:px-10 md:pt-28 md:pb-12">
          <Navbar />

          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="md:w-[44%] md:max-w-[520px]">
              <h1
                className="max-w-[360px] text-[40px] font-normal leading-[0.98] tracking-tight text-zinc-900 md:max-w-none md:text-[76px]"
                style={{ fontFamily: "var(--font-stack-sans)" }}
              >
                Introducing, Biblio.
              </h1>

              <p className="mt-4 max-w-[340px] text-[16px] leading-[1.35] text-zinc-700 md:mt-6 md:max-w-[560px] md:text-[26px]">
                Your one stop application for all your digital reading needs
              </p>

              <div className="mt-6 flex flex-row items-center justify-center md:mt-8 md:justify-start">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="rounded-full bg-black px-7 py-2.5 text-[12px] font-regular text-white transition-opacity hover:opacity-85 md:px-9 md:py-3.5 md:text-[16px]"
                >
                  Download now
                </button>
              </div>
            </div>

            <div className="mt-8 w-full max-w-[360px] md:mt-0 md:w-[50%] md:max-w-[520px]">
              <div className="relative h-[520px] w-full md:h-[780px]">
                <Image
                  src="/images/main.png"
                  alt="Biblio home screen preview"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={60}>
        <section className="flex min-h-[68vh] w-full items-center bg-black px-6 py-16 text-white md:min-h-[70vh] md:px-8 md:py-20">
          <div className="mx-auto w-full max-w-[1280px] px-8 text-center md:px-16">
            <p
              className="text-[32px] font-regular leading-[1.12] tracking-tight md:text-[58px]"
              style={{ fontFamily: "var(--font-stack-sans)" }}
            >
              Welcome to Biblio — a smarter way to read, understand, and stay consistent with your books.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <div>
          <PageTwoSection />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={90}>
        <div>
          <ResearchPage />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={100}>
        <div>
          <MeetTheDevSection />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={120}>
        <div>
          <ClosingNoteSection />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <Footer />
      </ScrollReveal>

      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </div>
  );
}



