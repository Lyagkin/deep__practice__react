import React from "react";

import classes from "./EmptyPostListItem.module.scss";

const EmptyPostListTitle = () => {
  return <h1 className={classes.EmptyTitle}>Список постов пуст!</h1>;
};

export default EmptyPostListTitle;
