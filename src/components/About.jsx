import React from 'react'

const About = () => {
  return (
    <div name='about' className='section-style'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='section-title'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>A developer you can trust</p>
                </div>
                <div>
                    <p>I'm passionate about building excellent software that improves businesses 
                        and individuals seeking to improve their careers or portfolio. I speicalize 
                        in creating software for clients ranging from individuals and small-bussiness 
                        all the way to large corporations. Imagine all the great work we would do if 
                        we were to team up?</p>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default About