import React, { useEffect } from "react";

import PostItem from "../postItem/PostItem";
import EmptyPostListTitle from "../emptyPostListTitle/EmptyPostListTitle";

import "./postList.scss";

const PostList = (props) => {
  console.log("post");
  const { postList, setPosts } = props;

  const deletePost = (id) => {
    setPosts(postList.sortedPosts.filter((item) => item.id !== id));
  };

  const showPostList = () => {
    return postList.sortedPosts.map((item, index) => (
      <PostItem
        key={item.id}
        {...item}
        postNumber={index + 1}
        deletePost={deletePost}
      />
    ));
  };

  const renderPostList = showPostList();

  const content = renderPostList.length ? (
    <>
      <h1 className="app__title">{postList.title}</h1>
      <div className="list__wrapper">{renderPostList}</div>
    </>
  ) : (
    <EmptyPostListTitle />
  );

  return <>{content}</>;
};

export default PostList;
