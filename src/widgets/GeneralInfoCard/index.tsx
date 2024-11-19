import { Divider } from '@nextui-org/react';
import { InfoSection } from './_components/InfoBlock';

type Props = {
    pair: string;
    market: string;
    chain: string;
};

export const GeneralInfoCard = ({ pair, market, chain }: Props) => {
    return (
        <div className="flex w-full justify-center max-w-md md:mt-4 md:w-1/2 md:max-w-none">
            <div className="p-4 bg-[rgb(31,33,45)] bg-opacity-100 flex flex-col gap-3 w-full h-fit rounded-lg text-base">
                <InfoSection
                    title="General Info"
                    items={[
                        { label: 'Chain', value: chain },
                        { label: 'Market', value: market },
                        { label: 'Pair', value: pair },
                    ]}
                />

                <Divider />

                <InfoSection
                    title="Final State"
                    items={[
                        { label: 'Value', value: '0 ETH' },
                        { label: 'Leverage', value: '13.83x' },
                        { label: 'ROE %', value: '10.83%' },
                        { label: 'YoY Return', value: '0.000000 ETH' },
                    ]}
                />

                <Divider />

                <InfoSection
                    title="Liquidation Info"
                    items={[
                        { label: 'Liquidation Price', value: '1,157212' },
                        { label: 'Current Price', value: '1,1834342' },
                        { label: 'Liquidation Buffer', value: '2.35%' },
                    ]}
                />

                <Divider />

                <InfoSection
                    title="Fee Info"
                    items={[
                        { label: 'Flashloan Fee', value: 'Free' },
                        { label: 'Trading Fee', value: '0 ETH' },
                    ]}
                />
            </div>
        </div>
    );
};
