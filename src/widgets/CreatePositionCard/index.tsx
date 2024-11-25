import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { InputAmount, SliderAmount, TitleAmount } from './_components';
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
} from '@/shared/config/contracts';
import { useStore } from '@/shared/hooks/useStore';
import { parseUnits } from 'viem';
import toast from 'react-hot-toast';

export const CreatePositionCard = () => {
    const { isConnected, chain } = useAccount();
    const { open } = useAppKit();

    const { data: hash, writeContract, isPending, error: writeError } = useWriteContract();
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
    // TODO check isLoading with real RPC
    const {
        error: receiptError,
        status,
        isLoading,
    } = useWaitForTransactionReceipt({
        hash,
    });

    useEffect(() => {
        if (writeError) {
            toast.dismiss();
            toast.error(writeError.message);
        }

        if (status === 'success') {
            toast.dismiss();
            toast.success('Successfully created position');
        }

        if (status === 'error') {
            toast.dismiss();
            toast.error(`Transaction failed: ${receiptError?.name}`);
        }

        return () => {
            toast.dismiss();
        };
    }, [status, receiptError, writeError]);

    return (
        <div className="flex flex-col gap-6 p-4 md:mt-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
            <TitleAmount chain={chain?.name} />

            <InputAmount />

            <SliderAmount />

            {isConnected ? (
                <Button onClick={handleSubmit} isLoading={isPending || isLoading}>
                    {isPending
                        ? 'Please confirm in your wallet...'
                        : isLoading
                          ? 'Submitting...'
                          : 'Submit Deposit'}
                </Button>
            ) : (
                <Button onClick={() => open()}>Connect Wallet</Button>
            )}
        </div>
    );
};
