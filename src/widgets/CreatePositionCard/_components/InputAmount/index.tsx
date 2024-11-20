import { Input } from '@nextui-org/react';
import { LIST_OF_WRAPPED_TOKENS_AND_STABLECOINS } from './_constants';
import { useGetBalance } from '@/shared/hooks/useGetBalance';

type Props = {
    balance: string;
};

export const InputAmount = ({ balance }: Props) => {
    const userBalance = useGetBalance();
    return (
        <Input
            variant="bordered"
            type="text"
            label="Amount"
            labelPlacement="inside"
            placeholder="Enter amount"
            className="w-full"
            endContent={
                <div className="flex flex-col items-end md:flex-nowrap md:mb-0 gap-2">
                    <div className="flex text-xs">
                        <span className="text-default-400 ">Balance: </span>
                        <span className="text-right">{userBalance}</span>
                    </div>

                    <select className="outline-none border-0 bg-transparent text-default-400 text-xs">
                        {LIST_OF_WRAPPED_TOKENS_AND_STABLECOINS.map((item) => (
                            <option key={item.key}>{item.label}</option>
                        ))}
                    </select>
                </div>
            }
        />
    );
};
