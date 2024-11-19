import { Button } from '@/shared/ui/button';
import { Link } from '@nextui-org/react';

export const DepositWithLoopingCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <Button href="/create" as={Link}>
                Create Position
            </Button>
        </div>
    );
};
