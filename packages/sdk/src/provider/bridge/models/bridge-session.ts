import { SessionCrypto } from '@ion-gateway/protocol';

export interface BridgeSession {
    sessionCrypto: SessionCrypto;
    walletPublicKey: string;
    bridgeUrl: string;
}

export type BridgePartialSession = Omit<BridgeSession, 'walletPublicKey'>;
