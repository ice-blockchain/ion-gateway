import { JSXElement } from 'solid-js';
import { createGlobalStyles } from 'solid-styled-components';

export const globalStylesTag = 'tc-root';
export const disableScrollClass = 'tc-disable-scroll';
export const usingMouseClass = 'tc-using-mouse';

export const GlobalStyles = (): JSXElement => {
    document.body.addEventListener('mousedown', () => document.body.classList.add(usingMouseClass));

    document.body.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            document.body.classList.remove(usingMouseClass);
        }
    });

    const Styles = createGlobalStyles`
    .go4168504425 {
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 130%;
  color: #e5e5ea;
}

.go2319083930 {
  position: relative;
}

.go2319083930::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: inherit;
}

.go1979315430 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 0;
  height: 304px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  border: none;
}

@media not all and (hover: none) {
  .go1979315430:hover .go3210036715 {
    transform: scale(1.04);
  }
}

.go1979315430:active .go3210036715 {
  transform: scale(0.96);
}

@media (hover: none) {
  .go1979315430:active .go3210036715 {
    transform: scale(0.92);
  }
}

.go2819881111 {
  background-color: #18181a;
}

.go1047528087 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #7d7d85;
  margin-top: 0;
  margin-bottom: 32px;
  cursor: default;
}

.go1539641740 {
  font-style: normal;
  font-weight: 590;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #e5e5ea;
  margin-top: 0;
  margin-bottom: 0;
  cursor: default;
}

.go1318663305 {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #222224;
  border: none;
  cursor: pointer;
  transition: transform 0.125s ease-in-out;
}

@media not all and (hover: none) {
  .go1318663305:hover {
    transform: scale(1.04);
  }
}

.go1318663305:active {
  transform: scale(0.96);
}

@media (hover: none) {
  .go1318663305:active {
    transform: scale(0.92);
  }
}

.go37342527 {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
  width: fit-content;
  margin: auto;
}

@media (max-width: 440px) {
  .go37342527 {
    width: 100%;
    height: fit-content;
    margin: auto 0 0 0;
  }
}

.go3288899091 {
  transform: translateY(-8px);
  margin-bottom: 12px;
}

.go3535743411 {
  margin-bottom: 12px;
}

.desktop-universal-modal {
  padding: 51px 36px !important;
}

tc-root .wallets-modal {
  padding: 0;
  background-color: #fff;
}

.wallets-modal + div {
  display: none;
}

.desktop-universal-modal ul {
  flex-direction: column;
  width: 100%;
}

.wallets-modal .desktop-universal-modal ul > button:last-child {
  display: none !important;
}

.desktop-universal-modal ul button {
  width: 100% !important;
  border-radius: 16px !important;
  background: #f5f7ff !important;
  flex-grow: 1 !important;
  display: flex !important;
  padding: 16px !important;
  justify-content: flex-start !important;
  flex-direction: row !important;
  gap: 3px !important;
  align-items: center !important;
  margin-bottom: 8px !important;
}

.desktop-universal-modal ul button::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-45deg);
  margin-left: 8px;
  position: absolute;
  right: 16px;
}

tc-root .desktop-universal-modal ul button > div:first-child {
  margin-right: 16px;
  width: 44px !important;
  height: 44px !important;
  margin-bottom: 0;
}

tc-root .desktop-universal-modal ul button > div:first-child > div {
  width: 12px !important;
  height: 12px !important;
  border-radius: 3px !important;
}

tc-root .wallets-modal .desktop-universal-modal h1:before {
  display: block;
  content: '';
  background: url("https://cdn.ice.io/ion/assets/wallet.png");
  background-size: contain;
  border-radius: 14px;
  margin: auto;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
}

tc-root .wallets-modal .desktop-universal-modal h1:after {
  display: block;
  content: 'To continue, please connect your ION Wallet.';
  color: #494949;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
  margin-bottom: 20px;
}

tc-root .desktop-universal-modal h1 {
  margin-bottom: 8px;
  color: #0e0e0e;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

tc-root .desktop-universal-modal ul button > div:nth-child(2) div {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

tc-root .wallets-modal .desktop-universal-modal ul button > div:nth-child(3) {
  display: none;
}

tc-root .wallets-modal .desktop-universal-modal div:nth-child(3) {
  min-height: auto !important;
}

.desktop-connection-modal {
  padding: 39px 24px;
}

tc-root .confirm-transaction-modal , tc-root .transaction-canceled-modal, tc-root .transaction-sent-modal  {
  background-color: #fff;
  min-width: 384px;
  max-width: 100%;
  padding: 39px 15px!important;
}

.desktop-connection-modal h1, .desktop-connection-modal > button, button:has(+ .desktop-connection-modal), .desktop-connection-modal > div > div {
  display: none;
}

.desktop-connection-modal > div {
  min-height: auto;
}

.confirm-transaction-modal > button, .confirm-transaction-modal > div > svg,
.transaction-sent-modal  > button, .transaction-sent-modal  > div svg,
.transaction-canceled-modal > button, .transaction-canceled-modal > div svg {
  display: none;
}

.confirm-transaction-modal > div > div, .transaction-canceled-modal > div > div, .transaction-sent-modal > div > div {
  color: #494949;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

tc-root .confirm-transaction-modal h1:before, .transaction-canceled-modal h1:before, .transaction-sent-modal  h1:before {
  display: block;
  content: '';
  background: url("https://cdn.ice.io/ion/assets/pending.png");
  background-size: contain;
  border-radius: 14px;
  margin: auto;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
}

tc-root .confirm-transaction-modal h1, .transaction-canceled-modal h1, .transaction-sent-modal h1 {
  margin-bottom: 8px;
  color: #0E0E0E;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Noto Sans";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.transaction-canceled-modal h1:before {
  background: url("https://cdn.ice.io/ion/assets/error.png");
  background-size: contain;
}

.transaction-sent-modal h1:before {
  background: url("https://cdn.ice.io/ion/assets/success.png");
  background-size: contain;
}

tc-root .wallets-modal .desktop-connection-modal h2:before {
  display: block;
  content: '';
  background: url("https://cdn.ice.io/ion/assets/pending.png");
  background-size: contain;
  border-radius: 14px;
  margin: auto;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
}

tc-root .wallets-modal .desktop-universal-modal h2,
tc-root .wallets-modal .desktop-universal-modal > button,
tc-root .wallets-modal > button:has(+ .desktop-universal-modal),
tc-root .wallets-modal div > svg {
  display: none !important;
}

.desktop-connection-modal h2 {
  color: #0E0E0E;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Noto Sans";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.desktop-connection-modal h2 {
  margin-bottom: 0;
}

.desktop-connection-modal h2::after {
  display: block;
  content: "It will only take a moment";
  color: #494949;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
}

tc-root * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue',
  Arial, Tahoma, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

tc-root img {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

tc-root *:focus {
  outline: #08f auto 2px;
}

tc-root li {
  list-style: none;
}

tc-root button {
  outline: none;
}

body.tc-disable-scroll {
  position: fixed;
  overflow-y: scroll;
  right: 0;
  left: 0;
}

body.tc-using-mouse tc-root *:focus {
  outline: none;
}

.go3758850101 {
  position: absolute;
  right: 16px;
  top: 16px;
}

.go2977547088 {
  margin-top: 12px;
}

@media (max-width: 440px) {
  .go2977547088 {
    padding: 0 10px;
  }
}

@keyframes go1365964679 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.go121314943 {
  animation: go1365964679 1s linear infinite;
}

.go1229406321 {
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 440px) {
  .go1229406321 {
    height: 160px;
    align-items: center;
  }
}

.go704344266 {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 0;
}

@media (max-width: 440px) {
  .go704344266 {
    padding-left: 0;
    padding-right: 0;
  }
}

.go2872927455 {
  position: relative;
  min-height: 100px;
  width: 416px;
  padding: 44px 56px 24px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: #121214;
  border-radius: 16px;
}

@media (max-width: 440px) {
  .go2872927455 {
    width: 100%;
  }
}

.go3569146033 {
  background-color: rgba(144, 144, 153, 0.12);
}

.go2969827049 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 18px;
  border-radius: 0 0 16px 16px;
}

.go2113519820 {
  border-radius: 16px;
  background-color: #222224;
}

@media (max-width: 440px) {
  .go2113519820 {
    border-radius: 16px 16px 0 0;
  }
}

.go823957079 {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 0;
  overflow-y: auto;
}

@media (max-width: 440px) {
  .go823957079 {
    padding-bottom: 0;
  }
}

.go3759480660 {
  max-width: 320px;
  margin-top: 2px;
  margin-bottom: 20px;
}

.go1623169644 {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #ffffff;
}

.go3649729683 {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.go2578966681 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.go2578966681 > div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
}
    ${globalStylesTag} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${globalStylesTag} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${globalStylesTag} *:focus {
        outline: #08f auto 2px;
    }
    
    ${globalStylesTag} li {
        list-style: none;
    }
    
    ${globalStylesTag} button {
        outline: none;
    }
    
    body.${disableScrollClass} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${usingMouseClass} ${globalStylesTag} *:focus {
        outline: none;
    }
`;
    return <Styles />;
};
