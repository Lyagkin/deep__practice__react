import { useContext } from "react";
import { AuthContext } from "../../context";

import React from "react";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для авторизации</h1>
      <form onSubmit={(e) => login(e)}>
        <Input type="text" placeholder="введите логин" />
        <Input type="password" placeholder="введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
