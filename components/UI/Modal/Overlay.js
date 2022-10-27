import ReactDom from "react-dom";
import { Fragment } from "react";

const Overlay = props => {
  const overlayClass = `overlay ${props.shown ? "top-0" : ""}`;
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div onClick={props.onClick} className={overlayClass}></div>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Overlay;
