import { useState } from "react";
import { useCart } from "../hooks/useCart";
import styles from "../page.module.css"


const QuantityCounter = ({ currentProduct }) => {
    const [count, setCount] = useState(Number(currentProduct.quantity));
    const { increaseQuantity, decreaseQuantity } = useCart();

    const increaseCountHandler = () => {
        setCount(count + 1);
        increaseQuantity(currentProduct._id)
    };

    const decreaseCountHandler = () => {
        if (count > 1) {
            setCount(count - 1);
            decreaseQuantity(currentProduct._id)
        }
    };
    return (
        <div className={styles.products_counter}>
            <button
                type="button"
                onClick={decreaseCountHandler}
                disabled={count === 1}
                className={styles.products_counter_btn}
            >
                -
            </button>
            <span className={styles.products_counter_quantity}>{count}</span>
            <button
                type="button"
                onClick={increaseCountHandler}
                className={styles.products_counter_btn}
            >
                +
            </button>
        </div>
    )
}

export default QuantityCounter;
