import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Head from "next/head"


export default function Home({ data }) {

  const banner = data[0].banner5.webImg;
  const bannerMob = data[0].banner5.mobImg;
  const alt = data[0].banner5.altText;
  const initialWidth = 0;
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    setWidth(document.body.offsetWidth);
  }, [setWidth]);



  return (
    <>
      <Head>
        <title>RO SERVICE CENTER</title>
        <meta name="description" content="Urban Cleaning Expert is one of the most trusted service providers in India. We provide excellent services for several home appliance care, home care and Cleaning services. Our services are trusted by a large number of clients and Industries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* ----------------------- HERO SECTION ----------------------------------------------- */}
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h3>{data[0].heroSection.title}</h3>
          <h1>{data[0].heroSection.heading}</h1>
          <p>{data[0].heroSection.description} </p>


          <div className={styles.selectCity}>
            <form>
              <label >Where do you need a service?</label>
              <select name="city" id="city">
                <option value="none">Select your city</option>
                <option value="saab">{data[0].heroSection.form[0].dropdownItem}</option>

              </select>
            </form>
          </div>

        </div>
      </div>



      {/* -------------------------------BANNER FOR FEATURES ---------------------------------  */}

      <div className={styles.banner}>
        {width < 680 ? <img src={bannerMob} alt={alt} /> : <img src={banner} alt={alt} />}
      </div>

      {/* --------------------------------ABOUT SECTION ----------------------------------------- */}

      <div className={styles.about}>

        <div className={styles.textArea}>
          <h2>About Urban Cleaning Expert</h2>
          <p>Urban Cleaning Expert is one of the most trusted service providers in India. We provide excellent services for several home appliance care, home care and Cleaning services. Our services are trusted by a large number of clients and Industries. It is the result of our dedicated teamwork, which makes us one of the most trusted service providers across the nation. Our company is staffed with expert and well-trained professionals who carry several years of experience with them and all of them work tirelessly to earn our customer satisfaction.</p>
        </div>

        <div className={styles.gridArea}>
          
               {
                data[0].banner4.imgs.map((img,i) => <img className={`div+${i+1}`}  src={img} />)
               }
          
         
        </div>

      </div>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/data")
  const data = await res.json();
  return {

    props: {
      data
    }
  }
}
