import Link from 'next/link';
import styles from './UserLogin.module.scss';
import UserIcon from './UserIcon';
import { CustomerResponse } from '@/src/models/Customer';
import { Session, getSession, updateSession } from '@/src/lib/actions';
import { cookies } from 'next/headers';

async function getCustomer(session: Session): Promise<any> {
    if (!session.accessToken) {
        throw new Error('No access token provided');
    }

    let res = await fetch('http://127.0.0.1:8080/customerapi/customer', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.accessToken}`,
        },
    });

    if (res.status === 401) {
        if (!session.refreshToken) {
            throw new Error('No access token provided');
        }
        const refRes = await fetch('http://127.0.0.1:8080/authapi/refresh', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${session.refreshToken}`,
            },
        });
        if (!refRes.ok) {
            // TODO: logout, in all cases?
            throw new Error(await refRes.text());
        }
        const resToken: { accessToken: string } = await refRes.json();

        // TODO set new access token

        if (!resToken.accessToken) {
            // TODO: logout
            throw new Error('invalid refresh token');
        }

        res = await fetch('http://127.0.0.1:8080/customerapi/customer', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${resToken.accessToken}`,
            },
        });
    }

    if (!res.ok) {
        throw new Error(await res.text());
    }
    return res.json();
}

export default async function UserLogin() {
    const session = await getSession();
    let customer: CustomerResponse | undefined = undefined;
    updateSession("chchchc");

    try {
        customer = await getCustomer(session);
    } catch (err) {
        // TODO: handle error
        console.error(err);
    }

    if (customer) {
        return (
            <Link href={'/customer/account'} className={styles.userLoginContainer}>
                <UserIcon />
                <p>{customer.first_name}</p>
            </Link>
        );
    } else {
        return (
            <Link href="/customer/login" className={styles.userLoginContainer}>
                <UserIcon />
                <p>Log in</p>
            </Link>
        );
    }
}
