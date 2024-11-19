import { Button, ButtonProps } from '@nextui-org/react';
import { ArrowBackIcon } from './_components/ArrowBackIcon';

export const BackButton = ({ as, href, className }: React.PropsWithChildren<ButtonProps>) => {
    return (
        <Button className={className} as={as} href={href} style={{ background: 'none' }}>
            <ArrowBackIcon />
            <span className="text-base">Back</span>
        </Button>
    );
};
