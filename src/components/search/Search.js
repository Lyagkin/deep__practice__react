import Input from "../UI/input/Input";

import "./search.scss";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <div className="search__wrapper">
      <Input
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
