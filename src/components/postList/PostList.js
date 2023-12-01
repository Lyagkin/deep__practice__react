import PostItem from "../postItem/PostItem";
import EmptyPostListTitle from "../emptyPostListTitle/EmptyPostListTitle";

import "./postList.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = (props) => {
  const { postList, setPosts } = props;

  const deletePost = (id) => {
    setPosts(postList.sortedPosts.filter((item) => item.id !== id));
  };

  const showPostList = () => {
    return postList.sortedPosts.map((item, index) => (
      <CSSTransition key={item.id} timeout={500} classNames="post">
        <PostItem {...item} postNumber={index + 1} deletePost={deletePost} />
      </CSSTransition>
    ));
  };

  const renderPostList = showPostList();

  const content = renderPostList.length ? (
    <>
      <h1 className="app__title">{postList.title}</h1>
      <div className="list__wrapper">
        <TransitionGroup component={null}>{renderPostList}</TransitionGroup>
      </div>
    </>
  ) : (
    <EmptyPostListTitle />
  );

  return <>{content}</>;
};

export default PostList;
