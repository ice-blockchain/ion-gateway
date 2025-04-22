# ION Gateway protocol models

ℹ️ If you want to integrate TonConnect to your dApp, you should use [@ion-gateway/sdk](https://www.npmjs.com/package/@ion-gateway/sdk)

[Latest API documentation](https://ion-gateway.github.io/sdk/modules/_ionconnect_protocol.html)

## Summary
Package contains protocol requests, responses and event models and encoding, decoding functions.

You can use it to integrate TonConnect to your wallet app (written with TypeScript).

## Get started

### Install package
`npm i @ion-gateway/protocol`

### Use protocol models in your app

```ts
import { AppRequest, RpcMethod, WalletResponse } from '@ion-gateway/protocol';

function myWalletAppRequestsHandler<T extends RpcMethod>(request: AppRequest<T>): Promise<WalletResponse<T>> {
    // handle request, ask the user for a confirmation and return WalletResponse
}

```

### Use protocol cryptography in your app

```ts
import { SessionCrypto, WalletMessage, Base64, hexToByteArray } from '@ion-gateway/protocol';

function encodeIncommingHTTPBridgeRequest(encryptedMessage: string, from: string): WalletMessage {
    const sessionCrypto = new SessionCrypto(yourStoredSessionReypair);

    const decryptedMessage =
        sessionCrypto.decrypt(
            Base64.decode(bridgeIncomingMessage.message).toUint8Array(),
            hexToByteArray(bridgeIncomingMessage.from)
        );
    
    return  JSON.parse(decryptedMessage);
}
```
