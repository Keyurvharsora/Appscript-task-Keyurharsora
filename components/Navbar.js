// components/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className={styles.topMargin}>
        <p>lorem ipsum dolor</p>
        <p>lorem ipsum dolor</p>
        <p>lorem ipsum dolor</p>
      </div>
      <div className={styles.uni}>
        <div className={styles.logo}>
          <Image src='/LOGO.png' width={40} height={40} />
        </div>
        <div className={styles.header}>
          <h1>LOGO</h1>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.icons}>
            <FaSearch className={styles.icon} />
            <FaHeart className={styles.icon} />
            <FaShoppingCart className={styles.icon} />
            <FaUser className={styles.icon} />
            <select className={styles.languageDropdown}>
              <option value="eng">ENG</option>
              <option value="hin">HIN</option>
              <option value="guj">GUJ</option>
            </select>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/skill">SKILLS</Link>
          </li>
          <li>
            <Link href="/stories">STORIES</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
