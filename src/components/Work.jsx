import React from 'react'
import SampleImage from '../assets/sample-image.png'

const Work = () => {
  return (
    <div name='work' className='work-style'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='section-title'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${SampleImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            Sample Website 1
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="/">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work