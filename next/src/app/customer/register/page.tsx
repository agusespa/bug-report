'use client';
import { useFormState } from 'react-dom';
import { State, register } from '@/src/lib/actions';
import styles from './UserRegister.module.scss';

export default async function UserRegisterPage() {
    const initialState: State = { message: undefined, errors: undefined };
    const [state, dispatch] = useFormState(register, initialState);

    return (
        <div className={styles.userRegisterContainer}>
            <h1>Create New Account</h1>
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
                <div className={styles.formInputContainer}>
                    <input
                        className={styles.authFormInput}
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Confirm password"
                    />
                    {state.errors?.passwordConfirmation ? (
                        <p className={styles.inputError}>
                            {state.errors.passwordConfirmation}
                        </p>
                    ) : null}
                </div>
                <button className={styles.loginButton} type="submit">
                    Register
                </button>
            </form>
            {state.message ? <p className={styles.inputError}>{state.message}</p> : null}
        </div>
    );
}
