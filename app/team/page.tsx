import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Footer from '@/components/Footer';
import Navbar from '../sections/Navbar';
import Image from 'next/image';


const pictureData = [
  {
    image: '/images/presho.jpg',
    color: 'rgba(255, 145, 77, 0.7)',
    name: "NKWUA PRECIOUS C.",
    title: "CEO/SOFTWARE ENGINEER",
    social1: <FaLinkedin />,
    social2: <FaTwitter />,
    link1: "https://www.linkedin.com/in/precious-nkwua-b22885202/",
    link2: "https://x.com/nkwuaprecious"
  },

  {
    image: '/images/onyi.jpg',
    color: 'rgba(39, 121, 167, 0.7)',
    name: "ONYINYECHI FAVOUR",
    title: "CTO/SOFTWARE ENGINEER",
    social1: <FaLinkedin />,
    social2: <FaTwitter />,
    link1: "https://www.linkedin.com/in/onyinye-favour/",
    link2: "https://www.x.com/iamonyinye_chi"
  },
  {
    image: '/images/onyinye2.jpg',
    color: 'rgba(246, 161, 146, 0.7)',
    name: "ISICHELI ONYINYECHUKWU ",
    title: "SENIOR UI/UX DESIGNER",
  },
  {
    image: '/images/nelson.jpg',
    color: 'rgba(150, 75, 0, 0.7)',
    name: "FRANK NELSON",
    title: "SENIOR 3D ARTIST/ANIMATOR",
    social1: <FaLinkedin />, 
    social2: <FaInstagram />,
    link1: "https://www.linkedin.com/in/nelson-frank-mba/",
    link2: "https://www.instagram.com/de_pabl0_"
  },
  {
    image: '/images/prof2.jpg',
    color: 'rgba(255, 145, 77, 0.7)',
    name: "CHINEDU DANIEL",
    title: "GAME DESIGNER/STORY-WRITER",
    social1: <FaLinkedin />,
    social2: <FaTwitter />,
    link1: "https://www.linkedin.com/in/chinedu-daniel-34a327332",
    link2: "https://x.com/7waysahead"
  },
  {
    image: '/images/prof1.jpg',
    color: 'rgba(39, 121, 167, 0.7)',
    name: "ANOSIKE CHUKWUEBUKA",
    title: "UI/UX DESIGNER",
    social1: <FaLinkedin />,
    social2: <FaTwitter />,
    link1: "http://www.linkedin.com/in/chukwuebuka-anosike-1281ab130",
    link2: "https://www.x.com/design_by_barz"
  },
  {
    image: '/images/friday.jpg',
    color: 'rgba(246, 161, 146, 0.7)',
    name: "FRIDAY PEACE",
    title: "3D/CONCEPT ARTIST",
    social1: <FaLinkedin />,
    social2: <FaInstagram />,
    link1: "http://linkedin.com/in/peacefriday",
    link2: "https://www.instagram.com/glee.frenzy/profilecard/"
  }
];

const Team = () => {
  return (
    <section>
      <Navbar/>
      <div className='container'>
        <div>
          <div>
          <p className='uppercase text-2xl mt-10 text-center font-extrabold'>Meet the <span className='text-white bg-object px-2 py-1'>TEAM</span></p>
          </div>
          <div className="mt-10 grid xl:grid-cols-4 grid-cols-1 gap-8 md:grid-cols-3">
            {pictureData.map((item, index) => (
              <div key={index}>
                <div style={{ backgroundImage: `url(${item.image})` }} className='relative w-full bg-cover bg-center rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                  <Image src={item.image} alt="" width={500} height={500} className='rounded-lg'/>
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 flex justify-center items-center bg-black/50 text-black transition-opacity duration-300 hover:opacity-100 rounded-lg" style={{ backgroundColor: item.color }}></div>
                </div>

                <div className="mt-3">
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-sm font-bold text-object'>{item.title}</p>
                  <div className=" flex gap-4 mt-2">
                    <a href={item.link1} className='hover:text-object text-lg'>{item.social1}</a>
                    <a href={item.link2} className='hover:text-object text-lg'>{item.social2}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Team;