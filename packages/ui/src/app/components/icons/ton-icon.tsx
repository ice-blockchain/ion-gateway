import type { Property } from 'csstype';
import { Component } from 'solid-js';
import { useTheme } from 'solid-styled-components';

interface TonIconProps {
    fill?: Property.Color;
}

export const TonIcon: Component<TonIconProps> = props => {
    const theme = useTheme();
    const fill = (): string => props.fill || theme.colors.icon.primary;

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M35 0L31.7276 21.8357L35 32.8018L38.2724 21.8357L35 0Z" fill="white"/>
<path d="M35 70L38.2724 48.1643L35 37.1982L31.7276 48.1643L35 70Z" fill="white"/>
<path d="M70 35L48.1643 31.7276L37.1982 35L48.1643 38.2724L70 35Z" fill="white"/>
<path d="M0 35L21.8357 38.2724L32.8018 35L21.8357 31.7276L0 35Z" fill="white"/>
<path d="M59.5986 10.101L41.9246 23.3349L36.5457 33.436L46.5806 27.9346L59.5986 10.101Z" fill="white"/>
<path d="M10.4014 59.899L28.0754 46.6651L33.4543 36.564L23.4194 42.0654L10.4014 59.899Z" fill="white"/>
<path d="M59.8972 59.5986L46.6633 41.9246L36.5622 36.5457L42.0636 46.5806L59.8972 59.5986Z" fill="white"/>
<path d="M10.1028 10.4014L23.3367 28.0754L33.4378 33.4543L27.9364 23.4194L10.1028 10.4014Z" fill="white"/>
        </svg>
    );
};
