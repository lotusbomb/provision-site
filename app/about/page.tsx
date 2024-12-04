import Image from 'next/image'
import React from 'react'
import about from "@/public/images/light3.jpg"
import meeting from "@/public/images/meeting pic.jpg"
import laptop from "@/public/images/laptop.jpg"
import team from "@/public/images/team.jpg"
import Navbar from '../sections/Navbar'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <section>
      <Navbar/>
      <div className="">
        <div className=''>
          <div className='absolute flex flex-col z-20 bottom-0 left-0 md:top-[40%] top-[30%] lg:max-w-[900px] max-w-[450px] md:max-w-[600px] container text-center '>
            <h1 className='text-object uppercase md:text-[2rem] text-[1.2rem] font-bold'>About us</h1>
            <p className='mt-3 tracking-wider text-black font-semibold'>We are a forward thinking software development company dedicated to creating diverse software products to meet the evolving needs of our customers. The goal remains to transform ideas to reality and empower individuals in a thriving digital world.</p>
          </div>
          <div className=''>
            <Image src={about} alt='about pic' className='md:h-[800px] h-[650px] object-cover w-screen'/>
          </div>
        </div>

        <div className='flex flex-col gap-12 mt-10 container'>
            <div className='grid grid-cols-1 gap-8 items-center md:grid-cols-2'>
                <div>
                    <div>
                      <h2 className='capitalize text-object text-[1.6rem] md:text-[2rem]'>who we are</h2>
                      <p className='md:text-justify tracking-wider leading-8 mt-3 md:text-base'>A dynamic software development company dedicated to creating diverse range of software creation services. We specialize in turning ideas to practical solutions with strong focus on quality.</p>
                    </div>
                </div>
                <div >
                  <Image src={meeting} alt="meeting pic" className='rounded-lg'/>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-8 items-center md:grid-cols-2'>
                <div>
                  <Image src={laptop} alt="laptop" className='rounded-lg'/>
                </div>
                <div>
                    <div>
                      <h2 className='capitalize text-object text-[1.6rem] md:text-[2rem]'>what we do</h2>
                      <p className='md:text-justify tracking-wider leading-8 mt-3'>We develop a wide range of software products tailored to meet your unique needs and requirements. From custom applications to innovative websites, we build ideas through innovative coding and creative focus.</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div >
                    <div>
                      <h2 className='capitalize text-object text-[1.6rem] md:text-[2rem]'>our magic secret</h2>
                      <p className='md:text-justify tracking-wider leading-8 mt-3'>Our outstanding team remains dedicated to the company&#39;s cause, hence the unity and collaboration of the Pro-Vision team. Every project is the result of diverse experts coming together to dissolve barriers and deliver exceptional results where each member&#39;s unique skills contribute to the company&#39;s vision of service.</p>
                    </div>
                </div>
                <div>
                  <Image src={team} alt="team pic" className='rounded-lg'/>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </section>
  )
}

export default About