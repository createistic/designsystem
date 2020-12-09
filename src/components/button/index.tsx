import * as React from "react";
import styles from "./button.css";

type Props = {
  text?: string;
  type?: string;
  style?: object;
  onClick?: () => void;
};

export const Button = ({ text, onClick, style, type = "primary" }: Props) => {
  return (
    <button style={style} onClick={onClick} className={styles[type]}>
      {text}
    </button>
  );
};

Button.defaultProps = { onClick: () => console.log("implement click") };
