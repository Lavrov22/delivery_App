import Image from 'next/image';
import styles from '../page.module.css'

const Shops = () => {
    return (
        <div className={styles.wrapperCenter}>
            <p className={styles.products_text}>Select a shop</p>
            <Image className={styles.products_skeleton} src="/shopper.svg" alt="people without products" width={250} height={250} />
        </div>
    );
}

export default Shops;