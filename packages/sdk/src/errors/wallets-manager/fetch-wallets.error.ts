import { TonConnectError } from 'src/errors/ion-gateway.error';

/**
 * Thrown when an error occurred while fetching the wallets list.
 */
export class FetchWalletsError extends TonConnectError {
    protected get info(): string {
        return 'An error occurred while fetching the wallets list.';
    }

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, FetchWalletsError.prototype);
    }
}
