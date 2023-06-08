'use client'

import { usePathname } from 'next/navigation'
import ProductCard from "../components/ProductCard";
import styles from "../page.module.css"

const ProductList = ({ filtrProducts }) => {

    const pathname = usePathname();
    const isShoppingCard = pathname.endsWith(`/shopping-card`);

    return (
        <>
            {
                isShoppingCard ? (
                    <ul className={styles.productsCard_list}>
                        {filtrProducts.map(product => (
                            <li className={styles.productsCard_item} key={product._id}>
                                <ProductCard product={product} />
                            </li>
                        )
                        )}
         
                    </ul>
                ) : (
                    <ul className={styles.products_list}>
                        {filtrProducts.map(product => (
                            <li className={styles.products_item} key={product._id}>
                                <ProductCard product={product} />
                            </li>
                        )
                        )}
                    </ul>
                )}
        </>
    )
}

export default ProductList;