import React from 'react'
import Button from '../components/button'


const Info = ({ forwardedRef }) => {


    return (
        <div ref={forwardedRef} id='Home' className='pr-[3.5rem]  w-full flex justify-between h-[100vh]'>
            <div className=' flex justify-center text-end'>
                {/* <img
                    class='fade-away rounded-3xl '
                    src="/images/me.jpg" alt='kitty'
                /> */}
                <div className='fade-away faded faded-bottom faded-left'>

                </div>
            </div>
            <div className=' flex flex-col  justify-center'>
                <p className="text-xl text-right text-[#FFFFFF]">
                    Hey there!  I'm
                </p>

                <p className="text-[66px]  font-medium text-right leading-tight text-[#FFFFFF]">
                    Hafsa Maryam
                </p>

                <div className='text-right flex justify-end gap-5 py-[1.5rem]'>
                    {/* <div className="h-[0.5rem] mt-[0.5rem] w-[4vw] rounded-md bg-[#FFFFFF]">

</div> */}
                    <div>
                        <p className="text-[16px] text-[#FFFFFF] w-[20rem] ">
                            Front-end Developer. I'm Passionate about crafting beautiful websites and seamless mobile experiences.
                        </p>
                    </div>

                </div>
                <div className='flex gap-4 justify-end'>
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
