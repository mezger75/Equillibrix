import { cn } from '@/shared/lib';
import { Button as NextUIButton, ButtonProps } from '@nextui-org/react';
import React from 'react';

export const Button = ({
    children,
    className,
    onClick,
    as,
    href,
}: React.PropsWithChildren<ButtonProps>) => {
    return (
        <NextUIButton
            className={cn(
                'bg-gradient-to-tr from-purple-700 to-blue-500 text-white uppercase font-semibold border-2 border-purple-600',
                className,
            )}
            onClick={onClick}
            as={as}
            href={href}
        >
            {children}
        </NextUIButton>
    );
};
