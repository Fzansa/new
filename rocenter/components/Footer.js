import styles from "../styles/Footer.module.css"
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.location}>
          <h3 className={styles.footerHeading}>TOP LOCATIONS</h3>
          <p>Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam</p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <div className={styles.contactList}>
            <p><a href="tel:+91 782 762 1417">Phone : +91 782 762 1417</a></p>
            <p><a href="mailto:support@roservicecenter.live" >Email : support@roservicecenter.live</a></p>
          </div>
        </div>

        <div className={styles.footerMenu}>
          <p>About Us</p>
          <p>Blog</p>
          <p>Near me</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>

        <div className={styles.dFooter}>

          <div className={styles.icons}>
            <span><AiFillInstagram /></span>
            <span><BsTwitter /></span>
            <span> <AiFillLinkedin /></span>
            <span><FaFacebookSquare /></span>
            <span><AiFillYoutube /></span>
            <span><BsPinterest /></span>
          </div>

          <div className={styles.copyright}>
            <p>© 2021 OyeBusy Technologies Pvt. Ltd.</p>
          </div>

        </div>


      </footer>
    </>
  )
}

export default Footer