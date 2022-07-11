import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/e30fd60b-e282-40eb-aeb7-c4652c1b1633' className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='section-title'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me: <b>almanza1112@gmail.com</b></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='flat-btn my-8 mx-auto'>SUBMIT</button>
        </form>
        
    </div>
  )
}

export default Contact