import classes from './OurOptions.module.scss';

const OurOptions = props => {
  return (
    <div className={classes.option}>
      <img alt="" src={props.icon} className={classes.icon} />
      <div className={classes.option__text}>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.subtitle}>{props.subTitle}</span>
      </div>
    </div>
  );
};

export default OurOptions;
