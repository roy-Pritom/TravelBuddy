"use client"
import Link from "next/link";
import { TYpeAnimation } from "./TYpeAnimation";
import Lottie from "lottie-react";
import Travel from '../../../../src/Travel.json'
import { getUserInfo } from "@/services/auth.service";
import { TUser } from "@/types";

const Banner = () => {
const user=getUserInfo() as TUser;
    return (
        <div>
            <section className="lg:flex justify-between items-center flex-row  gap-4">
                <div className="lg:flex-1">
                  <TYpeAnimation/>

                    <p className="md:text-sm text-xs font-medium uppercase text-[#5D5FEF] mt-5">RECOMMENDED SERVICES</p>
                    {/* buttons */}
                    <div className="mt-5 flex gap-2 sm:max-w-[600px] max-w-full flex-wrap">
                       <Link href="#trips">
                       <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>Unlocking endless horizons for adventurers worldwide</button>
                       </Link>
                       <Link href="#trips">
                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-green-200 `}>Create unforgettable memories with our travel buddy request service</button>
                        </Link>
                        
                        <Link href="#trips">
                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>Discover breathtaking destinations, connect with like-minded travelers</button>
                        </Link>

                  

                    </div>

                    <div className="flex items-center gap-2 mt-5">
                        {/* <Image src={ratingImg} width={37} height={29} alt="rating" /> */}
                        <p className="md:text-lg text-sm">Rated at <span className="font-bold">4.9</span> By <span className="font-bold">30000 + </span>Users Globally</p>
                    </div>
                  <Link href={`/dashboard/${user?.role}/post-travel`}>
                  <button className='btn bg-[#29CD9C] text-white my-6 w-[200px] hover:bg-black rounded-full'>Share Your Trip</button>
                  </Link>

                </div>
                {/* video */}
                <div className=" lg:h-[550px] h-[300px]  mt-5 ">
                <Lottie animationData={Travel}
              height="100%"
              width="100%"
              />
                </div>

            </section>


        </div>
    );
};

export default Banner;