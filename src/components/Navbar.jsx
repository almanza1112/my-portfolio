import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { useScrollPosition } from '../hooks/useScrollPosition'


function classNames(...classes) {
    return classes.filter(Boolean).join('');
}

export const Navbar = () => {

    const scrollPosition = useScrollPosition();
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (

    <div className={classNames(scrollPosition > 0 ? 'shadow-md' : 'shadow-none', ' transition-shadow fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#123e64]')}>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'60px'}}/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
                <li className='hover:text-[#f2486a] hover:font-bold'>
                    <Link to="about" smooth={true} duration={500}>
                        ABOUT
                    </Link>
                </li>
                <li className='hover:text-[#f2486a] hover:font-bold'>
                    <Link to="skills" smooth={true} duration={500}>
                        SKILLS
                    </Link>
                </li>
                <li className='hover:text-[#f2486a] hover:font-bold'>
                    <Link to="work" smooth={true} duration={500}>
                        WORK
                    </Link>
                </li>
                <li className='hover:text-[#f2486a] hover:font-bold'>
                    <Link to="contact" smooth={true} duration={500}>
                        CONTACT
                    </Link>
                </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#123e64] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        ABOUT
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        SKILLS
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        WORK
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        CONTACT
                    </Link>
                </li>
            </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='si-item bg-blue-600'>
                    <a className='si-item-content' href="https://almanzatech.com">
                        My Business <MdOutlineBusinessCenter size={30}/>
                    </a>
                </li>
                <li className='si-item bg-[#333333]'>
                    <a className='si-item-content' href="https://github.com/almanza1112">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='si-item bg-[#6fc2b0] scroll-smooth'>
                    <Link className='si-item-content' to="contact" smooth={true}>
                    Mail <HiOutlineMail size={30}/>
                    </Link>
                    
                </li>
                {/* 
                
                 <li className='si-item bg-[#565f69]'>
                    <a className='si-item-content' href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                */}
               
            </ul>

        </div>
    </div>
  )
}

export default Navbar