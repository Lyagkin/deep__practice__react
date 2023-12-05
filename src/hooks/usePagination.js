const usePagination = (totalCount) => {
  const array = [];

  for (let i = 0; i < totalCount; i++) {
    array.push(i + 1);
  }

  return array;
};

export default usePagination;
