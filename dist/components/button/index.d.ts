/// <reference types="react" />
declare type Props = {
    text?: string;
    type?: string;
    style?: object;
    onClick?: () => void;
};
export declare const Button: {
    ({ text, onClick, style, type }: Props): JSX.Element;
    defaultProps: {
        onClick: () => void;
    };
};
export {};
