import React from "react";

import Button from "../UI/button/Button";

import "./postItem.scss";

const PostItem = (props) => {
  const { id, postNumber, title, body, deletePost } = props;
  return (
    <div className="item__wrapper">
      <h3 className="item__title">
        {id}. {title}
      </h3>
      <p className="item__body">{body}</p>
      <Button onClick={() => deletePost(id)} shortButton="shortButton">
        Удалить
      </Button>
    </div>
  );
};

export default PostItem;
