import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageThreeSection from "./Page3Section";
import PageFourSection from "./Page4Section";
import PageFiveSection from "./Page5Section";
import PageSixSection from "./Page6Section";
import PageSevenSection from "./Page7Section";


export default function FeaturesPage() {
    return (
        <div
            className="w-full"
            style={{ backgroundColor: "#EDEAE4", fontFamily: "var(--font-neue-montreal)" }}
        >
            <Navbar />

            <PageThreeSection />
            <PageFourSection />
            <PageFiveSection />
            <PageSixSection />
            <PageSevenSection />
            <Footer />
        </div>
    );
}