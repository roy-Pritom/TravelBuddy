"use client"
import Loader from "@/components/shared/Loader/Loader";
import { useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { useDebounced } from "@/redux/hooks";
import { formattedDate } from "@/utils/dateFormatter";
import Image from "next/image";
import { useState } from "react";
import Pagination from "./components/Pagination";

const TripsPage =  () => {
    const [searchTerm,setSearchTerm]=useState<string>('')
    const query:Record<string,any>={};
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(6);


    const debounced=useDebounced({searchTerm:searchTerm,delay:500});
    if(!!debounced){
      query['searchTerm']=searchTerm;
    }
  const {data:trips,isLoading}=useGetAllTripsQuery({...query});
//   console.log(trips);
const lastPostIndex=currentPage * postPerPage;
const firstPostIndex=lastPostIndex - postPerPage;
const currentPosts=trips?.slice(firstPostIndex,lastPostIndex);
    return (
        <div className="">
            <div className="my-6 flex md:flex-row flex-col  md:justify-between   py-5 px-12 items-start md:gap-0 gap-4 ">
        <h3 className="lg:text-4xl  text-xl font-bold text-[#29CD9C]">All Trips</h3>
                <label className="input input-bordered focus:outline-none flex items-center gap-2">
                    <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} className="grow focus:outline-none" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>

            {
                isLoading ? 
                (
                    <Loader/>
                )
                :
                (
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5  lg:max-w-7xl md:mx-auto ">
                {
                    currentPosts?.map((trip: any) => <div
                        key={trip?.id}
                        className="max-w-2xl mx-auto h-[450px]">

                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[450px]">

                        <Image className="rounded-t-lg w-full h-[200px]" src={trip?.file ? trip?.file : 'https://flowbite.com/docs/images/blog/image-1.jpg'} alt="trip-photo"  width={300} height={200}/>

                            <div className="p-5">
                                <p className="font-bold text-base text-white">Destination: <span className="text-base font-normal">{trip?.destination}</span></p>
                                <div className="flex items-center  justify-between my-2">
                                    <p className="font-bold text-sm text-white">Start Date: <span className="text-sm font-normal">{formattedDate(trip?.startDate)}</span></p>
                                    <p className="font-bold text-sm text-white">End Date: <span className="text-sm font-normal">{formattedDate(trip?.endDate)}</span></p>
                                </div>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{trip?.description}</p>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Details
                                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
                )
            }
          <div className="flex justify-center items-center mt-5">
          <Pagination
            totalPosts={trips?.length}
            postPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
          </div>

        </div>
    );
};

export default TripsPage;