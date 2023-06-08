'use client'

import { useState } from "react";
import { usePathname } from 'next/navigation'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import QuantityCounterCart from "./QuantityCounterCart";
import QuantityCounter from "./QuantityCounter";
import { useCart } from "../hooks/useCart";
import styles from "../page.module.css";


const ProductCard = ({ product }) => {
    const [count, setCount] = useState(Number(product.quantity));
    const { addToCart, removeFromCart } = useCart();
    const pathname = usePathname();
    const isShoppingCard = pathname.endsWith(`/shopping-card`);

    const addToCartHandler = (product) => {
        const newProduct = {
            ...product,
            quantity: count,
        };
        addToCart(newProduct);
        Notify.success('The product was succesfully added to the cart!');
        setCount(1);
    }
  
    return (
        <>
            {isShoppingCard ?
                (
                    <>
                        <div className={styles.productsCard_imgWrapper}>
                            <img
                                className={styles.productsCard_img}
                                src={product.img}
                                alt={product.products}
                                loading="lazy" />
                        </div>
                        <p className={styles.productsCard_textShop}>{product.products}</p>
                        <p className={styles.productsCard_textShop}>Price: {product.price}</p>
                        <QuantityCounterCart currentProduct={product} />
                        <button style={{ color: "#842e2e"}} className={styles.products_btn} type='button' onClick={() => removeFromCart(product._id)}>Remove</button>
                    </>
                ) : (
                    <>
                        <img
                            className={styles.products_img}
                            src={product.img}
                            alt={product.products}
                            loading="lazy" />
                        <p className={styles.products_textShop}>{product.products}</p>
                        <p className={styles.products_textShop}>Price: <span style={{ color: " blue" }}>{product.price}</span></p>
                        <QuantityCounter count={count} setCount={setCount} />
                        <button style={{ marginTop: "10px"}} className={styles.products_btn} type='button' onClick={() => addToCartHandler(product)}>Add to card</button>
                    </>
                )}
        </>
    )
}

export default ProductCard;