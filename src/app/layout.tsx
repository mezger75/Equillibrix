import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/globals.css';
import { Providers } from '@/app/providers';
import { MainLayout } from '@/app/layouts/main-layout';
import ContextProvider from '@/app/providers/web3-provider';
import { headers } from 'next/headers';

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
    const cookies = headers().get('cookie');
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-purple-900 to-blue-600`}
            >
                <Providers>
                    <ContextProvider cookies={cookies}>
                        <MainLayout>{children}</MainLayout>
                    </ContextProvider>
                </Providers>
            </body>
        </html>
    );
}
