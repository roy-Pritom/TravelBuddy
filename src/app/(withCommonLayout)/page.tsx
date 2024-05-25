import Banner from "@/components/UI/Home/Banner";
import TravelPosts from "@/components/UI/Home/TravelPosts";

export default function HomePage() {
  return (
  <div className="">
  <div className="mx-20">
  <Banner/>
  </div>
    <div className="mx-12">
    <TravelPosts/>
    </div>
  </div>
  )
}
