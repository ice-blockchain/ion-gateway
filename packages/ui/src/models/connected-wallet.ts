import { Wallet, WalletInfoInjectable, WalletInfoRemote } from '@ion-gateway/sdk';

export type WalletOpenMethod = 'qrcode' | 'universal-link' | 'custom-deeplink';

export type WalletInfoWithOpenMethod =
    | WalletInfoInjectable
    | WalletInfoRemoteWithOpenMethod
    | (WalletInfoInjectable & WalletInfoRemoteWithOpenMethod);

export type WalletInfoRemoteWithOpenMethod = WalletInfoRemote & {
    openMethod?: WalletOpenMethod;
};

export type ConnectedWallet = Wallet & WalletInfoWithOpenMethod;
