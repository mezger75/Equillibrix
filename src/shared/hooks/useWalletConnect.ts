
import { injected } from 'wagmi/connectors';
import { useConnect, useDisconnect, useSignMessage } from 'wagmi';

export const useWalletConnect = () => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();

  const handleConnectWallet = async () => {
    try {
      const {
        accounts: [address],
      } = await connectAsync({ connector: injected() });

      await signMessageAsync({
        message: 'Welcome to Equillibrix'
      });

    } catch (error) {
      console.error('Failed to connect wallet:', error);
      await disconnectAsync();
    }
  };

  return { handleConnectWallet };
}
