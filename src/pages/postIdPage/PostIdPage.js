import { useEffect, useState } from "react";

import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import Divider from "../../components/divider/Divider";

import classes from "./PostIdPage.module.scss";
import Button from "../../components/UI/button/Button";

const PostIdPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPage, isPageLoading, isPageError] = useFetching(async (id) => {
    const response = await PostService.getPageById(id);
    setPage(response.data);
  });
  const [fetchComments, isCommentsLoading, isCommentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    },
  );

  useEffect(() => {
    fetchPage(id);
    fetchComments(id);
  }, [id]);

  if (isPageLoading) {
    return <Loader />;
  }

  if (isPageError) {
    return <h1>Ошибка загрузки!!!</h1>;
  }

  return (
    <div className={classes.postCommentWrapper}>
      <div className={classes.postCommentItem}>
        <div className={classes.postCommentItemHeader}>
          <h1>Вы открыли страницу поста с номером: {id}</h1>
          <p>{page.title}</p>
        </div>

        <Divider />

        <div className={classes.postCommentItemFooter}>
          <h2 className={classes.postCommentItemFooterHeader}>
            Комментарии к посту:
          </h2>
          {isCommentsLoading ? (
            <Loader />
          ) : (
            <div className={classes.postCommentItemFooterBody}>
              {comments.map((item) => (
                <div key={item.id}>
                  <h3>{item.email}:</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
