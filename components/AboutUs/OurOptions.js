import Image from "next/image";
import classes from "./OurOptions.module.scss";

const OurOptions = props => {
  return (
    <div className={classes.option}>
      <Image
        src="/favicon.png"
        className={classes.icon}
        width={40}
        height={40}
      />
      <div className={classes.option__text}>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.subtitle}>{props.subTitle}</span>
      </div>
    </div>
  );
};

export default OurOptions;
