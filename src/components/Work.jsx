import React from 'react'
import AlmanzaTechImage from '../assets/almanzatech-ss.png'
import BryantAlmanzaImage from '../assets/bryantalmanza-ss.png'
import DellPaintingImage from '../assets/dellpainting-ss.png'

const Work = () => {
  return (
    <div name='work' className='section-tb-style'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='section-title'>Work</p>
                <p className='py-6'>Check out some of my work or visit my <a className='font-bold underline' href='https://github.com/almanza1112'>Github</a> account</p>
            </div>

            {/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${BryantAlmanzaImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            BryantAlmanza.com
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="https://bryantalmanza.com/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="https://github.com/almanza1112/my-portfolio">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${AlmanzaTechImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            AlmanzaTech.com
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="https://almanzatech.com/">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="https://github.com/almanza1112/almanzatech">
                                <button className='work-item-btn'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div  style={{backgroundImage:`url(${DellPaintingImage})`}} className='work-item group content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-item-title'>
                            DellPainting.com
                        </span>
                        <div className='work-item-btn-cont'>
                            <a href="dellpainting.com">
                                <button className='work-item-btn'>DEMO</button>
                            </a>
                            <a href="https://github.com/almanza1112/DellPainting">
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