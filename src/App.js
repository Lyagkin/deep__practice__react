import { useEffect, useState } from "react";

import PostList from "./components/postList/PostList";
import Form from "./components/form/Form";
import Divider from "./components/divider/Divider";
import PostFilter from "./components/postFilter/PostFilter";

import "./styles/App.scss";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [title, setTitle] = useState(
    "Posts list about programming luanguages:",
  );
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", searchStr: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchStr);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
      {postError && <h1 style={{ textAlign: "center" }}>{postError}</h1>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          postList={{
            sortedPosts: sortedAndSearchedPosts(),
            title,
          }}
          setPosts={setPosts}
        />
      )}
    </div>
  );
}

export default App;
