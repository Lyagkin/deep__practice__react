import React from "react";
import Input from "../UI/input/Input";

import "./search.scss";

const Search = (props) => {
  const { setSearchStr, searchStr } = props;

  return (
    <div className="search__wrapper">
      <Input
        type="text"
        placeholder="Поиск..."
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
    </div>
  );
};

export default Search;
