import Link from 'next/link';
import { getSession } from '@auth0/nextjs-auth0';
import styles from './UserLogin.module.scss';
import UserIcon from './UserIcon';

export default async function UserLogin() {
    const session = await getSession();
    const user = session?.user;
    console.log(session);

    if (user) {
        const username = user.nickname ?? user.name;
        return (
            <Link href={'/user'} className={styles.userLoginContainer}>
                <UserIcon />
                <p>{username}</p>
            </Link>
        );
    } else {
        return (
            <Link href="/api/auth/login" className={styles.userLoginContainer}>
                <UserIcon />
                <p>Login</p>
            </Link>
        );
    }
}
