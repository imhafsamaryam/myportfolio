import React from 'react'
import TestPage from './test'

const Contact = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} id='Contact' className='h-[100vh] text-[#FFFFFF] relative px-[3.5rem] '>
      <div className='extra-size-font-contact fontfamily leading-none'>
        Let's Connect
      </div>
      <div className='small-size-font-contact fontfamily'>
        Let's Connect
      </div>
      <div className='connect-box'>
        <img src={"/images/femaleuser.svg"} alt="Avatar" className='' />
        <div>
          <div className='flex gap-3 align-middle'>
            <img src={"/images/call.svg"} alt="Avatar" className='' width={"18px"} />
            <div className='small-size-font-details'>+91 7306498992</div>
          </div>
          <div className='flex gap-3 align-middle'>
            <img src={"/images/email.svg"} alt="Avatar" className='' width={"18px"} />
            <div className='small-size-font-details'>hafsamaryam102@gmail.com</div>
          </div>
          <div className='flex gap-3 align-middle'>
            <img src={"/images/location.svg"} alt="Avatar" className='' width={"18px"} />
            <div className='small-size-font-details'>Hyderabad, Telangana, India</div>
          </div>
        </div>
      </div>
      {/* <TestPage/> */}
    </div>
  )
}

export default Contact
