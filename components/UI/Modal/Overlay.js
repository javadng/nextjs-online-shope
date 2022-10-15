import classes from './Overlay.module.scss';
import ReactDom from 'react-dom';
import { Fragment } from 'react';

const overlayElement = document.getElementById('overlay');

const Overlay = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div onClick={props.onClick} className={classes.overlay}></div>,
        overlayElement
      )}
    </Fragment>
  );
};

export default Overlay;
