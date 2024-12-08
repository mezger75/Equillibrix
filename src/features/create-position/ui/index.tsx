'use client';

import { Link } from '@nextui-org/react';
import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { GeneralInfoCard } from '@/widgets/GeneralInfoCard';
import { BackButton } from '@/shared/ui';

export const CreatePosition = () => {
    return (
        <div className="flex flex-col items-center w-full overflow-auto">
            <div className="self-start">
                <BackButton href="/" as={Link} />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:w-full max-w-4xl h-full w-screen">
                <CreatePositionCard />
                <GeneralInfoCard />
            </div>
        </div>
    );
};
