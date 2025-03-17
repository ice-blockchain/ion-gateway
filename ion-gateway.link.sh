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
yarn build
npm link
yarn link --register
cd ..

cd sdk || exit
yarn build
npm link
yarn link --register
cd ..

cd ui || exit
yarn build
npm link
yarn link --register
cd ..

cd ui-react || exit
yarn build
npm link
yarn link --register
cd ..
