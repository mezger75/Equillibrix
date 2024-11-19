import { Image } from '@nextui-org/react';

type Props = {
    pair: string;
    market: string;
    chain: string;
};

export const TitleAmount = ({ pair, market, chain }: Props) => {
    return (
        <span className="flex items-center text-lg">
            <span className="rounded-full overflow-hidden">
                {/* <img className="min-w-[40px]" alt="" height="40" width="40" src="" /> */}
            </span>
            <span className="rounded-full -ml-[8px] overflow-hidden mr-2">
                {/* <img
                    // className="min-w-[40px]"
                    alt="ETH icon"
                    height="40"
                    width="40"
                    src=""
                /> */}

                {/* TODO: Image */}

                <Image width={36} height={36} src="ether.svg" alt="ether" />
            </span>
            <div className="flex flex-col gap-1">
                <span className="whitespace-nowrap">
                    {pair} on {market}
                </span>
                <div className="flex gap-2 items-center text-sm">
                    <span>{chain}</span>
                    {/* <img
                  className="rounded-full"
                  alt="CHAIN"
                  height="16"
                  width="16"
                  src=""
              /> */}
                </div>
            </div>
        </span>
    );
};
