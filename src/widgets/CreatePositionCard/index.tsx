import { Button } from '@nextui-org/react';
import { InputAmount, SliderAmount, TitleAmount } from './_components';
import { useAccount, useWaitForTransactionReceipt, useWriteContract, type BaseError } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
} from '@/shared/config/contracts';
import { useStore } from '@/shared/hooks/useStore';
import { parseUnits } from 'viem';

export const CreatePositionCard = () => {
    const { isConnected, chain } = useAccount();
    const { open } = useAppKit();

    const { data: hash, writeContract, isPending, error } = useWriteContract();
    const { amount, leverage } = useStore();
    const convertedSupplyAmount = parseUnits(amount.toString(), 18);
    const convertedLeverage = leverage * 1000;
    const convertedSlippage = 500;

    const handleSubmit = () => {
        writeContract({
            address: CONTRACT_ADDRESS_LONG_POSITION,
            abi: CONTRACT_ABI_LONG_POSITION,
            functionName: 'createPosition',
            args: [convertedSupplyAmount, convertedLeverage, convertedSlippage],
            value: convertedSupplyAmount,
        });
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });

    console.log(
        'Hash',
        hash,
        'ERROR',
        error,
        'isConfirming',
        isConfirming,
        'isConfirmed',
        isConfirmed,
    );

    return (
        <div className="flex flex-col gap-6 p-4 md:mt-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
            <TitleAmount chain={chain?.name} />

            <InputAmount />

            <SliderAmount />
            {isConfirmed && <div className="text-green-500">Success</div>}
            {isConnected ? (
                <Button onClick={handleSubmit} disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Submit Deposit'}
                </Button>
            ) : (
                <Button onClick={() => open()}>Connect Wallet</Button>
            )}
        </div>
    );
};
