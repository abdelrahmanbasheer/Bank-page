import React from 'react'
import styles from '../constants/style'
import { discount,robot } from '../assets'
import GetStarted  from "../components/GetStarted"
import Image from 'next/image'
const Hero = () => {
  return (
   <section id='home' className={` flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] max-w-sm mb-2 opacity-95 hover:opacity-100">
<img src={discount.src} alt="disc" className='w-[32px]  h-[32px]'/>
<p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-gray-400 ml-2`}>
<span className='text-white'>20% {" "}</span>
Discount for {" "}
<span className='text-white'>1 MONTH</span>
{" "} Account
</p>

    </div>
    <div className=" flex flex-row justify-between items-center w-full">
    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white capitalize'>the next <br className='sm:block hidden'></br>{" "} <span className='text-gradient'>generation {" "}</span> </h1>
    <div className="ss:flex md:mr-4 mr-0 ">
      <GetStarted></GetStarted> 
    </div>
    </div>
    <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white capitalize w-full'>payment method</h1>
    <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-gray-300 max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
    </div>
    <div className={`flex-1  flex justify-center items-center md:my-0 my-10 relative`}>

      <Image src={robot.src} width={`700px`} blurDataURL={robot.src} height={`700px`} className='relative z-[5]'></Image>
      <div className=" absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className=" absolute z-1 w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
      <div className=" absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>
    
   </section>
  )
}

export default Hero
