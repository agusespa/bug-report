import { getSession } from '@auth0/nextjs-auth0';
import styles from './UserPage.module.scss';

async function getUserData(): Promise<any> {
    const session = await getSession();
    const token = session?.accessToken;
    const email = session?.user.email;

    if (!token || !email) {
        throw new Error('User not logged in');
    }

    const query = `email=${encodeURIComponent(email)}`;
    const res = await fetch('http://127.0.0.1:8080/userapi/products?' + query, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60000 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function UserPage() {
    const session = await getSession();

    return (
        <div className={styles.userPageContainer}>
            <h1>User Account Settings</h1>
            {session?.user ? (
                <a href="/api/auth/logout">Logout</a>
            ) : (
                <a href="/api/auth/login">Login</a>
            )}
        </div>
    );
}
