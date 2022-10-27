import { Fragment, useEffect, useState } from "react";
import reactdom from "react-dom";
import Overlay from "./Overlay";

const Modal = props => {
  const modalClassNames = `${props.modalState ? "top-0" : ""} modal`;
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Fragment>
        {reactdom.createPortal(
          <div className={modalClassNames}>{props.children}</div>,
          document.getElementById("modal-root")
        )}
        <Overlay onClick={props.toggle} shown={props.modalState} />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default Modal;
