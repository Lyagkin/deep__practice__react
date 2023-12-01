import React from "react";

import clasess from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={clasess.LoaderWrapper}>
      <div className={clasess.Loader}></div>
    </div>
  );
};

export default Loader;
