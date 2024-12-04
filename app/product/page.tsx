import { GrGamepad } from "react-icons/gr";
import Footer from '@/components/Footer'
import Image from "next/image";
import Navbar from "../sections/Navbar";

const picture = [
  {
    front: '/images/MP front.jpg',
    back: '/images/MP back.jpg',
    name: 'MAMA PUT',
    title: 'Coming soon!'
  },
  {
    front: '/images/TM front.jpeg',
    back: '/images/TM back.jpeg',
    name: 'treasure mania',
    title: 'Coming soon!'
  },
  {
    front: '/images/UC front.jpeg',
    back: '/images/UC back.jpeg',
    name: 'urban conquest',
    title: 'Coming soon!'
  }
];

const Product = () => {
  return (
    <section>
      <Navbar/>
        <div className="container pb-7">
          <h1 className="text-xl uppercase font-extrabold mt-8">Games</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
            {picture.map((image,index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full overflow-hidden rounded-lg">
                  <div className="animate-slideIn w-full flex">
                    <Image src={image.back} alt="image-back" width={500} height={500} />
                    <Image src={image.front} alt="image-front" width={500} height={500}/>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="uppercase font-bold">{image.name}</h3>
                  <button type="button" className="p-2 rounded-md outline-none border-none mt-2 uppercase text-mainbg bg-object text-[13px]">{image.title}</button>
                </div>
              </div>
            ))}
            </div>
        </div>
      <Footer/>
    </section>
  )
}

export default Product