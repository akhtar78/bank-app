"use client"

import '@rainbow-me/rainbowkit/styles.css';
import {
    ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function Header(){
    return(
        <>
        <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
            <div className="flex justify-between py-5 bg-black px-20">
                <p className="text-3xl text-green-400">Dbank</p>
                <ConnectButton></ConnectButton>
            </div>
            </RainbowKitProvider>
            </WagmiConfig>
        </>
    )
}


