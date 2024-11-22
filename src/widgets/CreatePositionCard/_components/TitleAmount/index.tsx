import { Image } from '@nextui-org/react';

type Props = {
    chain?: string;
};

export const TitleAmount = ({ chain }: Props) => {
    return (
        <div className="flex items-center text-lg">
            <Image
                width={36}
                height={36}
                src="/eth.png"
                alt="ether"
                className="rounded-full overflow-hidden"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <Image
                width={36}
                height={36}
                src="/usdt.png"
                alt="ether"
                className="mr-2 -ml-2 rounded-full overflow-hidden"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <div className="flex flex-col gap-1">
                <span className="whitespace-nowrap">ETH/USDT on Fluid</span>
                {chain && (
                    <div className="flex gap-2 items-center text-sm">
                        <span>{chain}</span>
                        <Image
                            width={16}
                            height={16}
                            src="/eth.png"
                            alt="ether"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
