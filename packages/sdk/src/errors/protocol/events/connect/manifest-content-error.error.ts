import { TonConnectError } from 'src/errors/ion-gateway.error';

/**
 * Thrown when passed manifest contains errors.
 */
export class ManifestContentErrorError extends TonConnectError {
    protected get info(): string {
        return 'Passed `ionconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ion-gateway/docs/blob/main/requests-responses.md#app-manifest';
    }

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, ManifestContentErrorError.prototype);
    }
}
