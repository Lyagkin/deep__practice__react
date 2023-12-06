import { useContext } from "react";
import { AuthContext } from "../../../context";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./NavBar.module.scss";
import Button from "../button/Button";

const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className={classes.navbar}>
      <Button onClick={logout}>Выйти</Button>
      <div className={classes.navbar__links}>
        <Link to="/about">Главная</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </nav>
  );
};

export default NavBar;
