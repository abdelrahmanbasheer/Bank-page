import React from 'react'
import styles from '../constants/style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`flex justify-center items-center flex-col bg-black transition ease-in-out opacity-100 duration-200 hover:opacity-95  w-[100%] h-[100%] rounded-full`}>
      <div className={`flex justify-center items-start flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 ">
          <span className='text-gradient'>Get</span>
      
          </p>
          <img src={arrowUp.src} alt="ss" className='w-[23px] h-[23px] object-contain'/>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className='text-gradient'>Started</span>
        
          </p>
      </div>
     
    </div>
  )
}

export default GetStarted
