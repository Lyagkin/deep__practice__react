import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort && sort !== "default") {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [posts, sort]);

  return sortedPosts;
};

export const usePosts = (posts, sort, searchStr) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const searchPostByTitle = () => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchStr.toLowerCase()),
    );
  };

  return searchPostByTitle;
};
