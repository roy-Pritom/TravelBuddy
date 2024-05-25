"use client"
import { Typewriter } from 'react-simple-typewriter'

export const TYpeAnimation = () => {

    // const handleType = (count) => {
    //     // access word count number
    //     console.log(count)
    // }


    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div className='App'>
            <h1 className="md:text-6xl text-3xl font-[800] text-black">
                Let <span className="text-[#29CD9C]">Us </span>Be Your
                <br />
                <span className="md:text-6xl text-3xl font-[800]  text-[#29CD9C]">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[`Earning Partner`, 'Earning Hope', 'Earning Way',]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                    />
                </span>
            </h1>
        </div>
    )
}
