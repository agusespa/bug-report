'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        email?: string;
        password?: string;
        passwordConfirmation?: string;
    };
    message?: string;
};

export async function login(prevState: State, formData: FormData) {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    const state = validateLoginForm(email, password);
    if (hasErrors(state) || !email || !password) return state;

    const credentials = btoa(`${email}:${password}`);

    const res = await fetch('http://127.0.0.1:8080/authapi/login', {
        method: 'GET',
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    });
    if (!res.ok) {
        let message = 'Login failed';
        const errorStatus = res.status;
        message = errorStatus === 409 ? message + ': ??' : message;
        return { message };
    }
    const resData = await res.json();

    cookies().set('access_token', resData.accessToken, {
        httpOnly: true,
        sameSite: 'strict',
    });
    cookies().set('refresh_token', resData.refreshToken, {
        httpOnly: true,
        sameSite: 'strict',
    });

    redirect('/');
}

export async function logout(prevState: State, formData: FormData) {
    cookies().delete('access_token');
    cookies().delete('refresh_token');
    redirect('/');
}

export async function hardSignOut(): Promise<State> {
    const refreshToken = cookies().get('refresh_token')?.value;

    const res = await fetch('http://127.0.0.1:8080/authapi/revoque', {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    });
    if (!res.ok) {
        let message = 'Sign out failed';
        return { message };
    }

    cookies().delete('access_token');
    cookies().delete('refresh_token');

    redirect('/');
}

export async function register(prevState: State, formData: FormData) {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const passwordConfirmation = formData.get('passwordConfirmation')?.toString();

    const state = validateRegistrationForm(email, password, passwordConfirmation);
    if (hasErrors(state) || !email || !password) return state;

    const body: AuthRequest = {
        email,
        password,
    };
    const res = await fetch('http://127.0.0.1:8080/authapi/register', {
        method: 'POST',
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        let message = 'Registration failed';
        const errorStatus = res.status;
        message =
            errorStatus === 409
                ? message + ': a user already exist with that email address'
                : message;
        return { message };
    }

    redirect('/customer/login');
}

function validateRegistrationForm(
    email: string | undefined,
    password: string | undefined,
    passwordConfirmation: string | undefined
): State {
    let errorState: State = {
        errors: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
    };

    if (!email || !password || !passwordConfirmation) {
        errorState.errors!.email = email ? '' : 'Email is required';
        errorState.errors!.password = password ? '' : 'Password is required';
        errorState.errors!.passwordConfirmation = passwordConfirmation
            ? ''
            : 'Password confirmation is required';
    }

    if (email && !isEmailAddress(email)) {
        errorState.errors!.email = 'Not a valid email';
    }

    if (password && !isValidPassword(password)) {
        errorState.errors!.password =
            'Password should be at least 8 characters long and include a special character';
    }

    if (password !== passwordConfirmation) {
        errorState.errors!.passwordConfirmation = 'Passwords do not match';
    }

    return errorState;
}

function validateLoginForm(
    email: string | undefined,
    password: string | undefined
): State {
    let errorState: State = {
        errors: {
            email: '',
            password: '',
        },
    };

    if (!email || !password) {
        errorState.errors!.email = email ? '' : 'Email is required';
        errorState.errors!.password = password ? '' : 'Password is required';
    }

    if (email && !isEmailAddress(email)) {
        errorState.errors!.email = 'Not a valid email';
    }

    if (password && password.length < 8) {
        errorState.errors!.password = 'Password is too short';
    }

    return errorState;
}

function isEmailAddress(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
    const passwordRegex: RegExp = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    return passwordRegex.test(password);
}

function hasErrors(state: State): boolean {
    for (const key in state.errors) {
        // @ts-expect-error keys not defined
        if (state.errors[key] !== '') return true;
    }
    return false;
}

export interface Session {
    accessToken?: string;
    refreshToken?: string;
}
export async function getSession(): Promise<Session> {
    const accessToken = cookies().get('access_token')?.value;
    const refreshToken = cookies().get('refresh_token')?.value;
    return { accessToken, refreshToken };
}

export async function updateSession(accessToken: string): Promise<void> {
  'use server';
    cookies().set('access_token', accessToken, {
        httpOnly: true,
        sameSite: 'strict',
    });
}
