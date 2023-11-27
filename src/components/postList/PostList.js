import React from "react";

import PostItem from "../postItem/PostItem";

import "./postList.scss";

const PostList = (props) => {
  const showPostList = () => {
    return props.postList.posts.map((item) => (
      <PostItem key={item.id} {...item} />
    ));
  };

  return (
    <>
      <h1 className="app__title">{props.postList.title}</h1>
      <div className="list__wrapper">{showPostList()}</div>
    </>
  );
};

export default PostList;
