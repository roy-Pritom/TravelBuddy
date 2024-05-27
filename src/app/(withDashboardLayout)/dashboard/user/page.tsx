"use client"

import { useGetTravelRequestsByUserQuery } from "@/redux/api/user/travelApi";
import { useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import { useGetUserProfileQuery } from "@/redux/api/user/userApi";
import { Trip } from "@/types/travel/travelType";
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { formattedDate } from "@/utils/dateFormatter";



const UserPage = () => {
    
    const { data: user, isLoading } = useGetUserProfileQuery({});
    //   console.log(user);
    const { data: taskData } = useGetTravelRequestsByUserQuery({});
    // console.log(taskData);
    const { data: trips } = useGetTripByUserQuery({});
    // console.log(trips);
    return (
        <div className="">
            {
                isLoading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-spinner loading-md"></span>
                    </div>
                )
                    :
                    (
                        <div className="relative bg-yellow-50  max-h-screen overflow-hidden">


                            <div className=" max-h-screen ">
                                <div className="px-6 py-8">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="bg-white rounded-3xl p-8 mb-5">
                                            <h1 className="text-3xl font-bold mb-10">Your Ultimate Dashboard for Planning and Sharing Unforgettable Adventures!</h1>
                                         <div className="flex items-center justify-between">
                                                <div className="flex items-stretch">
                                                    <div className="text-gray-400 text-xs">Members<br />connected</div>
                                                    <div className="h-100 border-l mx-4"></div>
                                                    <div className="flex flex-nowrap -space-x-3">
                                                        <div className="h-9 w-9">
                                                            <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                                                        </div>
                                                        <div className="h-9 w-9">
                                                            <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-x-2">
                                                    <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                                        </svg>
                                                    </button>
                                                    <Link href='/dashboard/user/user-profile'>
                                                        <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                                            Profile
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>

                                            <hr className="my-10" />

                                            <div className="grid grid-cols-2 gap-x-20">
                                                <div>
                                                    <h2 className="text-2xl font-bold mb-4">Stats</h2>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="col-span-2">
                                                            <div className="p-4 bg-green-100 rounded-xl">
                                                                <div className="font-bold text-xl text-gray-800 leading-none"><span>Good day,</span> <span>{user?.user?.name}</span></div>
                                                                <div className="mt-5">
                                                                    <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                                                        Start tracking
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                                            <div className="font-bold text-2xl leading-none">{trips?.length}</div>
                                                            <div className="mt-2">Travel Posts</div>
                                                        </div>
                                                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                                            <div className="font-bold text-2xl leading-none">{taskData?.length}</div>
                                                            <div className="mt-2">Travel Requests</div>
                                                        </div>
                                                        <div className="col-span-2">
                                                            <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                                                                <div className="font-bold text-xl leading-none">Your daily plan</div>
                                                                <div className="mt-2">5 of 8 completed</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold mb-4">Your activities</h2>

                                                    <div className="space-y-4">
                                                     
                                                  {/* activities */}
                                                  {
                                                    trips?.slice(0,2)?.map((trip:Trip)=>   <div 
                                                    key={trip.id}
                                                    className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                                    <div className="flex justify-between">
                                                        <div className="text-gray-400 text-xs">Travel post</div>
                                         <div className="text-gray-400 text-xs flex items-center">
                                         <LocationOnIcon sx={{width:"20px",height:"15px"}}/>
                                            {trip?.destination}
                                            </div>
                                                    </div>
                                          <Link href='/dashboard/user/post-travel'>
                              
                                         <p className="font-bold hover:text-yellow-800 hover:underline">
                                                
                                                {trip?.description}
                                            </p>
                                    
                                          </Link>
                                                    <div className="text-sm text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>Deadline is {formattedDate(trip?.endDate)}
                                                    </div>
                                                </div>)
                                                  }
                                                  <div className="flex justify-end">
                                               <Link href='user/post-travel'>
                                               <button className="btn btn-xs">See all</button>
                                               </Link>

                                                  </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default UserPage;