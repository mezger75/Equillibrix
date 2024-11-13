import { Button as NextUIButton } from '@nextui-org/react';
import React from 'react';

export const Button = ({ children, ...props }: React.PropsWithChildren) => {
    return (
        <NextUIButton color="secondary" {...props}>
            {children}
        </NextUIButton>
    );
};
