import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageThreeSection from "./Page3Section";
import PageFourSection from "./Page4Section";
import PageFiveSection from "./Page5Section";
import PageSixSection from "./Page6Section";
import PageSevenSection from "./Page7Section";
import ScrollReveal from "../components/ScrollReveal";


export default function FeaturesPage() {
    return (
        <div
            className="w-full"
            style={{ backgroundColor: "#EDEAE4", fontFamily: "var(--font-neue-montreal)" }}
        >
            <ScrollReveal delayMs={20}>
                <Navbar />
            </ScrollReveal>

            <ScrollReveal delayMs={40}>
                <PageThreeSection />
            </ScrollReveal>
            <ScrollReveal delayMs={60}>
                <PageFourSection />
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
                <PageFiveSection />
            </ScrollReveal>
            <ScrollReveal delayMs={100}>
                <PageSixSection />
            </ScrollReveal>
            <ScrollReveal delayMs={120}>
                <PageSevenSection />
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
                <Footer />
            </ScrollReveal>
        </div>
    );
}