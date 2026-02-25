import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseAccount, metaMaskWallet, rabbyWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { base, baseSepolia } from 'wagmi/chains';
import { http } from 'wagmi';

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!,
  chains: [baseSepolia, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [
        baseAccount,
        walletConnectWallet,
        rainbowWallet,
        rabbyWallet,
        metaMaskWallet
      ],
    },
  ],
});