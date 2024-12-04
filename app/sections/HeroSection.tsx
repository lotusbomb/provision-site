'use client'

import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';
import { LiaMousePointerSolid } from 'react-icons/lia';

const HeroSection = () => {

  const videos = [
    "../images/globalvid.mp4",
    "../images/profitable1.mp4",
    "../images/meeting1.mp4"
];

  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)


  //Automatic video slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % videos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [videos.length])

  //To handle video slide through swiping
  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.targetTouches[0].clientX)
  } //this is to check the x-co-ordinates from where the touch started

  const handleTouchMove = (event: React.TouchEvent) => {
    setTouchEnd(event.targetTouches[0].clientX)
  } //this is to monitor the x-co-ordinates as the touch moves

  const handleTouchEnd = () => {
    if(touchStart - touchEnd > 50) {
      setActiveSlide((prevSlide) => (prevSlide + 1) % videos.length)
    } 

    if(touchStart - touchEnd < -50) {
      setActiveSlide((prevSlide) => 
      prevSlide === 0 ? videos.length - 1 : prevSlide - 1)
    }
  }

  return (
    <section>
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            loop
            muted
            poster={src}
            className={`absolute top-0 left-0 w-screen overflow-hidden h-screen object-cover inset-0 transition-transform duration-500 ease-in-out ${index === activeSlide ? 'z-10 clip-path-active' : 'z-0 clip-path-hidden'}`}
          />
        ))}

        <div className="container">
          <div className='absolute text-object z-20 top-[40%]'>
            <h1 className='xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] uppercase font-bold'>Pro-Vision Innovations.</h1>
            <h3 className='text-black xl:text-[24px] lg:text-[20px] md:text-[15px] text-[11px] font-extrabold uppercase mt-3'>Technology That <span className='text-white bg-black px-2 py-1'>Stands</span> The Test Of Time.</h3>
            <p className='md:text-[15px] text-[10px] uppercase font-bold mt-3 flex'>Use menu to navigate <span className='ml-1 text-lg'><LiaMousePointerSolid/></span></p>
            <button type="button" className='cursor-pointer bg-black mt-4 text-mainbg py-2 md:text-[12px] text-[8px] tracking-wider px-6 hover:text-black hover:bg-object hover:font-extrabold'>CONTACT US</button>
            <div className='flex mt-5'>
              <a href="https://www.linkedin.com/company/provision-innovations/" className='mr-3 md:text-2xl text-lg hover:text-black'><FaLinkedin/></a>
              <a href="https://x.com/ProVision_Inn" className='mr-3 md:text-2xl text-lg hover:text-black'><FaTwitter/></a>
              <a href="https://www.instagram.com/provision_innovations/" className='mr-3 md:text-2xl text-lg hover:text-black'><FaInstagram/></a>
              <a href="https://www.reddit.com/user/provisioninnovations/" className='mr-3 md:text-2xl text-lg hover:text-black'><FaReddit/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection