import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ bgUrl, projectSubTitle, projectTitle, projectTime, navigateLink }) => {
    return (
        // <div className='mb-[8rem] project-container'>
        //     <div
        //         style={{
        //             backgroundImage: `url(${bgUrl})`,
        //             height: "450px",
        //             width: "400px",
        //             backgroundRepeat: "no-repeat",
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //             border: "4px solid #294792",
        //             borderRadius: "8px",
        //         }}
        //         className='project-image'
        //     >
        //         <div className='single-project'>
        //             <div className='project-text'>
        //                 <div className='font-[700]  w-[80vw] mx-auto text-[18px] '>{projectTitle}</div>
        //                 <div>{projectSubTitle}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div >
        <div>
            <div className='project-time'>
                <div className="h-[0.3rem]  w-[3vw] rounded-md bg-[#FFFFFF]">
                </div>
                <div className='  text-[24px]'>{projectTime}</div>

            </div>
            <div class="mb-[8rem] project-container">
                <img src={bgUrl} alt="Avatar" class="project-image" />
                <a href={navigateLink} target='_blank'>
                    <div class="project-text" >
                        <div>
                            <div className='font-[700] text-[28px] uppercase '>{projectTitle}</div>
                            <div className='text-[14px]'>{projectSubTitle}</div>
                        </div>
                        <i class="fa fa-external-link-square" aria-hidden="true" style={{ fontSize: "30px" }}></i>

                        {/* <img src={"/images/gotolink.png"} alt="Avatar" className='gotolink' /> */}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Project
