import Search from "../search/Search";
import Select from "../UI/select/Select";

const PostFilter = (props) => {
  const { filter, setFilter } = props;

  return (
    <>
      <Search filter={filter} setFilter={setFilter} />
      <Select
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
          { value: "default", name: "По умолчанию" },
        ]}
        defaultValue="Сортировка по..."
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default PostFilter;
