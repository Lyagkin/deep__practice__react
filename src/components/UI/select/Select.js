import React, { useEffect, useState } from "react";

import classes from "./Select.module.scss";

const Select = (props) => {
  const { options, defaultValue, filter, setFilter } = props;

  return (
    <div className={classes.SelectWrapper}>
      <select
        className={classes.Select}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
