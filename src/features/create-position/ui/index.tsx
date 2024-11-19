'use client';

import { Link } from '@nextui-org/react';
import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { GeneralInfoCard } from '@/widgets/GeneralInfoCard';
import { BackButton } from '@/shared/ui';

// TODO:
const PAIR = 'ETH/USDT';
const MARKET = 'Aave V3';
const CHAIN = 'Ethereum';
const BALANCE = '0.00';

export const CreatePosition = () => {
    return (
        <div className="flex flex-col items-center w-full overflow-auto ">
            <div className="self-start">
                <BackButton href="/" as={Link} />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row  gap-4 md:w-full max-w-4xl h-screen w-screen">
                <CreatePositionCard balance={BALANCE} pair={PAIR} market={MARKET} chain={CHAIN} />
                <GeneralInfoCard pair={PAIR} market={MARKET} chain={CHAIN} />
            </div>
        </div>
    );
};
