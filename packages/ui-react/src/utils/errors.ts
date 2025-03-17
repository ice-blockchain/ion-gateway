import { TonConnectUI } from '@ion-gateway/ui';
import { TonConnectProviderNotSetError } from '../errors/ion-gateway-provider-not-set.error';

export function checkProvider(provider: TonConnectUI | null): provider is TonConnectUI {
    if (!provider) {
        throw new TonConnectProviderNotSetError(
            'You should add <TonConnectUIProvider> on the top of the app to use TonConnect'
        );
    }

    return true;
}
