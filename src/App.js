import { useState, useRef, useEffect } from "react";

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
    id: "",
    title: "",
    body: "",
  });

  const [error, setError] = useState({
    errorId: "",
    errorTitle: "",
    errorBody: "",
  });

  const addPost = (e) => {
    e.preventDefault();

    const target = e.target.value;

    setPost({ ...post, [e.target.name]: target });
  };

  const isValidate = () => {
    if (!post.id || post.id.length < 4) {
      setError({
        ...error,
        errorId: "id is to short or dosn't exist",
      });
      return;
    } else {
      setError({ ...error, errorId: "" });
    }

    // if (!post.title && post.title.length < 7) {
    //   console.log("title is to short or dosn't exist");
    //   return;
    // }

    // if (!post.body && post.body.length < 15) {
    //   console.log("body is to short or dosn't exist");
    //   return;
    // }
  };

  const addPostAtPosts = (e) => {
    e.preventDefault();

    if (!post.id) {
      setError({
        ...error,
        errorId: "id is to short or dosn't exist",
      });
      return;
    } else {
      setPosts([...posts, post]);

      setPost({
        id: "",
        title: "",
        body: "",
      });
    }
  };

  const formRef = useRef();

  const refForm = (el) => {
    formRef.current = el;
  };

  return (
    <div className="App">
      <form ref={refForm}>
        <input
          type="text"
          placeholder="set post id"
          name="id"
          value={post.id}
          onChange={addPost}
          onBlur={isValidate}
        />
        {error.errorId ? (
          <p style={{ color: "red" }}>id is to short or dosnt exist</p>
        ) : null}
        <input
          type="text"
          placeholder="set post title"
          name="title"
          value={post.title}
          onChange={addPost}
          onBlur={isValidate}
        />
        <input
          type="text"
          placeholder="set post body"
          name="body"
          value={post.body}
          onChange={addPost}
          onBlur={isValidate}
        />
        <button type="submit" onClick={addPostAtPosts}>
          add post
        </button>
      </form>
      <PostList postList={{ posts, title }} />
    </div>
  );
}

export default App;
