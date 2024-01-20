import React from 'react'

const About = ({ forwardedRef }) => {
    return (
        <div ref={forwardedRef} id='About' className='text-[#FFFFFF] relative mt-[6rem] lg:mt-[0rem]'>
            <div className='extra-size-font text-center fontfamily'>
                About Me
            </div>
            <div className='small-size-font-center text-center fontfamily'>
                About Me
            </div>
            <div className='w-[80vw] mx-auto my-[2rem]'>
                <p className='font-[700] text-[14px] lg:text-[16px]'>
                    Innovative and creative Front-end Developer.
                    <span className='font-normal text-[12px] lg:text-[14px]'> I hold a Bachelor's degree in Electronics and Communication Engineering, graduated in 2022 from MJCET.
                        My expertise lies in creating visually striking and responsive websites, along with web applications that prioritize an exceptional user experience.
                        Driven by a genuine passion for design and development, I have finely tuned my skills in HTML, CSS, JavaScript, ReactJS, Dart and other leading web technologies.
                    </span></p>
                <div className='h-[1rem]'></div>

                <p className='text-[12px] lg:text-[14px]'>  I firmly believe that every pixel and line of code plays a crucial role, and my objective is to meticulously craft beautiful and functional interfaces that leave a lasting impact. I am enthusiastic about the opportunity to connect with like-minded individuals and collaborate on projects that push the boundaries of creativity and innovation.
                </p>
                <div className='h-[1rem]'></div>
                <p className='text-[12px] lg:text-[14px]'> Let's connect and embark on the journey of creating something truly amazing together!</p>
            </div>

            <div className='bg-[#101828] py-[1.5rem] my-[3.5rem]'>
                <div className='font-[700]  w-[80vw] mx-auto text-[16px] lg:text-[18px] '>
                    Tools & Skills

                    {/* -------------------------screen size mobile ------------------------------*/}

                    <div className=' displayNone'>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/html.webp" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> HTML</div>
                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/css.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> CSS</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/js.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> JS</div>

                            </div>
                            <div className='flex flex-col gap-4 align-middle justify-center'>
                                <img
                                    src="/images/reacct.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> ReactJs</div>

                            </div>



                        </div>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/flutter.png" alt='kitty' width={"80px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Flutter</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/wordpress.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Wordpress</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/python.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Python</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/mui.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Material UI</div>

                            </div>




                        </div>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/chakraui.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Chakra UI</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/tailwind.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> tailwind CSS</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/dart.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Dart</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/graphql.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> GraphQL</div>

                            </div>


                        </div>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/mailchimp.jpg" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Mailchimp</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/googleanalytics.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Google <br></br> Analytics</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/i18n.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> i18n <br></br> Localization</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/vscode.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> VSCode</div>

                            </div>


                        </div>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/git.jpg" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Git</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/figma.webp" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Figma</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/androidstudio.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Android Studio</div>

                            </div>


                        </div>
                    </div>

                    {/* -------------------------screen size desktop ------------------------------*/}
                    <div className='displayNoneMb'>


                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/html.webp" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> HTML</div>
                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/css.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> CSS</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/js.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> JS</div>

                            </div>
                            <div className='flex flex-col gap-4 align-middle justify-center'>
                                <img
                                    src="/images/reacct.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> ReactJs</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/flutter.png" alt='kitty' width={"80px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Flutter</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/wordpress.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Wordpress</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/python.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Python</div>

                            </div>

                        </div>
                        <div className='py-[1.5rem] flex justify-between'>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/mui.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Material UI</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/chakraui.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Chakra UI</div>

                            </div>

                            <div className='flexcolcenter'>
                                <img
                                    src="/images/tailwind.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> tailwind CSS</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/dart.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Dart</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/graphql.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> GraphQL</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/mailchimp.jpg" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Mailchimp</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/googleanalytics.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Google <br></br> Analytics</div>

                            </div>


                        </div>
                        <div className='py-[1.5rem] flex justify-evenly'>

                            <div className='flexcolcenter'>
                                <img
                                    src="/images/i18n.png" alt='kitty' className='rounded-full' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> i18n <br></br> Localization</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/vscode.png" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> VSCode</div>

                            </div>

                            <div className='flexcolcenter'>
                                <img
                                    src="/images/git.jpg" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Git</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/figma.webp" alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Figma</div>

                            </div>
                            <div className='flexcolcenter'>
                                <img
                                    src="/images/androidstudio.png" className='rounded-full' alt='kitty' width={"60px"} height={"50px"}
                                />
                                <div className=' text-[12px] font-normal text-center'> Android Studio</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
