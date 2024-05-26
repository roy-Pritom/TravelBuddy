import AskQuestion from "@/components/UI/Home/AskQuestion";
import Banner from "@/components/UI/Home/Banner";
import LatestNews from "@/components/UI/Home/LatestNews";
import SearchBar from "@/components/UI/Home/SearchBar";
import TravelPosts from "@/components/UI/Home/TravelPosts";
import WhyJoin from "@/components/UI/Home/WhyJoin";

export default function HomePage() {
  return (
  <div className="">
  <div className="lg:mx-20 md:mx-10 mx-4">
    <Banner/>
    <TravelPosts/>
    <LatestNews/>
    <WhyJoin/>
    <AskQuestion/>
  </div>
    
  </div>
  )
}
