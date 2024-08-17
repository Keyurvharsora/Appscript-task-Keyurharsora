import React from "react";
import styles from "./Intro.module.css";
import Link from "next/link";

const products = [
    { id: 1, image: '/shoe1.jpeg', name: 'Product 1' },
    { id: 2, image: '/shoe2.png', name: 'Product 2' },
    { id: 3, image: '/shoe3.jpg', name: 'Product 3' },
    { id: 4, image: '/tshirt1.jpeg', name: 'T-shirt' },
    { id: 5, image: '/tshirt2.jpeg', name: 'T-shirt' },
    { id: 6, image: '/tshirt3.jpg', name: 'T-shirt' },
    { id: 7, image: '/pant1.jpg', name: 'Pants' },
    { id: 8, image: '/pant2.jpeg', name: 'Pants' },
    { id: 9, image: '/shorts.jpeg', name: 'Shorts' },
  ];

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque velit elementum dolor.
        </p>
      </div>
      
      <div className={styles.itemsSection}>
        <div className={styles.itemsInfo}>
        <span className={styles.resultsCount}>{products.length} ITEMS</span>
          
        </div>

        <div className={styles.sortingOption}>
        <select className={styles.recommendationsDropdown}>
          <option value="recommended">Recommended</option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Intro;
