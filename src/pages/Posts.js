import { useEffect, useState, useRef } from "react";

import PostList from "../components/postList/PostList";
import Form from "../components/form/Form";
import Divider from "../components/divider/Divider";
import PostFilter from "../components/postFilter/PostFilter";

import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

function Posts() {
  const [title, setTitle] = useState(
    "Posts list about programming luanguages:",
  );
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", searchStr: "" });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    },
  );
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchStr);

  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage((page) => page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Button
        style={{ marginLeft: "4rem" }}
        onClick={() => setModal((modal) => !modal)}
      >
        Добавить пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <Form setPosts={setPosts} posts={posts} setModal={setModal} />
      </Modal>
      <Divider />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Select
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: 100, name: "Показать все" },
        ]}
        defaultValue="Количество элементов на странице"
        value={limit}
        onChange={(value) => setLimit(value)}
      />
      {postError && <h1 style={{ textAlign: "center" }}>{postError}</h1>}
      <PostList
        postList={{
          sortedPosts: sortedAndSearchedPosts(),
          title,
        }}
        setPosts={setPosts}
      />
      <div ref={lastElement} style={{ height: "2rem" }}></div>
      {isPostLoading && <Loader />}
      <Pagination
        className="pages__wrapper"
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      ></Pagination>
    </div>
  );
}

export default Posts;
