import styles , {layout} from '../constants/style'
import { features } from '../constants'
import Button from "../components/Button"
import React from 'react'

const Featurecard =({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index!== features.length -1 ? "mb-6" :"mb-0"} feature-card cursor-default`}>
<div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-gray-900 `}>
  <img src={icon.src} alt="icon" className='w-[50%] h-[50%] object-contain ' />
</div>
<div className={`flex-1 flex flex-col ml-3`}>
  <h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
  <p className='font-normal text-gray-400 text-[16px] leading-[24px] mb-1'>{content}</p>
</div>
  </div>
)

const Business = () => {
  return (
   <section id="features" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.</h2>
        <p className={`font-poppins font-normal text-gray-300 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
<Button styles="mt-10"></Button>
    </div>
    <div className={`flex-1  flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
      {features.map((feature,index)=>(
        <Featurecard key={feature.id} {...feature} index={index} ></Featurecard>
      ))}
    </div>
   </section>
  )
}

export default Business