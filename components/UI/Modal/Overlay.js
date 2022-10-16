import classes from "./Overlay.module.scss";
import ReactDom from "react-dom";
import { Fragment } from "react";



const Overlay = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div onClick={props.onClick} className={classes.overlay}></div>,
        document.getElementById("overlay")
      )}
    </Fragment> 
  );
};

export default Overlay;
