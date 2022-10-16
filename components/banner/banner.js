import classes from "./banner.module.scss";

const Banner = props => {
  return (
    <div className={classes.banner}>
      <h1 className={classes.banner__title}>{props.title}</h1>
      <span className={classes.banner__trand}>{props.subTitle}</span>
      <span className={classes.banner__info}>{props.desc}</span>
    </div>
  );
};

export default Banner;
