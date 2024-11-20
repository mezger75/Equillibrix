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
    title: 'Equillibrix: Умная доходность на DeFi',
    description: `
    Equillibrix is ​​an innovative DeFi protocol that offers stable returns through delta-neutral strategies that minimize risks regardless of market direction. Automated strategies use long and short positions simultaneously, allowing you to earn on relative changes in asset prices, rather than on market movements. The platform automates complex calculations, simplifying the work for investors of all skill levels, providing a convenient dashboard for managing balances and returns. Users can choose from different strategies and assets to diversify and control risks. Equillibrix makes managing crypto assets in DeFi simple, secure, and transparent.`,
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
