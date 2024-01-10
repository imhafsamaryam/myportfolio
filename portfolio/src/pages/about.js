import React from 'react'

const About = ({ forwardedRef }) => {
    return (
        <div ref={forwardedRef} id='About' className='text-[#FFFFFF] relative'>
            <div className='extra-size-font text-center'>
                About Me
            </div>
            <div className='small-size-font-center text-center'>
                About Me
            </div>
            <div className='w-[80vw] mx-auto my-[2rem]'>
                <p className='font-[700] text-[18px]'>
                    Innovative and creative Front-end Developer.
                    <span className='font-normal text-[15px]'> I hold a Bachelor's degree in Electronics and Communication Engineering, graduated in 2022 from MJCET.
                        My expertise lies in creating visually striking and responsive websites, along with web applications that prioritize an exceptional user experience.
                        Driven by a genuine passion for design and development, I have finely tuned my skills in HTML, CSS, JavaScript, ReactJS, Dart and other leading web technologies.
                    </span></p>
                <div className='h-[1rem]'></div>

                <p className='text-[15px]'>  I firmly believe that every pixel and line of code plays a crucial role, and my objective is to meticulously craft beautiful and functional interfaces that leave a lasting impact. I am enthusiastic about the opportunity to connect with like-minded individuals and collaborate on projects that push the boundaries of creativity and innovation.
                </p>
                <div className='h-[1rem]'></div>
                <p className='text-[15px]'> Let's connect and embark on the journey of creating something truly amazing together!</p>
            </div>

            <div className='bg-[#101828] py-[1.5rem] my-[3.5rem]'>
                <div className='font-[700]  w-[80vw] mx-auto text-[18px] '>
                    Tools & Skills
                    <div className='py-[1.5rem] flex justify-between'>
                        <img
                            src="/images/html.webp" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/css.png" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/js.png" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/reacct.png" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/mui.png" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/flutter.png" alt='kitty' width={"80px"} height={"50px"}
                        />
                        <img
                            src="/images/figma.webp" alt='kitty' width={"60px"} height={"50px"}
                        />
                        <img
                            src="/images/git.jpg" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
