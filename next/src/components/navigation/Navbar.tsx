import SearchBar from "@/src/components/navigation/ProductSearch";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <p className={styles.title}>eCom</p>
            <SearchBar />
        </nav>
    );
}
