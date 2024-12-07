'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/images/Logo.png'
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';


const navMenus = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Products",
        link: "/product",
    },
    {
        name: "Team",
        link: "/team",
    },
    {
        name: "Contact Us",
        link: "mailto:admin@provissioninnovations.com"
    }
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    } //this is to make menu open and close

    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(
                menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target)
            ){
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

  return (
    <header className='sticky top-0 z-50 shadow-gray-600 mt-4 container bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[10px] rounded-[20px] border border-white/20 shadow-[0_0px_20px_0_rgba(0,0,0,0.37)]'>
        <div className='py-2' ref={menuRef}>
            <div className="container">
                <div className='flex items-center justify-between cursor-pointer'>
                    <Link href="/">
                        <Image src={Logo} alt='Provision' height={50} width={50}/>
                    </Link>

                    {menuOpen ? (
                        <GrClose className='h-[40px] lg:w-[80px] xl:w-[120px] w-[35px] text-white z-50' onClick={toggleMenu}/>
                    ) : (
                        <CgMenuRight className='h-[40px] w-[50px] text-black' onClick={toggleMenu}/>
                    )}

                    {
                        menuOpen && (
                            <div className='-top-[1.05rem] shadow-lg leading-10 p-2 absolute lg:right-[9%] right-0 w-[250px] h-screen bg-black z-40'>
                                <nav className='pt-[100px]'>
                                    <ul className='my-[50%] lg:mx-[30px]'>
                                        {navMenus.map((menu) => (
                                            <li key={menu.name} className='mb-[10px]'>
                                                <a href={menu.link} className='py-[10px] px-[30px] block uppercase font-semibold text-white hover:font-[800]'>{menu.name}</a>
                                            </li>
                                        ))}
                                        <li className='flex mt-4 gap-3'>
                                            <a href="https://www.linkedin.com/company/provision-innovations/" className='mr-3 md:text-2xl text-lg text-object hover:text-mainbg'><FaLinkedin/></a>
                                            <a href="https://x.com/ProVision_Inn" className='mr-3 md:text-2xl text-lg text-object hover:text-mainbg'><FaTwitter/></a>
                                            <a href="https://www.instagram.com/provision_innovations/" className='mr-3 md:text-2xl text-lg text-object hover:text-mainbg'><FaInstagram/></a>
                                            <a href="https://www.reddit.com/user/provisioninnovations/" className='mr-3 md:text-2xl text-lg text-object hover:text-mainbg'><FaReddit/></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar