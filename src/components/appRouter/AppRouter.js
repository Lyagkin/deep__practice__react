import { useContext } from "react";

import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

import { privetaRoutes, publicRoutes } from "../../router";
import { AuthContext } from "../../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privetaRoutes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
