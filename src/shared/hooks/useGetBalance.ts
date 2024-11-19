import { useAccount, useBalance } from 'wagmi';
import { formatUnits } from 'viem';

export const useGetBalance = (): string | undefined => {
    const { address } = useAccount();
    const result = useBalance({ address });

    if (result.data) {
        return formatUnits(result.data?.value, 18);
    }

    return '0';
};
