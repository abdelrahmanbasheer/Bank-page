import React from 'react'
import { clients } from '../constants'
import styles from '../constants/style'
import { instagram } from '../assets'
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client)=>(
      <div className={`flex-1 ${styles.boxWidth.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
        <img  src={client.logo.src} alt="client"  className='sm:w-[192px] w-[100px] object-contain opacity-90 hover:opacity-100'/>

      </div>
    ))}
      </div>
    </section>
  )
}

export default Clients