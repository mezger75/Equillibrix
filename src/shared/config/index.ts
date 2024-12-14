import { defineChain } from '@reown/appkit/networks';

// Define the custom network
export const customChain = defineChain({
    id: 8888,
    caipNetworkId: 'eip155:8888',
    chainNamespace: 'eip155',
    name: 'XANAChain',
    nativeCurrency: {
        decimals: 18,
        name: 'XETA',
        symbol: 'X',
    },
    rpcUrls: {
        default: {
            http: [process.env.NEXT_PUBLIC_RPC_URL as string],
            webSocket: [''],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://dashboard.tenderly.co/explorer/vnet/b3027522-2c03-4ed7-a97f-0c9379b3fc04/transactions',
        },
    },
    contracts: {
        // Add the contracts here
    },
});
