import { Button } from '@nextui-org/react';
import { InputAmount, SliderAmount, TitleAmount } from './_components';

type Props = {
    balance: string;
    pair: string;
    market: string;
    chain: string;
};

export const CreatePositionCard = ({ balance, pair, market, chain }: Props) => {
    return (
        <div className="flex flex-col gap-6 p-4 md:mt-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md ">
            <TitleAmount pair={pair} market={market} chain={chain} />

            <InputAmount balance={balance} />

            <SliderAmount />

            <Button>Submit Deposit</Button>
        </div>
    );
};
