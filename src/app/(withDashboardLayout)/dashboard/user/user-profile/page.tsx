"use client"
import Image from "next/image";
import { useState } from "react";
import EditProfileModal from "./components/EditProfileModal";
import { useGetUserProfileQuery } from "@/redux/api/user/userApi";
import LockResetIcon from '@mui/icons-material/LockReset';
import { useGetTravelRequestsByUserQuery } from "@/redux/api/user/travelApi";
import { useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import Link from "next/link";

const UserProfilePage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { data: userProfileData, isLoading } = useGetUserProfileQuery({});
    const { data: taskData } = useGetTravelRequestsByUserQuery({});
    const { data: trips } = useGetTripByUserQuery({});


    // console.log(userProfileData);
    return (

        <div className="">
            {
                isLoading ? (
                    <span className="loading loading-spinner loading-md"></span>

                )  :
                (
                    <main className="profile-page ">
            <section className="relative block h-[500px] ">
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        width: '100%',
                        height: '400px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <Image alt="profilePhoto" src={userProfileData?.profilePhoto ? userProfileData?.profilePhoto : "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"} className="shadow-xl rounded-full  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[115px]" width={200} height={100} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                             <Link href='/dashboard/change-password'>
                                   <button className="btn ">
                                        <LockResetIcon/>
                                            Change Password
                                        </button>
                                   </Link>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{trips?.length}</span><span className="text-sm text-blueGray-400">Posts</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{taskData?.length}</span><span className="text-sm text-blueGray-400">Requests</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userProfileData?.age}</span><span className="text-sm text-blueGray-400">Age</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-1 ">
                                <button onClick={() => setOpen(true)} className="btn btn-outline mb-3">Edit profile</button>
                                <EditProfileModal open={open} setOpen={setOpen} />
                                <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                    {userProfileData?.user?.name}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {userProfileData?.location}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Email - {userProfileData?.user?.email}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {userProfileData?.bio}
                                        </p>
                                        {/* <a href="#pablo" className="font-normal text-pink-500">Show more</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">

                </footer>
            </section>
        </main>
                )
            }
        </div>

    );
};

export default UserProfilePage;