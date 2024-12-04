'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/images/Logo.png'
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Link from 'next/link';


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
    <header className='sticky top-0 backdrop-blur-sm z-50 shadow-gray-600 bg-gradient-to-r from-[#CB833C]/50 to-[#FF8214]'>
        <div className='py-3' ref={menuRef}>
            <div className="container">
                <div className='flex items-center justify-between cursor-pointer'>
                    <Link href="/">
                        <Image src={Logo} alt='Provision' height={50} width={50}/>
                    </Link>

                    {menuOpen ? (
                        <GrClose className='h-[40px] lg:w-[50px] w-[35px] z-10 text-white' onClick={toggleMenu}/>
                    ) : (
                        <CgMenuRight className='h-[30px] w-[50px] text-white' onClick={toggleMenu}/>
                    )}

                    {
                        menuOpen && (
                            <div className='top-0 shadow-lg leading-10 p-8 absolute lg:right-[9%] right-0 w-[250px] h-screen bg-gradient-to-b from-[#FF8214] to-[#CB833C]/50'>
                                <nav className='pt-[100px]'>
                                    <ul className='my-[50%] lg:mx-[30px]'>
                                        {navMenus.map((menu) => (
                                            <li key={menu.name} className='mb-[30px]'>
                                                <a href={menu.link} className='py-[10px] px-[30px] block uppercase font-semibold hover:text-white hover:font-[800]'>{menu.name}</a>
                                            </li>
                                        ))}
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