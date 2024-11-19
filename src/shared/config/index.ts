import { defineChain } from "@reown/appkit/networks";

// Define the custom network
export const customChain = defineChain({
    id: 777,
    caipNetworkId: 'eip155:777',
    chainNamespace: 'eip155',
    name: 'Equillibrix',
    nativeCurrency: {
        decimals: 18,
        name: 'cEther',
        symbol: 'cTH',
    },
    rpcUrls: {
        default: {
            http: [process.env.NEXT_PUBLIC_RPC_URL as string],
            webSocket: [''],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: '' },
    },
    contracts: {
        // Add the contracts here
    },
});