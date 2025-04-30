import { KeyPair } from '@ion-gateway/protocol';
import { BridgeSession } from './bridge-session';

export type BridgeSessionRaw = Omit<BridgeSession, 'sessionCrypto'> & {
    sessionKeyPair: KeyPair;
};
