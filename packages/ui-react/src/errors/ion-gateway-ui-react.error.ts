import { TonConnectUIError } from '@ion-gateway/ui';

/**
 * Base class for TonConnectUIReact errors. You can check if the error was triggered by the @ion-gateway/ui-react using `err instanceof TonConnectUIReactError`.
 */
export class TonConnectUIReactError extends TonConnectUIError {
    constructor(...args: ConstructorParameters<typeof Error>) {
        super(...args);

        Object.setPrototypeOf(this, TonConnectUIReactError.prototype);
    }
}
