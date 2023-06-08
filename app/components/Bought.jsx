import Link from "next/link";
import styles from "../page.module.css"

const Bought = () => {
    return (
        <div className={styles.card_whenBought}>
            <h3 className={styles.title}>Thank you for your order!</h3>
            <Link className={styles.home_link} href="/">Back to home</Link>
        </div>
    )
}

export default Bought;