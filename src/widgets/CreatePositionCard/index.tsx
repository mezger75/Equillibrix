import { Button } from '@nextui-org/react';
import { InputAmount, SliderAmount, TitleAmount } from './_components';
import { useAccount } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';

export const CreatePositionCard = () => {
    const { isConnected, chain } = useAccount();
    const { open } = useAppKit();

    return (
        <div className="flex flex-col gap-6 p-4 md:mt-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
            <TitleAmount chain={chain?.name} />

            <InputAmount />

            <SliderAmount />

            {isConnected ? (
                <Button>Submit Deposit</Button>
            ) : (
                <Button onClick={() => open()}>Connect Wallet</Button>
            )}
        </div>
    );
};
