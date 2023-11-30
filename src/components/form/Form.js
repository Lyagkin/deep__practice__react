import React, { useRef } from "react";
import nextId from "react-id-generator";
import { useState } from "react";

import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

import "./form.scss";

const Form = (props) => {
  const { setPosts, posts } = props;

  const [post, setPost] = useState({
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

    if (!post.title || !post.body) {
      alert("Fill all input fields, please!");
      return;
    }

    setPosts([...posts, { ...post, id: nextId() }]);

    setPost({
      id: "",
      title: "",
      body: "",
    });
  };

  return (
    <div className="form__wrapper">
      <h3 className="form__title">Adding post:</h3>
      <form className="form__body">
        <Input
          type="text"
          placeholder="set post title"
          name="title"
          value={post.title}
          onChange={addPost}
        />
        <Input
          type="text"
          placeholder="set post body"
          name="body"
          value={post.body}
          onChange={addPost}
        />
        <Button type="submit" onClick={addPostAtPosts}>
          Add post
        </Button>
      </form>
    </div>
  );
};

export default Form;
