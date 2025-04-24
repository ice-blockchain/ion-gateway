import { TonConnectError } from '@ion-gateway/sdk';

export class TonConnectUIError extends TonConnectError {
    constructor(...args: ConstructorParameters<typeof Error>) {
        super(...args);

        Object.setPrototypeOf(this, TonConnectUIError.prototype);
    }
}
