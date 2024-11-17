'use client';

import React, { type ReactNode } from 'react';
import { wagmiAdapter, projectId } from '@/app/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { baseSepolia, arbitrumSepolia, sepolia, mainnet } from '@reown/appkit/networks';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
    throw new Error('Project ID is not defined');
}

// Set up metadata
const metadata = {
    name: 'Equillibrix',
    description: 'Delta Nuetral Strategy',
    url: 'https://equillibrix.vercel.app', // origin must match your domain & subdomain
    icons: [''], // TODO - add path to icon
};

// Create the modal
createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, baseSepolia, sepolia, arbitrumSepolia],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
        socials: ['google', 'github', 'apple'],
    },
    allWallets: 'ONLY_MOBILE',
});

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}

export default ContextProvider;
