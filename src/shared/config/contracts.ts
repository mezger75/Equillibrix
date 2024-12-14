export const CONTRACT_ADDRESS_LONG_POSITION = '0xF62eEc897fa5ef36a957702AA4a45B58fE8Fe312'; // MAX_LTV 73% TENDERLY
export const CONTRACT_ABI_LONG_POSITION = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_fluidVaultT1',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidDexT1',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'receive',
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'ETH_TO_USDC_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'LEVERAGE_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'LIQUIDATION_LTV',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'MAX_LTV',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PERCENT_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PRICE_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'createPosition',
        inputs: [
            {
                name: 'supplyAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'leverage',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'deposit',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'depositAndBorrow',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'newCol',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: 'newDebt',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: 'to',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'onERC721Received',
        inputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'bytes',
                internalType: 'bytes',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4',
                internalType: 'bytes4',
            },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        name: 'owner',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'renounceOwnership',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferOwnership',
        inputs: [
            {
                name: 'newOwner',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        name: 'OwnershipTransferred',
        inputs: [
            {
                name: 'previousOwner',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'newOwner',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
        ],
        anonymous: false,
    },
];
