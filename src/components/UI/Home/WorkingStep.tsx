
import { socialMediaServices } from '@/constants/faq';
import Link from 'next/link';

import { BiSolidUpArrowAlt } from "react-icons/bi";


const WorkingStep = () => {
    return (

        <div className='div-container mb-20'>

            {
                socialMediaServices.map((service) => (

                    <div key={service.id} className="card select-none">
                        <div className="front-card">
                            <div className='flex flex-col justify-center items-center gap-4 px-4 h-full'>
                                <h1 className='text-xl text-center font-bold font-syne text-black'>{service.header}</h1>
                                <span className='flex h-44 w-44 rounded-full border-[1px] border-slate-500 justify-center items-center'>
                                    <span className='flex flex-col gap-y-2 h-[138px] w-[138px] rounded-full border-[1px] border-blue-800 justify-center items-center p-6'>
                                        <span className='text-5xl font-bold font-syne text-black'>{service.percentage}</span>
                                        <span className='text-3xl text-purple-600'><BiSolidUpArrowAlt /></span>
                                    </span>

                                </span>
                                <span className='text-lg text-center font-normal font-kanit leading-6 tracking-normal text-black'>
                                    {service.content}
                                </span>

                            </div>
                        </div>
                        <div className="back-card pl-10">
                            <ul className='flex flex-col gap-4 justify-center items-start h-[85%] list-none text-lg font-normal text-black'>
                                {
                                    service.list.map((service, index) => (

                                        <li key={index} className='hover:list-disc font-light font-kanit text-base'>{service}</li>

                                    ))
                                }
                            </ul>
                            <div className='h-[15%] text-left'>
                                <Link href="/about" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-sm font-syne">About Us</Link>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>

    )
}

export default WorkingStep