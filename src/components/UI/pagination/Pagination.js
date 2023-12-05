import { useMemo } from "react";

import usePagination from "../../../hooks/usePagination";
import Button from "../button/Button";

const Pagination = (props) => {
  const { className, totalPages, page, changePage } = props;

  const pagesArray = useMemo(() => {
    return usePagination(totalPages);
  }, [totalPages]);

  return (
    <div className={className}>
      {pagesArray.map((item) => (
        <p className={page === item ? "page__current" : ""} key={item}>
          <Button onClick={() => changePage(item)}>{item}</Button>
        </p>
      ))}
    </div>
  );
};

export default Pagination;
