import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

import Button from "../UI/button/Button";

import "./postItem.scss";

const PostItem = (props) => {
  const { id, title, body, deletePost } = props;
  const router = useHistory();
  return (
    <div className="item__wrapper">
      <div className="item__content">
        <h3 className="item__title">
          {id}. {title}
        </h3>
        <p className="item__body">{body}</p>
      </div>
      <div className="item__buttons">
        <Button
          onClick={() => router.push(`/posts/${id}`)}
          shortButton="shortButton"
        >
          Открыть
        </Button>
        <Button onClick={() => deletePost(id)} shortButton="shortButton">
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
