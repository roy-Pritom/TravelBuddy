"use client"
import Link from "next/link";
import { TYpeAnimation } from "./TYpeAnimation";
import Lottie from "lottie-react";
import Travel from '../../../../src/Travel.json'

const Banner = () => {

    return (
        <div>
            <section className="lg:flex justify-between items-center flex-row  gap-4">
                <div className="lg:flex-1">
                  <TYpeAnimation/>
                    {/* <h2 className="md:text-6xl text-3xl font-[800] text-black">Let <span className="text-[#29CD9C]">Us </span>Be Your <span className="text-[#29CD9C]"> <br />Earning </span>Partner </h2> */}
                    {/* search */}
                   {/* <button className='btn btn-success text-white my-6'>GET SIGN UP</button> */}

                    <p className="md:text-sm text-xs font-medium uppercase text-[#5D5FEF] mt-5">RECOMMENDED SERVICES</p>
                    {/* buttons */}
                    <div className="mt-5 flex gap-2 sm:max-w-[600px] max-w-full flex-wrap">
                       <Link href="#service">
                       <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>responsive-web-design-services-easy earn-solutions</button>
                       </Link>

                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-green-200 `}>Serverless Computing Services : Get Started with Achintya Solutions</button>

                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>Strategic SEO Solutions for Maximum Online Visibility &#8211; Achintya</button>

                  

                    </div>

                    <div className="flex items-center gap-2 mt-5">
                        {/* <Image src={ratingImg} width={37} height={29} alt="rating" /> */}
                        <p className="md:text-lg text-sm">Rated at <span className="font-bold">4.9</span> By <span className="font-bold">30000 + </span>Customers Globally</p>
                    </div>
                  <Link href='/register'>
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