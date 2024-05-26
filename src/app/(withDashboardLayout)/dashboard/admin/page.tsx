"use client"

import { useGetAllTravelBuddyRequestsQuery } from "@/redux/api/user/travelApi";
import { useGetAllTripsQuery, useGetDeletedTripsQuery } from "@/redux/api/user/tripApi";
import { useGetAllUserQuery, useGetUserProfileQuery } from "@/redux/api/user/userApi";
import GroupIcon from '@mui/icons-material/Group';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Image from "next/image";
import Link from "next/link";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useEffect } from "react";
const AdminPage = () => {
    useEffect(() => {
        const lastVisit = sessionStorage.getItem('lastVisit');
        const currentTime = new Date().getTime();

        // If last visit is not recorded or it was more than 5 seconds ago, refresh the page
        if (!lastVisit || currentTime - parseInt(lastVisit, 10) > 5000) {
            sessionStorage.setItem('lastVisit', currentTime.toString());
            window.location.reload();
        }
    }, []);
    const {data:users}=useGetAllUserQuery({});
    const {data:trips}=useGetAllTripsQuery({});
    const {data:requests}=useGetAllTravelBuddyRequestsQuery({});
    const {data:deletedTrips}=useGetDeletedTripsQuery({});
    const {data:userProfile}=useGetUserProfileQuery({});
    // console.log(userProfile);
    // console.log(deletedTrips);
    return (
        <div>
      <div className="flex h-screen ">
<div className="flex flex-col flex-1 w-full overflow-y-auto">

    <main className="">
        <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl border-4 border-green-400">

        <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                    <div className="col-span-12 mt-8">
                        <div className="flex items-center h-10 intro-y">
                            <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
                        </div>
                        <div className="grid grid-cols-12 gap-6 mt-5">
                            <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                href="#">
                                <div className="p-5">
                                    <div className="flex justify-between">
                                <GroupIcon sx={{color:"blue"}}/>
                                        <div
                                            className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">users</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{users?.length}</div>

                                            <div className="mt-1 text-base text-gray-600">Users</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                href="#">
                                <div className="p-5">
                                    <div className="flex justify-between">
                            <SpeakerNotesIcon sx={{color:"yellow"}}/>
                                        <div
                                            className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">trips</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{trips?.length}</div>

                                            <div className="mt-1 text-base text-gray-600">Trips</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                href="#">
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                        </svg>
                                        <div
                                            className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">requests</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                    <div className="mt-3 text-3xl font-bold leading-8">{requests?.length}</div>

                                            <div className="mt-1 text-base text-gray-600">Travel buddy requests</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                href="#">
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                        <div
                                            className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">deleted trips</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{deletedTrips?.length}</div>

                                            <div className="mt-1 text-base text-gray-600">Deleted trips</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
               
                    <div className="col-span-12 mt-5">
                        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                            <div className="bg-white p-4 shadow-lg rounded-lg">
                                <h1 className="font-bold text-base">Table</h1>
                                <div className="mt-4">
                                    <div className="flex flex-col">
                                        <div className="-my-2 overflow-x-auto">
                                            <div className="py-2 align-middle inline-block min-w-full">
                                                <div
                                                    className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead>
                                                            <tr>
                                                          <th
                                                                    className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                             <span className="mr-2">Profile</span>
                                                                    </div>
                                                                </th>
                                                                <th
                                                                    className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">Name</span>
                                                                    </div>
                                                                </th>
                                                                <th
                                                                    className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                              <span className="mr-2">Email</span>
                                                                    </div>
                                                                </th>
                                                                <th
                                                                    className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">ACTION</span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            <tr>
                                                                <td
                                                                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="avatar">
  <div className="w-[70px] rounded-full">
    <Image alt="profile" width={70} height={96} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
                                            
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>{userProfile?.user?.name}</p>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-5 h-5 mr-1" fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor">
                                                                            <path stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        <p>{userProfile?.user?.email}</p>
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                        <Link href="/dashboard/admin/admin-profile" className="text-blue-500 hover:text-blue-600">
                                        <RemoveRedEyeIcon />
                                                                        <p>View</p>
                                                                        </Link>
                                                                       
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</div>
        </div>
    );
};

export default AdminPage;