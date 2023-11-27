import React from "react";

import "./postItem.scss";

const PostItem = (props) => {
  return (
    <div className="item__wrapper">
      <h3 className="item__title">
        {props.id}. {props.title}
      </h3>
      <p className="item__body">{props.body}</p>
    </div>
  );
};

export default PostItem;
