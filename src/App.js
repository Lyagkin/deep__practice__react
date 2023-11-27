import { useState, useRef } from "react";

import PostList from "./components/postList/PostList";

import "./styles/App.scss";

function App() {
  const [title, setTitle] = useState(
    "Posts list about programming luanguages:",
  );

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 2,
      title: "Phyton",
      body: "Phyton - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 3,
      title: "C++",
      body: "C++ - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
    {
      id: 4,
      title: "Next",
      body: "Next - this is programming language. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur autem, officia accusamus veritatis, velit unde porro, molestias quos ab eveniet impedit et natus sapiente quo dolor suscipit animi sunt?",
    },
  ]);

  const [post, setPost] = useState({
    postTitle: "",
    id: "",
    title: "",
    body: "",
  });

  const addPost = (e) => {
    e.preventDefault();

    const target = e.target.value;

    setPost({ ...post, [e.target.name]: target });
  };

  const addPostAtPosts = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost({
      id: "",
      title: "",
      body: "",
    });
  };

  const formRef = useRef();

  const refForm = (el) => {
    formRef.current = el;
  };

  return (
    <div className="App">
      <form ref={refForm}>
        <input
          required
          type="text"
          placeholder="set post id"
          name="id"
          value={post.id}
          onChange={addPost}
        />
        <input
          required
          type="text"
          placeholder="set post title"
          name="title"
          value={post.title}
          onChange={addPost}
        />
        <input
          required
          type="text"
          placeholder="set post body"
          name="body"
          value={post.body}
          onChange={addPost}
        />
        <button
          type="submit"
          onClick={(e) => {
            addPostAtPosts(e);
          }}
        >
          add post
        </button>
      </form>
      <PostList postList={{ posts, title }} />
    </div>
  );
}

export default App;
