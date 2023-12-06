import About from "../pages/about/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/postIdPage/PostIdPage";

import Login from "../pages/login/Login";

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];

export const privetaRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
];
