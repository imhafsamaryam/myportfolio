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

    const navList = ["Home", "About", "Projects", "Contact"]

    const navItemHandler = (item) => {
        setOpenTab(item)
    }


    return (
        <div className='bg-[#0b111c] relative  flex flex-col justify-between py-[1rem]'>
            <div className='text-white flex gap-2 fixed top-[1rem] right-[3.5rem] justify-end z-10'>

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
            <Footer/>

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
