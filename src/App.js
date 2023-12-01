import { useEffect, useState } from "react";

import PostList from "./components/postList/PostList";
import Form from "./components/form/Form";
import Divider from "./components/divider/Divider";
import PostFilter from "./components/postFilter/PostFilter";

import "./styles/App.scss";
import Modal from "./components/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
  const [title, setTitle] = useState(
    "Posts list about programming luanguages:",
  );
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", searchStr: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchStr);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

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
      <PostList
        postList={{
          sortedPosts: sortedAndSearchedPosts(),
          title,
        }}
        setPosts={setPosts}
      />
    </div>
  );
}

export default App;
