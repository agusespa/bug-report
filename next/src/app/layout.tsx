import type { Metadata } from 'next';
import Navbar from '@/src/components/navigation/Navbar';
import './globals.css';
import styles from '@/src/app/App.module.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
    title: 'eCom Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <Navbar />
                    <main className={styles.mainContainer}>{children}</main>
                </body>
            </UserProvider>
        </html>
    );
}
