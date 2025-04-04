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
    ${globalStylesTag} > div > div > div > div {
    padding: 51px 36px;
}

${globalStylesTag} > div > div > div:last-child {
    display: none;
}

${globalStylesTag} > div > div ul {
    flex-direction: column;
    width: 100%;
}

${globalStylesTag} ul > button:last-child {
    display: none !important;
}

${globalStylesTag} ul button {
    width: 100% !important;
    border-radius: 16px !important;;
    background: #F5F7FF !important;;
    flex-grow: 1 !important;;
    display: flex !important;;
    padding: 16px !important;;
    justify-content: flex-start !important;;
    flex-direction: row !important;;
    gap: 3px !important;;
    align-items: center !important;;
    margin-bottom: 8px !important;;
}

${globalStylesTag} ul button::after {
    content: "";
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

${globalStylesTag} ul button > div:first-child {
    margin-right: 16px;
    width: 44px !important;
    height: 44px !important;
    margin-bottom: 0;
}

${globalStylesTag} ul > button > div:first-child > div {
    width: 12px !important;
    height: 12px !important;
    border-radius: 3px !important;
}

${globalStylesTag} h1:before {
    display: block;
    content: "";
    background: #0166FF;
    border-radius: 14px;
    margin: auto;
    width: 44px;
    height: 44px;
    margin-bottom: 8px;
}

${globalStylesTag} h1:after {
    display: block;
    content: "To continue, please connect your ION Wallet.";
    color: #494949;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 8px;
    margin-bottom: 20px;
}

${globalStylesTag} h1 {
    margin-bottom: 8px;
    color: #0E0E0E;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

${globalStylesTag} > div > div > div > div {
    padding: 51px 36px !important;
}

${globalStylesTag} ul button > div:nth-child(2) {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

${globalStylesTag} ul button > div:nth-child(3) {
    display: none;
}

${globalStylesTag} > div > div > div > div > div:nth-child(3) {
    min-height: auto!important;
}


    ${globalStylesTag} h2,${globalStylesTag} div > button,${globalStylesTag} div > svg {display: none !important;}
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
