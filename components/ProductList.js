'use client'

import React, { useState } from 'react';
import styles from './ProductList.module.css';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const ProductList = () => {

    const products = [
        { id: 1, name: "Shoe", image: "/shoe1.jpeg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 2, name: "Shoe", image: "/shoe2.png", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 3, name: "Shoe", image: "/shoe3.jpg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 4, name: "t-shirt", image: "/tshirt1.jpeg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 5, name: "t-Shirt", image: "/tshirt2.jpeg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 6, name: "T-shirt", image: "/tshirt3.jpg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 7, name: "pant", image: "/pant1.jpg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 8, name: "pant", image: "/pant2.jpeg", price: "Sign in or Create an account to see pricing", newProduct: false },
        { id: 9, name: "short", image: "/shorts.jpeg", price: "Sign in or Create an account to see pricing", newProduct: false },
    ];

    const [showFilters, setShowFilters] = useState(true);

    const [openSections, setOpenSections] = useState({
        customizable: false,
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
        rawMaterials: false,
        pattern: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className={styles.container}>
           
           {showFilters && (
                <aside className={`${styles.sidebar} ${showFilters ? '' : styles['sidebar-hidden']}`}>
                    <h2>Filters</h2>
                    <ul>
                        <li onClick={() => toggleSection("customizable")}>
                            <input type="checkbox" /> Customizable
                        </li>
                        <li onClick={() => toggleSection("idealFor")}>
                            Ideal For <span>{openSections.idealFor ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("occasion")}>
                            Occasion <span>{openSections.occasion ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("work")}>
                            Work <span>{openSections.work ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("fabric")}>
                            Fabric <span>{openSections.fabric ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("segment")}>
                            Segment <span>{openSections.segment ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("suitableFor")}>
                            Suitable For <span>{openSections.suitableFor ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("rawMaterials")}>
                            Raw Materials <span>{openSections.rawMaterials ? "^" : "v"}</span>
                        </li>
                        <li onClick={() => toggleSection("pattern")}>
                            Pattern <span>{openSections.pattern ? "^" : "v"}</span>
                        </li>
                    </ul>
                </aside>
            )}
           
           <button className={styles.toggleFiltersButton} onClick={toggleFilters}>
                {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <main className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        {product.newProduct && <div className={styles.newProductBadge}>NEW PRODUCT</div>}
                        <Image
                            width={300}
                            height={400}
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productPrice}>{product.price}</p>
                        <div className={styles.productIcons}>
                            <FaHeart className={styles.likeIcon} />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
export default ProductList;
