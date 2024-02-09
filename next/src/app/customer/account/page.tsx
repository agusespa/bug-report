'use client';

import { State, hardSignOut } from '@/src/lib/actions';
import styles from './CustomerAccount.module.scss';
import { useState } from 'react';

export default async function CustomerAccountPage() {
    const initialState: State = { message: undefined };
    const [state, setState] = useState(initialState);

    async function handleSignOutClick() {
        const res = await hardSignOut();
        setState(res);
    }

    return (
        <>
            <div className={styles.userAccountContainer}>
                <h1>Account Settings</h1>
                <button onClick={handleSignOutClick}>Sign out everywhere</button>
            </div>
            {state.message ? <p>{state.message}</p> : null}
        </>
    );
}
