import { formattedDate } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";

const TripDetailsPage = async({params}:{params:{tripId:string}}) => {
    const {tripId}=params;
    const res=await fetch(`https://assignment-8-server-gamma.vercel.app/api/get-trip/${tripId}`);
    const trip=await res.json();
    // console.log(trip);
    return (
        <div className="md:mt-10 mt-6">
          <div className="hero ">
  <div className="hero-content flex-col lg:flex-row lg:gap-20 md:gap-5 gap-3 bg-gray-200 lg:p-40 p-4 rounded-2xl shadow-2xl">
    <Image src={trip?.data?.file ? trip?.data?.file : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"} alt="trip-image" width={300} height={150} className="shadow-2xl rounded-xl" />
    <div>
      <h1 className="text-5xl font-bold">{trip?.data?.destination}</h1>
      <p className="pt-6">{trip?.data?.description}</p>
      <p className="my-2"><span className="font-bold">Budget : </span><span>${trip?.data?.budget}</span></p>
      <p className=""><span className="font-bold">Start date : </span><span>{formattedDate(trip?.data?.startDate)}</span></p>
      <p className="mt-2"><span className="font-bold">End date : </span><span>{formattedDate(trip?.data?.endDate)}</span></p>
      <p className="mt-2"><span className="font-bold">Travel type: </span><span>{trip?.data?.travelType}</span></p>

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