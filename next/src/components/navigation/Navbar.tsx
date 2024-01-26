import styles from "./Navbar.module.scss";
import Cart from "./cart/Cart";
import Categories from "./categories/Categories";
import SearchBar from "./search/ProductSearch";
import User from "./user/User";

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <p className={styles.title}>eCom</p>
            <Categories />
            <SearchBar />
            <Cart />
            <User />
        </nav>
    );
}
