import React from 'react'
import Button from '../components/button'


const Info = ({ forwardedRef }) => {


    return (
        <div ref={forwardedRef} id='Home' className='pr-[0rem] lg:pr-[3.5rem]  w-full flex flex-col-reverse lg:flex lg:flex-row lg:justify-between'>
            <div>
                <div className='fade-away'>

                </div>
            </div>
            <div className='mt-[7rem] lg:mt-0 flex flex-col  justify-center'>
                <p className="text-xl text-center lg:text-right text-[#FFFFFF]">
                    Hey there!  I'm
                </p>

                <p className="text-[46px] lg:text-[66px] uppercase fontfamily    font-medium text-center lg:text-right leading-tight text-[#FFFFFF]">
                    Hafsa <br></br> Maryam
                </p>

                <div className='text-center lg:text-right flex justify-center lg:justify-end gap-5 py-[1.5rem]'>
                    {/* <div className="h-[0.5rem] mt-[0.5rem] w-[4vw] rounded-md bg-[#FFFFFF]">

</div> */}
                    <div>
                        <p className="text-[14px] lg:text-[15px] text-[#FFFFFF] w-[20rem] ">
                            Front-end Developer. I'm Passionate about crafting beautiful websites and seamless mobile experiences.
                        </p>
                    </div>

                </div>
                <div className='flex gap-4 justify-center lg:justify-end'>
                    <a
                        href={"/files/hafsamaryam.pdf"}
                        download="HafsaMaryam-CV"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button text={"Download CV"} textColor={"#FFFFFF"} />
                    </a>
                    <Button text={"Hire Me!"} textColor={"#0b111c"} bgColor={"#FFFFFF"} />
                </div>
            </div>


        </div>
    )
}

export default Info
