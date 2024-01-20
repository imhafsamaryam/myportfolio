import React from 'react'
import Project from '../components/project'
import { useNavigate } from 'react-router-dom';

const Projects = ({ forwardedRef }) => {

    let navigate = useNavigate();

    return (
        <div ref={forwardedRef} id='Projects' className='text-[#FFFFFF] relative px-[1.5rem] lg:px-[3.5rem] '>
            <div className='extra-size-font fontfamily'>
                Projects
            </div>
            <div className='small-size-font-projects fontfamily'>
                Projects
            </div>
            <p className='text-[14px] text-[#e8e7e7] absolute top-[9rem] lg:top-[13rem] left-[10%]'>
                Discover a collection of my prominent development projects showcased here.
            </p>
            <div className='py-[0rem] lg:py-[2rem] px-[2rem] lg:px-[6rem] lg:flex lg:gap-36 lg:justify-end'>
                <div className=' mt-[9rem] lg:mt-[12rem] '>
                    <Project
                        projectTime={"Jan 2024"}
                        bgUrl={"/images/popx.png"}
                        projectTitle={"PopX"}
                        projectSubTitle={"React Mobile Application"}
                        navigateLink={"https://pop-x-educase.vercel.app/"}
                    />
                    <Project
                        projectTime={"Jun 2023"}
                        bgUrl={"/images/pactime1.jpg"}
                        projectTitle={"InfoTime"}
                        projectSubTitle={"HRMS Application"}
                        navigateLink={"/"}
                    />
                    <Project
                        projectTime={"Apr 2023"}
                        bgUrl={"/images/Completelymodern.jpg"}
                        projectTitle={"Completely"}
                        projectSubTitle={"Home services Web & Mobile Application"}
                        navigateLink={"https://www.completely.ch/en"}
                    />
                    <Project
                        projectTime={"Jan 2023"}
                        bgUrl={"/images/fyroomsoverview.jpg"}
                        projectTitle={"FyRooms"}
                        projectSubTitle={"Hotel booking website"}
                        navigateLink={"https://fyrooms.vercel.app/"}
                    />
                </div>
                <div >
                    <Project
                        projectTime={"Jan 2024"}
                        bgUrl={"/images/react-drag.png"}
                        projectTitle={"User Diary"}
                        projectSubTitle={"React draggable component"}
                        navigateLink={"https://react-drag.vercel.app/"}
                    />

                    <Project
                        projectTime={"Jan 2024"}
                        bgUrl={"/images/fastfit4.jpg"}
                        projectTitle={"Fast & Fit"}
                        projectSubTitle={"Fitness Application"}
                        navigateLink={"/"}
                    />

                    <Project
                        projectTime={"Jan 2022"}
                        bgUrl={"/images/nft.png"}
                        projectTitle={"NFT Dashboard"}
                        projectSubTitle={"React redux NFT dashboard"}
                        navigateLink={"https://marketplace-dashboard-ten.vercel.app/"}
                    />

                    <Project
                        projectTime={"Mar 2023"}
                        bgUrl={"/images/devsed.png"}
                        projectTitle={"Devsed"}
                        projectSubTitle={"IT services website"}
                        navigateLink={"https://devsed.com/"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
