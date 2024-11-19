'use client';
import { Slider } from '@nextui-org/react';
import { MARKS } from './_constants';

export const SliderAmount = () => {
    return (
        <Slider
            label="Leverage"
            step={0.1}
            size="sm"
            showTooltip={true}
            formatOptions={{ style: 'decimal' }}
            getValue={(value) => `${value}x`}
            maxValue={13}
            minValue={1}
            defaultValue={0.7}
            className="max-w-md"
            marks={MARKS}
        />
    );
};
