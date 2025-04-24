import { TonConnectError } from 'src/errors/ion-gateway.error';

/**
 * Unhanded unknown error.
 */
export class UnknownError extends TonConnectError {
    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, UnknownError.prototype);
    }
}
