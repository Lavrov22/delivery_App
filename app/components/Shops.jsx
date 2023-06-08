'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "../page.module.css";




const shops = [
  { id: "h-1", name: "ATB" },
  { id: "h-2", name: "Novus" },
  { id: "h-3", name: "Silpo" },
];

const Shops = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.shopsName_list}>
            {shops.map(shop => {
                const isActive = pathname.startsWith(`/shop/${shop.name}`);

                return (
                    <li key={shop.id} className={styles.shopsName_item} >
                        <Link style={isActive ? { color: "blue" } : { color: "black" }} className={styles.shopsName_link} href={`/shop/${shop.name}`}>
                            {shop.name}
                        </Link>
                    </li>
                    
                )
            })}
        </ul>
    )
}

export default Shops;