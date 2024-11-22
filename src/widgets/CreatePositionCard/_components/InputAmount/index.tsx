import { Input } from '@nextui-org/react';
import { useGetBalance } from '@/shared/hooks/useGetBalance';
import styles from './index.module.scss';
import { useStore } from '@/shared/hooks/useStore';

export const InputAmount = () => {
    const userBalance = useGetBalance();
    const { setAmount } = useStore();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === '+' || event.key === '-') {
            event.preventDefault();
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = event.clipboardData.getData('text');
        if (/[+-]/.test(paste)) {
            event.preventDefault();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    return (
        <Input
            variant="bordered"
            type="number"
            label="Amount"
            labelPlacement="inside"
            placeholder="Enter amount"
            className={styles.input}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            endContent={
                <div className="flex md:flex-nowrap mb-4 gap-1 text-xs">
                    <span className="text-default-400">Balance: </span>
                    <span>{userBalance}</span>
                </div>
            }
            onChange={handleChange}
        />
    );
};
