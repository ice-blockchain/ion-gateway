import { WalletInfoBase, WalletInfoInjectable, WalletInfoRemote } from '@ion-gateway/sdk';

export type UIWallet = WalletInfoBase &
    (Omit<WalletInfoInjectable, 'injected' | 'embedded'> | WalletInfoRemote);
