import { WalletInfoInjectable, WalletInfoRemote } from '@ion-gateway/sdk';

export type UIWallet = Omit<WalletInfoInjectable, 'injected' | 'embedded'> | WalletInfoRemote;
