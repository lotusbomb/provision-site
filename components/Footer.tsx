import React from 'react'
import Logo from '@/public/images/Logo.png'
import Image from 'next/image'
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

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='mt-10'>
        <div className='bg-gradient-to-r from-[#CB833C]/50 to-[#FF8214] py-5 text-center text-sm'>
            <div className='container '>
                <div className="inline-flex relative bg-mainbg p-1">
                <Image src={Logo} height={40} alt="provision logo" className='relative' />
                </div>
                <nav>
                    <ul className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                        {navMenus.map((menu) => (
                            <li key={menu.name}>
                                <a href={menu.link} className='hover:text-mainbg font-semibold'>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex justify-center gap-6 mt-6 text-mainbg cursor-pointer'>
                <a href="https://www.linkedin.com/company/provision-innovations/"><FaTwitter className='hover:text-black text-lg'/></a> 
                <a href="https://x.com/ProVision_Inn"><FaInstagram className='hover:text-black text-lg'/></a>          
                <a href="https://www.instagram.com/provision_innovations/"><FaLinkedin className='hover:text-black text-lg'/></a>
                <a href="https://www.reddit.com/user/provisioninnovations/"><FaReddit className='hover:text-black text-lg'/></a>        
                </div>

                <p className='mt-6 font-semibold'>&copy; {currentYear}, Pro-Vision Innovations.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer