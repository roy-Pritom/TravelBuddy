import Image from "next/image";

const WhyJoin = () => {
    return (
        <div className="mt-20">
            <h2 className="md:text-3xl text-2xl font-bold text-center mb-14 text-[#29CD9C]">Why Join Us</h2>
            <div className="flex md:flex-col lg:flex-row flex-col justify-center items-center lg:gap-32 md:gap-10">
               
               <div className="w-[300px] text-center">
                <Image src="https://static.tildacdn.com/lib/tildaicon/39323262-6639-4465-b530-356162346638/5ev_present.svg" alt="gift" width={50} height={50} className="mx-auto"/>
                  <p className="text-xl font-bold my-5">Memorably Unique</p>
                  <p>Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries</p>
               </div>
               <div className="w-[300px] text-center">
                <Image src="https://static.tildacdn.com/lib/tildaicon/66346465-3061-4866-b933-306232363263/2web_star.svg" alt="gift" width={50} height={50} className="mx-auto"/>
                  <p className="text-xl font-bold my-5">Incredibly Authentic</p>
                  <p>Find like-minded travel buddies and discover an authentic and exciting new way of traveling</p>
               </div>
               <div className="w-[300px] text-center">
                <Image src="https://static.tildacdn.com/tild6434-3166-4534-a162-343166343165/9.svg" alt="gift" width={50} height={50} className="mx-auto"/>
                  <p className="text-xl font-bold my-5">24/7 Support</p>
                  <p>We provide round-the-clock support and assistance to ensure that your travel experience exceeds your expectations</p>
               </div>

            </div>
        </div>
    );
};

export default WhyJoin;