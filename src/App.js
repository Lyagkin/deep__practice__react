import { useMemo, useState } from "react";

import PostList from "./components/postList/PostList";
import Form from "./components/form/Form";
import Divider from "./components/divider/Divider";
import PostFilter from "./components/postFilter/PostFilter";

import "./styles/App.scss";
import Modal from "./components/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [title, setTitle] = useState(
    "Posts list about programming luanguages:",
  );

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "First, JavaScript - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 2,
      title: "Phyton",
      body: "By the way, Phyton - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 3,
      title: "C++",
      body: "About, C++ - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 4,
      title: "Next",
      body: "So, Next - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
  ]);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: "", searchStr: "" });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchStr);

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
