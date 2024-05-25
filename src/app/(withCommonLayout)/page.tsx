import Banner from "@/components/UI/Home/Banner";
import LatestNews from "@/components/UI/Home/LatestNews";
import SearchBar from "@/components/UI/Home/SearchBar";
import TravelPosts from "@/components/UI/Home/TravelPosts";
import WhyJoin from "@/components/UI/Home/WhyJoin";

export default function HomePage() {
  return (
  <div className="">
  <div className="mx-20">
  <Banner/>
  </div>
    <div className="mx-12">
      <SearchBar/>
    <TravelPosts/>
    <LatestNews/>
    <WhyJoin/>
    </div>
  </div>
  )
}
