import { WalletInfo } from '@ion-gateway/sdk';

export type PersonalizedWalletInfo = WalletInfo & {
    isPreferred?: boolean;
};
