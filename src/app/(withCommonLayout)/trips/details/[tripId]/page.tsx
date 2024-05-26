import { formattedDate } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";

const TripDetailsPage = async({params}:{params:{tripId:string}}) => {
    const {tripId}=params;
    const res=await fetch(`${process.env.BACKEND_URL}/get-trip/${tripId}`);
    const trip=await res.json();
    // console.log(trip);
    return (
        <div>
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={trip?.data?.file ? trip?.data?.file : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"} alt="trip-image" width={400} height={200} />
    <div>
      <h1 className="text-5xl font-bold">{trip?.data?.destination}</h1>
      <p className="py-6">{trip?.data?.description}</p>
      <p className="">Start date : <span>{formattedDate(trip?.data?.startDate)}</span></p>
      <p className="mt-2">End date : <span>{formattedDate(trip?.data?.endDate)}</span></p>
      <p className="mt-2">Travel type: <span>{trip?.data?.travelType}</span></p>

     <Link href="/dashboard/user/travel-request">
     <button className="btn btn-primary mt-3">Join Trip</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TripDetailsPage;