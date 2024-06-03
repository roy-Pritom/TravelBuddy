import AboutUsSection from "@/components/UI/Home/AboutUsSection";
import Banner from "@/components/UI/Home/Banner";
import FaqSection from "@/components/UI/Home/FaqSection";
import LatestNews from "@/components/UI/Home/LatestNews";
import SearchBar from "@/components/UI/Home/SearchBar";
import TravelPosts from "@/components/UI/Home/TravelPosts";
import WhyJoin from "@/components/UI/Home/WhyJoin";
import WorkingStep from "@/components/UI/Home/WorkingStep";
import { whatWeDo } from "@/constants/faq";

export default function HomePage() {
  return (
  <div className="">
  <div className="lg:mx-20 md:mx-10 mx-4">
    <Banner/>
    <AboutUsSection about={whatWeDo}/>
    <WorkingStep/>
    <TravelPosts/>
    <LatestNews/>
    <WhyJoin/>
    <FaqSection/>
  </div>
    
  </div>
  )
}
