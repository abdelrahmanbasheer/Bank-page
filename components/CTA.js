import React from 'react'
import styles from '../constants/style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-20 mb-10`}>
      <div className="">
        <h2  className={styles.heading2}>Try Our Service Now!</h2>
        <p className={`${styles.paragraph} text-gray-400 max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
    </section>
  )
}

export default CTA
