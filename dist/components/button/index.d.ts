/// <reference types="react" />
declare type Props = {
    text?: string;
    type?: string;
    onClick?: () => void;
};
export declare const Button: {
    ({ text, onClick, type }: Props): JSX.Element;
    defaultProps: {
        onClick: () => void;
    };
};
export {};
