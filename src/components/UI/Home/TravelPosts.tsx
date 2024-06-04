"use client"
import { formattedDate } from "@/utils/dateFormatter";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { useDebounced } from "@/redux/hooks";
import Loader from "@/components/shared/Loader/Loader";
import { Dayjs } from "dayjs";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelPosts = () => {
    AOS.init();
    const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(null); 
    const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null); 
    const [searchTerm,setSearchTerm]=useState<string>('')
    // console.log(selectedStartDate);
    const query:Record<string,any>={};
    const debounced=useDebounced({searchTerm:searchTerm,delay:500});
    if(!!debounced){
      query['searchTerm']=searchTerm;
    }
    query['startDate']=selectedStartDate ? selectedStartDate.format('YYYY-MM-DD') : undefined;
    query['endDate']=selectedEndDate ? selectedEndDate.format('YYYY-MM-DD') : undefined;
    const {data,isLoading}=useGetAllTripsQuery({...query})
    const trips=data?.trips as [];

    // console.log(trips);
    return (
       <div className="md:mt-0 mt-5">
        <SearchBar setSearchTerm={setSearchTerm} selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={setSelectedEndDate}
        />

        {
            isLoading ?
            (
                <Loader/>
            )
            :
            (
                <div className="md:mt-10 mt-5" id="trips">
                    <h3 className="lg:text-4xl  text-2xl font-bold text-[#29CD9C] text-center mb-4">Trips</h3>
                    <p className="text-center mb-10 md:w-[55%] w-full mx-auto text-[#2F4F4F]">Embark on a once-in-a-lifetime world tour, where you will traverse continents and experience the unique cultures, landscapes, and cuisines of iconic cities from Paris to Tokyo. </p>
         <div className="lg:grid lg:grid-cols-3 flex flex-col justify-center items-center md:gap-5 md:p-0 gap-5  ">
         {
            searchTerm === '' && selectedStartDate === null &&selectedEndDate===null ?
            (
                trips?.slice(0,9)?.map((trip: any) =><div
                key={trip?.id}
                className="h-[470px] cursor-pointer hover:transform hover:scale-110 transition duration-300 ease-in-out " data-aos="fade-up"
                data-aos-duration="3000">
    
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[470px]">
                 
                        <Image className="rounded-t-lg w-full h-[200px] " src={trip?.file ? trip?.file : "https://flowbite.com/docs/images/blog/image-1.jpg" } alt="trip-photo"  width={300} height={200}/>
                    
                    <div className="p-5">
                      <p className="font-bold text-base text-white">Destination: <span className="text-base font-normal">{trip?.destination}</span></p>
                      <div className="flex items-center  justify-between my-2">
                      <p className="font-bold text-sm text-white">Start Date: <span className="text-sm font-normal">{formattedDate(trip?.startDate)}</span></p>
                      <p className="font-bold text-sm text-white">End Date: <span className="text-sm font-normal">{formattedDate(trip?.endDate)}</span></p>
                      </div>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{trip?.description}</p>
                        <Link href={`/trips/details/${trip?.id}`} className="text-white  hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  bg-[#29CD9C] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Details
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>)
            )
            :
            (
                trips?.map((trip: any) =><div
                key={trip?.id}
                className="h-[470px]">
    
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[470px]">
                 
                <Image className="rounded-t-lg w-full h-[200px] " src={trip?.file ? trip?.file : "https://flowbite.com/docs/images/blog/image-1.jpg" } alt="trip-photo"  width={300} height={200}/>
                    
                    <div className="p-5">
                      <p className="font-bold text-base text-white">Destination: <span className="text-base font-normal">{trip?.destination}</span></p>
                      <div className="flex items-center  justify-between my-2">
                      <p className="font-bold text-sm text-white">Start Date: <span className="text-sm font-normal">{formattedDate(trip?.startDate)}</span></p>
                      <p className="font-bold text-sm text-white">End Date: <span className="text-sm font-normal">{formattedDate(trip?.endDate)}</span></p>
                      </div>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{trip?.description}</p>
                        <Link href={`/trips/details/${trip?.id}`} className="text-white  hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  bg-[#29CD9C] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Details
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>)
            )
                
            }
         </div>
         <div className="flex justify-center items-center mt-5 ">
         <Link href='/trips'>
         <button className="btn bg-[#29CD9C] hover:bg-black text-white">See More</button>
         </Link>
         </div>
        </div>
            )
        }
       </div>
    );
};

export default TravelPosts;