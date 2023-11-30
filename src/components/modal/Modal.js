import React from "react";

import classes from "./Modal.module.scss";

const Modal = (props) => {
  const { children, visible, setVisible } = props;

  const defaultValueClasses = [classes.Modal];
  if (visible) {
    defaultValueClasses.push(classes.active);
  }

  return (
    <div
      className={defaultValueClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
