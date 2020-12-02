import * as React from "react";
import styles from "./button.css";

type Props = {
  text?: string;
  type?: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, type = "primary" }: Props) => {
  return (
    <button onClick={onClick} className={styles[type]}>
      {text}
    </button>
  );
};

Button.defaultProps = { onClick: () => console.log("implement click") };
