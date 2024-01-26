import styles from './User.module.scss';
import UserIcon from './UserIcon';

export default function User() {

    return (
        <div className={styles.cartContainer}>
            <UserIcon />
            <p>Log in</p>
        </div>
    );
}
