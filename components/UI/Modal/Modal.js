import { Fragment } from 'react';
import reactdom from 'react-dom';
import classes from './Modal.module.scss';
import Overlay from './Overlay';

const modalElem = document.getElementById('modal');

const Modal = props => {
  const classNames = `${props.className} ${classes.modal}`;

  return (
    <Fragment>
      {reactdom.createPortal(
        <ul className={classNames}>
          <h1 className={classes.modal__title}>{props.title}</h1>
          {props.children}
        </ul>,
        modalElem
      )}
      <Overlay onClick={props.toggle} />
    </Fragment>
  );
};

export default Modal;
