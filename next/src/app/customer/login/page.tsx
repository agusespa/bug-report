'use client';
import { useFormState } from 'react-dom';
import { State, login } from '@/src/lib/actions';
import styles from '@/src/app/customer/register/UserRegister.module.scss';

export default async function UserLoginPage() {
    const initialState: State = { message: undefined, errors: undefined };
    const [state, dispatch] = useFormState(login, initialState);

    return (
        <div className={styles.userRegisterContainer}>
            <h1>Sign in</h1>
            <form action={dispatch} className={styles.loginForm}>
                <div className={styles.formInputContainer}>
                    <input
                        className={styles.authFormInput}
                        name="email"
                        placeholder="Email"
                    />
                    {state.errors?.email ? (
                        <p className={styles.inputError}>{state.errors.email}</p>
                    ) : null}
                </div>
                <div className={styles.formInputContainer}>
                    <input
                        className={styles.authFormInput}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    {state.errors?.password ? (
                        <p className={styles.inputError}>{state.errors.password}</p>
                    ) : null}
                </div>
                <button className={styles.loginButton} type="submit">
                    Log in
                </button>
            </form>
            {state.message ? <p className={styles.inputError}>{state.message}</p> : null}
        </div>
    );
}
