// components/Footer.js

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className={styles.main}>
        <div className={styles.footer}>
            <div className={styles.leftSection}>
                <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
                <p>Sign up for updates</p>
                <div className={styles.inputGroup}>
                    <input type='text' placeholder='Enter your email' className={styles.emailInput} />
                    <button className={styles.subscribeButton}>SUBSCRIBE</button>
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.contactInfo}>
                    <h3 className={styles.title}>CONTACT US</h3>
                    <p>+91 1234569879</p>
                    <p>customercare@mettamuse.com</p>
                </div>

                <div className={styles.currencyInfo}>
                    <h3 className={styles.title}>CURRENCY</h3>
                    <p><Image src="/us.png" width={20} height={20} alt="Currency" /> + USD</p>
                    <p>Transaction should be completed in euros</p>
                </div>
            </div>
        </div>

        <div className={styles.bottomSection}>
                <div className={styles.section}>
                    <h3 className={styles.title}>Metta Muse</h3>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>QUICK LINKS</h3>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            

                <div className={styles.section}>
                    <h3 className={styles.title}>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <SocialIcon url="https://instagram.com" className={styles.socialIcon} style={{ width: 30, height: 30 }}/>
                        <SocialIcon url="https://linkedin.com" className={styles.socialIcon} style={{ width: 30, height: 30 }}/>
                    </div>

                    <h4 className={styles.paymentTitle}>Metta Muse Accepts</h4>
                    <div className={styles.paymentMethods}>
                        <Image src="/visa.png" width={40} height={25} alt="Visa" />
                        <Image src="/mastercard.png" width={40} height={25} alt="MasterCard" />
                        <Image src="/paypal.png" width={40} height={25} alt="PayPal" />
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>Copyright © Metta Muse. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
