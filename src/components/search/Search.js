import Input from "../UI/input/Input";

import "./search.scss";

const Search = (props) => {
  const { setFilter, filter } = props;

  return (
    <div className="search__wrapper">
      <Input
        type="text"
        placeholder="Поиск..."
        value={filter.searchStr}
        onChange={(e) => setFilter({ ...filter, searchStr: e.target.value })}
      />
    </div>
  );
};

export default Search;
