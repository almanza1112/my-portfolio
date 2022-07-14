import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css3.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node-js.png'
import ReactImg from '../assets/react.png'
import MongoDB from '../assets/mongodb.png'
import Flutter from '../assets/flutter.png'
import Firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div name='skills' className='section-tb-style'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='section-title'>Skills</p>
                <p className='py-4'>These are some of the technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='skills-item'>
                    <img className='skills-img' src={HTML} alt='HTML logo'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={CSS} alt='CSS logo'></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={JavaScript} alt='JavaScript logo'></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={ReactImg} alt='React logo'></img>
                    <p className='my-4'>React</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={Node} alt='Node.js logo'></img>
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={MongoDB} alt='MongoDB logo'></img>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={Flutter} alt='Flutter logo'></img>
                    <p className='my-4'>Flutter</p>
                </div>
                <div className='skills-item'>
                    <img className='skills-img' src={Firebase} alt='Firebase logo'></img>
                    <p className='my-4'>Firebase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills