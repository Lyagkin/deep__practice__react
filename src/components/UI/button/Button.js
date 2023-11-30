import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children, shortButton, ...props }) => {
  let className;
  if (shortButton) {
    className = `${classes.myButton} ${classes.short}`;
  } else {
    className = classes.myButton;
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
