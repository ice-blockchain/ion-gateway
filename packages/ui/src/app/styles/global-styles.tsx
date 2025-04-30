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
    .desktop-universal-modal, .mobile-universal-modal {
  padding: 51px 36px !important;
}

tc-root .wallets-modal {
  padding: 0;
  background-color: #fff;
}

.wallets-modal + div {
  display: none;
}

.desktop-universal-modal ul, .mobile-universal-modal ul {
  flex-direction: column;
  width: 100%;
}

.wallets-modal .desktop-universal-modal ul > button:last-child, .wallets-modal .mobile-universal-modal ul > button:last-child {
  display: none !important;
}

.desktop-universal-modal ul button, .mobile-universal-modal ul button {
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

.desktop-universal-modal ul button::after, .mobile-universal-modal ul button::after {
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

tc-root .desktop-universal-modal ul button > div:first-child, tc-root .mobile-universal-modal ul button > div:first-child {
  margin-right: 16px;
  width: 44px !important;
  height: 44px !important;
  margin-bottom: 0;
}

tc-root .desktop-universal-modal ul button > div:first-child > div, tc-root .mobile-universal-modal ul button > div:first-child > div {
  width: 12px !important;
  height: 12px !important;
  border-radius: 3px !important;
}

tc-root .wallets-modal .desktop-universal-modal h1:before, tc-root .wallets-modal .mobile-universal-modal h1:before {
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

tc-root .wallets-modal .desktop-universal-modal h1:after, tc-root .wallets-modal .mobile-universal-modal h1:after {
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

tc-root .desktop-universal-modal h1, tc-root .mobile-universal-modal h1 {
  margin-bottom: 8px;
  color: #0e0e0e;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

tc-root .desktop-universal-modal ul button > div:nth-child(2) div, tc-root .mobile-universal-modal ul button > div:nth-child(2) div {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

tc-root .wallets-modal .desktop-universal-modal ul button > div:nth-child(3), tc-root .wallets-modal .mobile-universal-modal ul button > div:nth-child(3) {
  display: none;
}

tc-root .wallets-modal .desktop-universal-modal div:nth-child(3), tc-root .wallets-modal .mobile-universal-modal div:nth-child(3) {
  min-height: auto !important;
}

.wallets-modal .desktop-universal-modal ul button > div:first-child::before, .wallets-modal .mobile-universal-modal ul button > div:first-child::before {
  content: '';
  display: block;
  position: absolute;
  background-image: url(https://cdn.ice.io/ion/assets/chrome.png);
  background-size: contain;
  width: 18px;
  height: 18px;
  bottom: -5px;
  right: -5px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: inherit;
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
