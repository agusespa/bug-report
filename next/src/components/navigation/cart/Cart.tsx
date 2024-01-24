import styles from "./Cart.module.scss";
import CartIcon from "./CartIcon";

export default function Cart() {
    return (
        <div className={styles.cartContainer}>
            <CartIcon />
            <p>0</p>
        </div>
    );
}
