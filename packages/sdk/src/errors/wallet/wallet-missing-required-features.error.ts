import { ConnectEventSuccess } from '@ion-gateway/protocol';
import { TonConnectError } from 'src/errors/ion-gateway.error';

/**
 * Thrown when wallet can't get manifest by passed manifestUrl.
 */
export class WalletMissingRequiredFeaturesError extends TonConnectError<{
    connectEvent: ConnectEventSuccess['payload'];
}> {
    declare cause: {
        connectEvent: ConnectEventSuccess['payload'];
    };

    protected get info(): string {
        return 'Missing required features. You need to update your wallet.';
    }

    constructor(
        message: string,
        options: {
            cause: {
                connectEvent: ConnectEventSuccess['payload'];
            };
        }
    ) {
        super(message, options);

        Object.setPrototypeOf(this, WalletMissingRequiredFeaturesError.prototype);
    }
}
