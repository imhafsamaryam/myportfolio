import React, { useState } from 'react'
import Contact from './contact';
import Info from './info';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import About from './about';
import Projects from './projects';
import handleViewport from 'react-in-viewport';
import Footer from '../components/footer';

const InfoBlock = handleViewport(Info, /** options: {}, config: {} **/);
const AboutBlock = handleViewport(About, /** options: {}, config: {} **/);
const ProjectsBlock = handleViewport(Projects, /** options: {}, config: {} **/);
const ContactBlock = handleViewport(Contact, /** options: {}, config: {} **/);

const Index = () => {
    const [openTab, setOpenTab] = useState("Home");
    const [menu, openMenu] = useState(false);

    const click = () => {
        if (openMenu) openMenu(!menu);
    };
    const navList = ["Home", "About", "Projects", "Contact"]

    const navItemHandler = (item) => {
        setOpenTab(item)
        openMenu(false)
    }


    return (
        <div className='bg-[#0b111c] relative  flex flex-col justify-between lg:py-[1rem]'>
            <div className='text-white hidden lg:flex lg:gap-2 lg:fixed lg:top-[1rem] lg:right-[3.5rem] lg:justify-end z-10'>

                {navList.map((item) => {
                    return <AnchorLink
                        key={item} href={`#${item}`} onClick={() => navItemHandler(item)}>
                        <div
                            className={openTab == item ? "text-[#FFFFFF] fontfamily font-[500] pb-[0.5rem] px-3 border-b-2 cursor-pointer" : " fontfamily cursor-pointer text-[#ede3e3] px-3"}
                        >

                            {item}
                        </div>
                    </AnchorLink>
                })}

            </div>

            <div>
                <div onClick={click} className={menu ? "buttn -menu-open" : "buttn displayNone"}>
                    <svg
                        width="35px"
                        height="40px"
                        viewBox="0 0 48 48"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <line x1="0" y1="17" x2="48" y2="17" stroke-width="4" />
                            <line x1="0" y1="31" x2="48" y2="31" stroke-width="4" />
                        </g>

                        <g>
                            <line x1="0" y1="24" x2="48" y2="24" stroke-width="4" />
                            <line x1="0" y1="24" x2="48" y2="24" stroke-width="4" />
                        </g>
                    </svg>
                </div>

                <div
                    className={
                        menu
                            ? "text-white overflow-hidden fixed overflow-y-hidden bg-[#0b111c] scroll-hidden h-[100vh] w-full z-10 transition-all duration-500 translate-y-0 "
                            : "absolute -translate-y-28 hidden  duration-500 transition-all"
                    }
                >
                    <div className='text-white displayNone flexcolcenter h-[80%]'>

                        {navList.map((item) => {
                            return <AnchorLink
                                key={item} href={`#${item}`} onClick={() => navItemHandler(item)}>
                                <div
                                    className={openTab == item ? "text-[#FFFFFF] fontfamily font-[500] pb-[0.5rem] px-3 border-b-2 w-max cursor-pointer" : " fontfamily cursor-pointer text-[#ede3e3] px-3"}
                                >

                                    {item}
                                </div>
                            </AnchorLink>
                        })}

                    </div>
                    <Footer />
                </div>
            </div>


            <InfoBlock onEnterViewport={() => {
                console.log('enter info');
                navItemHandler("Home")
            }} />
            {/* <Info /> */}

            <AboutBlock onEnterViewport={() => {
                console.log('enter about');
                navItemHandler("About")
            }} />
            {/* <About /> */}

            <ProjectsBlock onEnterViewport={() => {
                console.log('enter projects');
                navItemHandler("Projects")
            }} />
            {/* <Projects /> */}

            <ContactBlock onEnterViewport={() => {
                console.log('enter contact');
                navItemHandler("Contact")
            }} />
            {/* <Contact /> */}
            <Footer />

            {/* <div>
                <div className='flex  justify-between ml-auto mr-0 max-w-[60%]  items-end text-[#C5C6C7] text-[14px] font-medium' >
                    <a href='/'>Download Resume</a> 
                    <img
                        className='fixed bottom-0 left-0'
                        src="/images/kitty.jpg" alt='kitty' width={"10%"}
                    />
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
                         <a href='/' className='px-[1.5rem] py-[0.5rem]'>Projects</a> 
                    </div>
                    <div className='flex gap-[1rem]'>
                        <img
                            // className='fixed bottom-0 left-0'
                            src="/images/github-sign.png" alt='github' width={"25vw"}
                        />
                        <img
                            // className='fixed bottom-0 left-0'
                            src="/images/linkedin.png" alt='linkedin' width={"25vw"}
                        />
                        <img
                            // className='fixed bottom-0 left-0'
                            src="/images/whatsapp.svg" alt='whatsapp' width={"25vw"}
                        />

                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Index
