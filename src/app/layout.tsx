import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/globals.css';
import { Providers } from '@/app/providers';

const geistSans = localFont({
    src: './styles/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

const geistMono = localFont({
    src: './styles/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Equillibrix',
    description: 'Delta Nuetral Strategy',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
