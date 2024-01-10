import React from 'react'

const Contact = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} id='Contact' className='h-[100vh] text-[#FFFFFF] relative px-[3.5rem] '>
      <div className='extra-size-font leading-none'>
        Let'sConnect
      </div>
      <div className='small-size-font'>
        Let's Connect
      </div>
    </div>
  )
}

export default Contact
