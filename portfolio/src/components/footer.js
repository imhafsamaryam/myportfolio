import React from 'react'
import Linkedin from './icons/linkedin'
import Github from './icons/github'
import Whatsapp from './icons/whatsapp'
import Twitter from './icons/twittle'
import Fiverr from './icons/fiverr'

const Footer = () => {
    return (
        <div
            className='py-4 lg:pt-4 lg:pb-0 border-t-2 mx-auto border-[#202b3e] w-[90vw] flexcenter'
        >
            <a
                href={"https://www.linkedin.com/in/hafsamaryam/"}
                target="_blank"
                rel="noreferrer"
            >
                <Linkedin />
            </a>
            <a
                href={"https://github.com/imhafsamaryam"}
                target="_blank"
                rel="noreferrer"
            >
                <Github />
            </a>
            {/* <a
                href={"https://api.whatsapp.com/send?phone=917306498992"}
                target="_blank"
                rel="noreferrer"
            >
                <Whatsapp />
            </a> */}
            {/* <a
                href={"/"}
                target="_blank"
                rel="noreferrer"
            >
                <Twitter />
            </a> */}
            <a
                href={"https://www.fiverr.com/s/peEEvR"}
                target="_blank"
                rel="noreferrer"
            >
                <Fiverr/>
            </a>
        </div>
    )
}

export default Footer
