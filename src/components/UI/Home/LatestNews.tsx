"use client"
import { FaRegUser, FaCalendarAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import { useEffect } from "react";
const LatestNews = () => {
    useEffect(() => {
        AOS.init()
}, [])
    return (
        <div className="mt-16 ">
        <h1 className="md:text-3xl text-2xl font-bold text-center mb-14 text-[#29CD9C]">Latest News Update</h1>
        <div className="flex lg:flex-row flex-col items-center gap-5 md:gap-10 justify-center lg:gap-10">
            <div className="relative" data-aos="zoom-in-right" >
                <Image src="https://themehut.co/html/geair/assets/img/blog/blog_img01.jpg" width={600} height={600}
                className="rounded-xl" alt="userImg" />
                    <div className="absolute md:bottom-10 md:left-10 bottom-4 left-6">
                    <p className="flex items-center gap-3 text-white font-medium mb-3"><FaRegUser></FaRegUser><span>Emely Watson</span> | <span><FaCalendarAlt></FaCalendarAlt></span>February 19, 2022</p>
                    <p className="md:text-3xl text-base text-white font-bold">Depending on your departure point <br />and destination flights</p>
                    </div>
            </div>

            <div className="flex flex-col gap-8">

                     <div className="px-5 py-2 ">
                     <div className="flex md:flex-row flex-col items-center gap-4">
                    <Image src="https://themehut.co/html/geair/assets/img/blog/blog_img02.jpg" 
                    className="rounded-xl hover:transform hover:scale-110 transition duration-300 ease-in-out "
                    alt="" width={170} height={170} />
                    <div className="">
                        <p className="flex flex-row  items-center md:gap-3 gap-2 text-gray-500 mb-3"><FaRegUser></FaRegUser><span>Emely Watson</span> | <span><FaCalendarAlt></FaCalendarAlt></span>February 19, 2022</p>
                        <p className="md:text-xl text-base font-medium">Happy International Country Flight <br />Attendant Day</p>
                 
                    <hr className="border-2 mt-8" />
                    </div>
                </div>


                     </div>
                     <div className="px-5 py-2">
                     <div className="flex items-center md:flex-row flex-col gap-4">
                    <Image src="https://themehut.co/html/geair/assets/img/blog/blog_img03.jpg" 
                    className="rounded-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
                    alt="" width={170} height={170} />
                    <div className="">
                        <p className="flex items-center md:gap-3 gap-2  text-gray-500 mb-3"><FaRegUser></FaRegUser><span>Emely Watson</span> | <span><FaCalendarAlt></FaCalendarAlt></span>February 19, 2022</p>
                        <p className="md:text-xl text-base font-medium">The US is a Large Country and
                        <br />   Climate Varies by Region</p>
                 
                    <hr className="border-2 mt-8" />
                    </div>
                </div>


                     </div>
                     <div className="px-5 py-2">
                     <div className="flex md:flex-row flex-col items-center gap-4">
                    <Image src="https://themehut.co/html/geair/assets/img/blog/blog_img04.jpg" 
                    className="rounded-xl hover:transform hover:scale-110 transition duration-300 ease-in-out"
                    alt="" width={170} height={170} />
                    <div className="">
                        <p className="flex items-center md:gap-3 gap-2  text-gray-500 mb-3"><FaRegUser></FaRegUser><span>Emely Watson</span> | <span><FaCalendarAlt></FaCalendarAlt></span>February 19, 2022</p>
                        <p className="ms:text-xl text-base font-medium">But There are Dozen of Low-cost <br />Airlines Including</p>
                 
                    <hr className="border-2 mt-8" />
                    </div>
                </div>


                     </div>


  


            </div>
        </div>
    </div>
    );
};

export default LatestNews;