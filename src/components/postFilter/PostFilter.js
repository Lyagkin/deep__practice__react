import Search from "../search/Search";
import Select from "../UI/select/Select";

const PostFilter = (props) => {
  const { filter, setFilter } = props;

  return (
    <>
      <Search
        value={filter.searchStr}
        onChange={(e) => setFilter({ ...filter, searchStr: e.target.value })}
      />
      <Select
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
          { value: "default", name: "По умолчанию" },
        ]}
        defaultValue="Сортировка по..."
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
      />
    </>
  );
};

export default PostFilter;
