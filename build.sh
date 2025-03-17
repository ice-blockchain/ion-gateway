yarn install
cd packages || exit

cd isomorphic-eventsource || exit
npm link
yarn link --register
cd ..

cd isomorphic-fetch || exit
npm link
yarn link --register
cd ..

cd protocol || exit
rm -rf lib node_modules
yarn build
npm link
yarn link --register
cd ..

cd sdk || exit
rm -rf dist lib node_modules
yarn build
npm link
yarn link --register
cd ..

cd ui || exit
rm -rf dist lib node_modules
yarn add vite typescript
yarn build
npm link
yarn link --register
cd ..

cd ui-react || exit
rm -rf lib node_modules
yarn build
npm link
yarn link --register
cd ..
