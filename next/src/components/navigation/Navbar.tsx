import styles from './Navbar.module.scss';
import Cart from './cart/Cart';
import Categories from './categories/Categories';
import SearchBar from './search/ProductSearch';
import UserLogin from './user/UserLogin';

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <p className={styles.title}>eCom</p>
            <div className={styles.navbarProductContainer}>
                <Categories />
                <SearchBar />
            </div>
            <div className={styles.navbarUserContainer}>
                <Cart />
                <UserLogin />
            </div>
        </nav>
    );
}
