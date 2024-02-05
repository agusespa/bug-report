import type { Metadata } from 'next';
import Navbar from '@/src/components/navigation/Navbar';
import './globals.css';
import styles from '@/src/app/App.module.scss';

export const metadata: Metadata = {
    title: 'eCom Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className={styles.mainContainer}>{children}</main>
            </body>
        </html>
    );
}
