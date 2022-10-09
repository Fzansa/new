import styles from '../styles/Navbar.module.css';
import { FiChevronDown } from "react-icons/fi";
import { ImPhone } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { MdWhatshot } from "react-icons/md";
import { useState } from 'react';
const Navbar = () => {

    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal? `${styles.left}`: `${styles.left1}`;



    return (
        <div className={styles.navbar}>
            <div className={`${styles.desktop} ${contentClassname}`}>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>APPLIANCES CARE
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <a href="#home">HOME CARE</a>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>GADGET CARE
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>HANDYMAN
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>BEAUTY CARE
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>FITNESS CARE
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>


                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>BUISNESS CARE
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>


                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>ALL SERVICES
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>BLOG
                        <FiChevronDown />
                    </button>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className={styles.helpline}>
                    <h2><ImPhone /> SERVICE HELPLINE</h2>
                    <h4>782 762 1417</h4>
                </div>

            </div>
            <div className={styles.menu}>
            <a onClick={() => setIsModal(!isModal)} ><AiOutlineMenu /></a>
            </div>

            {/* styles.LOGO  
            */}

            <div className={styles.logo}>
                <div className={styles.logoIcon}><MdWhatshot /> </div>
                 <div className={styles.logoText}><h2>RO SERVICE CENTER</h2></div>
            </div>


            {/* ICON WHATSAPP */}
            <div className={styles.icon}>
                <div className={styles.whatsapp}>
                    <a href=""><img src="/images/wa1.png" alt="wa" /></a>
                </div>
                <div className={styles.whatsapp1}>
                    <a href=""><img src="/images/wa1.png" alt="wa" /></a>
                </div>
            </div>


        </div>
    )
}

export default Navbar