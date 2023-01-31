import React, { useState } from 'react'
import Contact from './contact';
import Info from './info';
import Github from '../components/images/github-sign.png'
import Linkedin from '../components/images/linkedin.png'
import Whatsapp from '../components/images/whatsapp.png'

const Index = () => {
    const [openTab, setOpenTab] = useState(2);
    return (
        <div className='h-[100vh] flex flex-col justify-between bg-[#000000] px-[3.5rem] py-[1rem]'>
            <div className='text-white'>
                header
            </div>
            <div>
                <div className={openTab === 1 ? "block" : "hidden"}>
                    <Contact />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <Info />
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center text-[#C5C6C7] text-[14px] font-medium' >
                    <a href='/'>Download Resume</a>
                    <div className='flex gap-2  bg-transparent border-[#C5C6C7] border-[1px] px-[0.2rem] py-[0.2rem] rounded-full '>
                        <a
                            onClick={() => setOpenTab(1)}
                            href='#'
                            className={` ${openTab === 1 ? "bg-[#C5C6C7] text-[#000000] rounded-full" : ""} px-[1.5rem] py-[0.5rem] `}
                        >
                            Contact
                        </a>
                        <a
                            onClick={() => setOpenTab(2)}
                            href='#'
                            className={` ${openTab === 2 ? "bg-[#C5C6C7] text-[#000000] rounded-full" : ""} px-[1.5rem] py-[0.5rem] `}
                        >
                            Info
                        </a>
                        <a
                            onClick={() => setOpenTab(3)}
                            href='#'
                            className={` ${openTab === 3 ? "bg-[#C5C6C7] text-[#000000] rounded-full" : ""} px-[1.5rem] py-[0.5rem] `}
                        >
                            Services
                        </a>
                        {/* <a href='/' className='px-[1.5rem] py-[0.5rem]'>Projects</a> */}
                    </div>
                    <div>
                        {/* <Github />
                        <Linkedin />
                        <Whatsapp /> */}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index
