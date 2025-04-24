import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" with { type: "json" };
import replace from "@rollup/plugin-replace";

const version = packageJson.version;

export default [
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "./lib/esm/index.mjs",
      sourcemap: true
    },
    plugins: [
      replace({
        ION_CONNECT_SDK_VERSION: JSON.stringify(version)
      }),
      typescript()
    ],
    external: ["@ion-gateway/protocol", "@ion-gateway/isomorphic-fetch", "@ion-gateway/isomorphic-eventsource"]
  },
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      file: "./lib/cjs/index.cjs",
      sourcemap: true
    },
    plugins: [
      replace({
        ION_CONNECT_SDK_VERSION: JSON.stringify(version)
      }),
      typescript()
    ],
    external: ["@ion-gateway/protocol", "@ion-gateway/isomorphic-fetch", "@ion-gateway/isomorphic-eventsource"]
  }
];
