import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
  base,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'MetaCamp NFT Mint',
  projectId: '70a80edd9987f7ebc6942f152913e0ea',
  chains: [
    base,
  ],
  ssr: true,
});
