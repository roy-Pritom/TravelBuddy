import { formattedDate } from "@/utils/dateFormatter";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TravelPosts = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/trips`, {
        next: {
            revalidate: 10
        }
    });
    const trips = await res.json();
    // console.log(trips);
    return (
        <div className="mt-3">
                    <h3 className="lg:text-4xl  text-2xl font-bold text-[#29CD9C] text-center mb-4">Trips</h3>
                    <p className="text-center mb-10 w-[50%] mx-auto text-[#2F4F4F]">Embark on a once-in-a-lifetime world tour, where you will traverse continents and experience the unique cultures, landscapes, and cuisines of iconic cities from Paris to Tokyo. </p>
         <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 md:gap-5">
         {
                trips?.data?.slice(0,3)?.map((trip: any) =><div
                key={trip?.id}
                className="max-w-2xl mx-auto">
    
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                 
                        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                    
                    <div className="p-5">
                      <p className="font-bold text-base text-white">Destination: <span className="text-base font-normal">{trip?.destination}</span></p>
                      <div className="flex items-center  justify-between my-2">
                      <p className="font-bold text-sm text-white">Start Date: <span className="text-sm font-normal">{formattedDate(trip?.startDate)}</span></p>
                      <p className="font-bold text-sm text-white">End Date: <span className="text-sm font-normal">{formattedDate(trip?.endDate)}</span></p>
                      </div>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{trip?.description}</p>
                        <a href="#" className="text-white  hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  bg-[#29CD9C] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Details
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>)
            }
         </div>
         <div className="flex justify-center items-center mt-5 ">
         <Link href='/trips'>
         <button className="btn bg-[#29CD9C] hover:bg-black text-white">See More</button>
         </Link>
         </div>
        </div>
    );
};

export default TravelPosts;