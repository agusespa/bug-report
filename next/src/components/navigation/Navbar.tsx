import styles from "./Navbar.module.scss";
import Cart from "./cart/Cart";
import Categories from "./categories/Categories";
import SearchBar from "./search/ProductSearch";

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <p className={styles.title}>eCom</p>
            <Categories />
            <SearchBar />
            <Cart />
        </nav>
    );
}
