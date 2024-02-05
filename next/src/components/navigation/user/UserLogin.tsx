import Link from 'next/link';
import styles from './UserLogin.module.scss';
import UserIcon from './UserIcon';
import { cookies } from 'next/headers';

async function getUser(accessToken: string): Promise<any> {
    const res = await fetch('http://127.0.0.1:8080/authapi/authenticate', {
        method: 'GET',
        next: { revalidate: 6000000 },
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!res.ok) {
        let message = 'Login failed';
        console.log(res.text());
        const errorStatus = res.status;
        message = errorStatus === 409 ? message + ': ??' : message;
        throw new Error(message);
    }
    return res.json();
}

export default async function UserLogin() {
    const accessToken = cookies().get('access_token')?.value;
    let username: any;
    try {
        if (!accessToken) throw new Error('Access token not available');
        username = await getUser(accessToken);
    } catch (err) {
        // TODO: handle error
        console.error(err);
    }

    if (username) {
        return (
            <Link href={'/user/account'} className={styles.userLoginContainer}>
                <UserIcon />
                <p>{username}</p>
            </Link>
        );
    } else {
        return (
            <Link href="/user/login" className={styles.userLoginContainer}>
                <UserIcon />
                <p>Login</p>
            </Link>
        );
    }
}
