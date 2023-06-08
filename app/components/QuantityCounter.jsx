import styles from "../page.module.css"

const QuantityCounter = ({ count, setCount }) => {

    const increaseCountHandler = () => {
        setCount(count + 1);
    };

    const decreaseCountHandler = () => {
        if (count > 1) {
            setCount(count - 1);
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
