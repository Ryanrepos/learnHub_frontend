import {ChooseUs} from "../components/LandingPage/ChooseUs.tsx";
import {AuthTop} from "../components/LandingPage/AuthTop.tsx";
import {FeaturedCourses} from "../components/LandingPage/FeaturedCourses.tsx";
import {HowWorks} from "../components/LandingPage/HowWorks.tsx";
import {Testimonials} from "../components/LandingPage/Testimonials.tsx";

export function LandingPage() {
    return(<div>
        <AuthTop/>
        <ChooseUs/>
        <FeaturedCourses/>
        <HowWorks/>
        <Testimonials/>
    </div>)
}