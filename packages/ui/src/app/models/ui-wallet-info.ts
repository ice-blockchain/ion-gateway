import { WalletInfo } from '@ion-gateway/sdk';

export type UIWalletInfo = WalletInfo & {
    isPreferred?: boolean;
    isSupportRequiredFeatures: boolean;
};
