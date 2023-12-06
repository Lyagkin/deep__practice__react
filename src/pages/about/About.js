import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.mainContent}>
        <h1 className={classes.mainTitle}>Тестовый продукт</h1>
        <p className={classes.mainBody}>
          Перейдите по ссылкам в правом верхнем углу, если хотите увидеть больше
        </p>
      </div>
    </div>
  );
};

export default About;
