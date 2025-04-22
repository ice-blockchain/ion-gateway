import {
    AppRequest,
    ConnectEvent,
    ConnectRequest,
    DeviceInfo,
    RpcMethod,
    WalletEvent,
    WalletResponse
} from '@ion-gateway/protocol';
import { WalletInfoDTO } from 'src/models/wallet/wallet-info';
import { hasProperties, hasProperty } from 'src/utils/types';

export interface InjectedWalletApi {
    deviceInfo: DeviceInfo;
    walletInfo: Pick<
        WalletInfoDTO,
        'name' | 'app_name' | 'tondns' | 'image' | 'about_url' | 'platforms' | 'features'
    >;
    protocolVersion: number;
    isWalletBrowser: boolean;
    connect(protocolVersion: number, message: ConnectRequest): Promise<ConnectEvent>;
    restoreConnection(): Promise<ConnectEvent>;
    send<T extends RpcMethod>(message: AppRequest<T>): Promise<WalletResponse<T>>;
    listen(callback: (event: WalletEvent) => void): () => void;

    /**
     * @deprecated
     */
    disconnect(): void;
}

export function isJSBridgeWithMetadata(value: unknown): value is { ionconnect: InjectedWalletApi } {
    try {
        if (!hasProperty(value, 'ionconnect') || !hasProperty(value.ionconnect, 'walletInfo')) {
            return false;
        }

        return hasProperties(value.ionconnect.walletInfo, [
            'name',
            'app_name',
            'image',
            'about_url',
            'platforms'
        ]);
    } catch {
        return false;
    }
}
