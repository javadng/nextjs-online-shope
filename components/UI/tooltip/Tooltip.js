import classes from './Tooltip.module.scss';
import reactdom from 'react-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { uiActions } from '../../../store/ui-slice';

const tooltipElem = document.getElementById('tooltip');
const Tooltip = props => {
  const dispatch = useDispatch();

  const tooltipClasses = `${classes.tooltip} ${
    props.status === 'ERROR' ? classes.error : ''
  }`;

  return (
    <Fragment>
      {reactdom.createPortal(
        <div className={tooltipClasses}>
          <FontAwesomeIcon
            className={classes.close}
            icon={solid('close')}
            onClick={() => dispatch(uiActions.closeTooltip())}
          />
          <span className={classes.message}>{props.message}</span>
        </div>,
        tooltipElem
      )}
    </Fragment>
  );
};

export default Tooltip;
