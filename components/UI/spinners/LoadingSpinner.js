import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = props => {
  return <div className={`${classes.spinner} ${props.className || ""}`}></div>;
};

export default LoadingSpinner;
