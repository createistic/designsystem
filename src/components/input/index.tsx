import * as React from "react";
import styles from "./input.css";

type Props = {
  cssClass?: string;
  placeholder?: string;
};

export const Input = ({ cssClass, placeholder }: Props) => {
  const classString = cssClass || styles.textInput;
  return (
    <input className={classString} type="text" placeholder={placeholder} />
  );
};
