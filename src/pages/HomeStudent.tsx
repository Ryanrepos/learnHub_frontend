import WelcomeHero from "../components/HomeStudent/WelcomeHero.tsx";
import RecommendedCourses from "../components/HomeStudent/RecommendedCourses.tsx";
import TrendingNow from "../components/HomeStudent/TrendingNow.tsx";
import CategoryExplorer from "../components/HomeStudent/CategoryExplorer.tsx";
import { Testimonials } from "../components/LandingPage/Testimonials.tsx";

export default function HomeStudent() {
    return (
        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 40px' }}>
            <WelcomeHero />
            <RecommendedCourses />
            <TrendingNow />
            <CategoryExplorer />
            <Testimonials />
        </div>
    );
}