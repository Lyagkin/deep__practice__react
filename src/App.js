import { useState } from "react";

import PostList from "./components/postList/PostList";
import Form from "./components/form/Form";
import Divider from "./components/divider/Divider";
import Select from "./components/UI/select/Select";

import "./styles/App.scss";

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

  const [filter, setFilter] = useState("");

  const sortedPosts = (posts, filter) => {
    if (!filter) {
      return posts;
    }

    if (filter === "title") {
      const newPosts = [...posts];
      return newPosts.sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    if (filter === "body") {
      const newPosts = [...posts];
      return newPosts.sort((a, b) => (a.body > b.body ? 1 : -1));
    }

    if (filter === "default") {
      return posts;
    }
  };

  return (
    <div className="App">
      <Form setPosts={setPosts} posts={posts} />
      <Divider />
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
      <PostList
        postList={{ sortedPosts: sortedPosts(posts, filter), title }}
        setPosts={setPosts}
      />
    </div>
  );
}

export default App;
