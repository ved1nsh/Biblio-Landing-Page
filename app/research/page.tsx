import ScrollReveal from "../components/ScrollReveal";
import ResearchHeroSection from "./sections/ResearchHeroSection";
import ResearchIntroSection from "./sections/ResearchIntroSection";
import MarketOverviewSection from "./sections/MarketOverviewSection";
import ProblemObjectiveSection from "./sections/ProblemObjectiveSection";
import StrategicGapSection from "./sections/StrategicGapSection";
import BiblioVsOthersSection from "./sections/BiblioVsOthersSection";
import PainPointsSection from "./sections/PainPointsSection";
import ResearchSummarySections from "./sections/ResearchSummarySections";
import Footer from "../components/Footer";

export default function MarketResearchPage() {
    return (
        <main
            className="flex min-h-screen w-full flex-col bg-white text-black"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
            <ScrollReveal delayMs={30}>
                <ResearchHeroSection />
            </ScrollReveal>

            <ScrollReveal delayMs={60}>
                <ResearchIntroSection />
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
                <ProblemObjectiveSection />
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
                <MarketOverviewSection />
            </ScrollReveal>

            <ScrollReveal delayMs={120}>
                <StrategicGapSection />
            </ScrollReveal>

            {/* User Pain Points Section */}
            <ScrollReveal delayMs={140}>
                <BiblioVsOthersSection />
            </ScrollReveal>

            {/* Biblio vs Others Section */}
            <ScrollReveal delayMs={160}>

                <PainPointsSection />
            </ScrollReveal>

            {/* Research Summary Sections */}
            <ScrollReveal delayMs={180}>
                <ResearchSummarySections />
            </ScrollReveal>

            <ScrollReveal delayMs={180}>
                <Footer />
            </ScrollReveal>

        </main>
    );
}
