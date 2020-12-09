import * as React from "react";

type Props = {
  cssClass?: string;
  placeholder?: string;
};

export const Input = ({ cssClass, placeholder }: Props) => {
  const classString = cssClass || "textInput";
  return (
    <input className={classString} type="text" placeholder={placeholder} />
  );
};
