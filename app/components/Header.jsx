'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "../page.module.css";
import { useCart } from "../hooks/useCart";



const Header = () => {
    const { getAllProductsQuantity} = useCart();
    const pathname = usePathname();
    const isShoppingCard = pathname.endsWith(`/shopping-card`);
    const isCartEmpty = Boolean(getAllProductsQuantity());
    return (
        <header>
            <nav className={styles.home_nav}>
                {isShoppingCard ? (
                    <>
                        <Link className={styles.shop_link} href="/shop">Shop</Link>
                        <Link style={{ color: "blue", textDecoration: 'underline' }} className={styles.shop_link} href="/shopping-card">Shopping Card
                            {isCartEmpty && <span className={styles.header_cardCounter}>{getAllProductsQuantity()}</span>}
                        </Link>
                    </>
                ) : (
                    <>
                        <Link style={{ color: "blue", textDecoration: 'underline' }} className={styles.shop_link} href="/shop">Shop</Link>
                        <Link className={styles.shop_link} href="/shopping-card">Shopping Card
                            {isCartEmpty && <span className={styles.header_cardCounter}>{getAllProductsQuantity()}</span>}
                            
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;