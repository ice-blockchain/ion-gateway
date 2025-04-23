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
  background: #0166ff;
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
  background: #0166ff;
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
  background-color: #FD4E4E;
}

.transaction-sent-modal h1:before {
  background-color: #35D487;
}

tc-root .wallets-modal .desktop-connection-modal h2:before {
  display: block;
  content: '';
  background: #0166ff;
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
