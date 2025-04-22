import { TonConnectError } from 'src/errors/ion-gateway.error';

/**
 * Thrown when wallet can't get manifest by passed manifestUrl.
 */
export class ManifestNotFoundError extends TonConnectError {
    protected get info(): string {
        return 'Manifest not found. Make sure you added `ionconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ion-gateway/docs/blob/main/requests-responses.md#app-manifest';
    }

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, ManifestNotFoundError.prototype);
    }
}
