import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='section-style'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl sm:text-4xl text-[#f2486a] font-bold'>Hello! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Bryant Almanza</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I'm a full-stack developer spacializing in building (and occasionally 
                designing) exceptional digital experiences. Currently, I'm focused
                on building responsive full-stack web applications</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                    <button className='flat-btn group my-2'>VIEW WORK 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                        </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home