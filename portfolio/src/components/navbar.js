import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-[#C5C6C7] text-[14px] font-medium' >
            {/* <a href='/' className='hover:text-[#45A29E] active:text-[#45A29E]'>Download Resume</a> */}
            <img src="/images/kitty.jpg" />
            <div className='flex gap-2  bg-transparent border-[#C5C6C7] border-[1px] px-[0.2rem] py-[0.2rem] rounded-full '>
                <a href='/contact' className='px-[1.5rem] py-[0.5rem] '>Contact</a>
                <a href='/' className='px-[1.5rem] py-[0.5rem] bg-[#C5C6C7] text-[#000000] rounded-full'>Info</a>
                <a href='/' className='px-[1.5rem] py-[0.5rem] '>Services</a>
                {/* <a href='/' className='px-[1.5rem] py-[0.5rem]'>Projects</a> */}
            </div>
            <div>social media</div>
        </div>
    )
}

export default Navbar
