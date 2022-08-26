import React from "react";

import styles from "../constants/style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "../components";
const index = () => {
  return (

    <div className="bg-black w-full overflow-hidden p-4">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
          <Business></Business> 
           <Billing></Billing> 
           <CardDeal></CardDeal>
            <Testimonials></Testimonials> 
            <Clients></Clients> 
            <CTA></CTA> 
            <Footer></Footer>
        </div>
      </div>
    </div>
  
    
  );
};

export default index;
